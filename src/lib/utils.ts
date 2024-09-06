export function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
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
