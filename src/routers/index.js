import role from "./role";

const initRouters = (app) => {
  const initLink = "/api/v1";

  app.use(`${initLink}/role`, role);
};

module.exports = initRouters;
