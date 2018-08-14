const express = require("express");
const { Nuxt, Builder } = require("nuxt");

const app = express();

const port = process.env.PORT || 3000;
app.set("port", port);

const config = require("../nuxt.config");
config.dev = process.env.NODE_ENV !== "production";

async function start() {
  const nuxt = new Nuxt(config);
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }
  app.use(nuxt.render);
  app.listen(port, () => console.log("Let's go at ", port));
}

start();