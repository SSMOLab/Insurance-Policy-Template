"use strict";

const env = process.env.NODE_ENV || "development";
const configs = {
  base: {
    env,
    host: getEnv("VUE_APP_GRAPHQL_HTTP") || "localhost",
    port: getEnv("VUE_APP_GRAPHQL_PORT") || 4000,
    endpoint: getEnv("VUE_APP_GRAPHQL_ENDPOINT") || "",
    language: getEnv("VUE_APP_I18N_LOCALE") || "tw"
  }
};
function getEnv(key) {
  if (window.config) {
    return window.config[key];
  } else {
    return process.env[key];
  }
}
const config = Object.assign(configs.base, configs[env]);

export default config;
