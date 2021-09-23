import createCache, { EmotionCache } from "@emotion/cache";

const createEmotionCache = (): EmotionCache => createCache({ key: "css" });

export default createEmotionCache;
