export class RateLimiter {
  private capacity: number;
  private tokens: number;
  private limitWindow: number; //seconds
  private refillRate: number;
  private lastRefill: number;
  constructor(capacity: number, limitWindow: number) {
    this.capacity = capacity;
    this.limitWindow = 0;
    this.lastRefill = new Date().getSeconds();
    this.tokens = 1;
    this.refillRate = capacity / limitWindow;
  }

  public canConsume(): boolean {
    this.refill();
    if (this.tokens > 0) {
      this.tokens--;
      return true;
    } else {
      return false;
    }
  }

  private refill(): void {
    return;
  }
}
