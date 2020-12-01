export * from '@robinblomberg/assert';

export function describe<T extends void | Promise<void>>(
  description: string,
  test: () => T
): () => T;

export const it = describe;

export function test<T extends void | Promise<void>>(name: string, run: () => T): () => T;
