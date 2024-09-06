export function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}

export function random(minOrMax: number, max?: number): number {
  let actualMin: number;
  let actualMax: number;
  if (max === undefined) {
    actualMin = 0;
    actualMax = minOrMax;
  } else {
    actualMin = minOrMax;
    actualMax = max;
  }
  return Math.floor(Math.random() * (actualMax - actualMin + 1)) + actualMin;
}

export function sample<T>(arr: T[]): T {
  return arr[random(arr.length - 1)];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= wait) {
      func(...args);
      lastCall = now;
    }
  };
}
