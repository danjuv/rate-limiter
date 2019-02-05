import { RateLimiter } from "./rate-limiter";
const config = require("../../config.json");
interface IpLimiter {
  [key: string]: RateLimiter;
}
const ipLimiters: IpLimiter = {};
export async function canHandleRequest(ip: string) {
  if (!ipLimiters[ip]) {
    ipLimiters[ip] = new RateLimiter(
      config.rate_limiting.requests,
      config.rate_limiting.interval
    );
  }
  const rateLimiter = ipLimiters[ip];
  return rateLimiter.canConsume();
}
