export function isNonNull<T>(value: T): value is NonNullable<T> {
  return value != null;
}

export function toNumber(value: string): number {
  return value as unknown as number;
}
