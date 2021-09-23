import { FastifyLoggerOptions } from "fastify";
import pino from "pino";

interface Req {
  method: string;
  url: string;
  direction: string;
}

interface Res extends Req {
  statusCode: number;
  responseTime: number;
}

const logger = pino({
  name: "server",
  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url,
      direction: "~~>",
    }),
    res: (res) => ({
      method: res.request.method,
      url: res.request.url,
      statusCode: res.statusCode,
      responseTime: Math.round(res.getResponseTime() * 100) / 100,
      direction: res.statusCode >= 500 ? "!~~" : "<~~",
    }),
  } as FastifyLoggerOptions["serializers"],
  prettyPrint: {
    translateTime: true,
    ignore: "req,res,err,responseTime",
    messageFormat: (
      {
        req,
        res,
        ...log
      }: ({ req: Req; res: never; err: never } | { res: Res; req: never; err: never }) & Record<string, any>,
      messageKey,
    ) => {
      if (req) return `${req.direction} ${req.method} ${req.url}`;
      if (res) return `${res.direction} ${res.method} ${res.url} ${res.statusCode} ${res.responseTime}ms`;
      return `${log[messageKey]}`;
    },
  },
});

export default logger;
