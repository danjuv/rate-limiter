import * as koa from "koa";
import * as limiter from "./rate-limiter-service";
export async function handleRequest(ctx: koa.Context, next: Function) {
  console.log(`handling request ${ctx.ip}`);
  const canConsume = await limiter.canHandleRequest(ctx.ip);
  if (!canConsume) {
    ctx.body = "success bad";
    ctx.status = 429;
  } else {
    return next();
  }
}
