import * as koa from "koa";
import * as Router from "koa-router";
import { handleRequest } from "./rate-limiter/rate-limiter-middleware";
import { runInNewContext } from "vm";
const PORT = 8000;
export const app = new koa();
const router = new Router();
router.get("/", (ctx, next) => {
  ctx.body = "success";
  return next();
});

app.use(router.routes());

app.use(handleRequest);
