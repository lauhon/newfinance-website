import config from "./config";

export const createAuthBasic = () => {
  return "Basic " + Buffer.from(config.mailJetUser + ":" + config.mailJetPassword).toString("base64");
};
