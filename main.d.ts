/*
 * Internal types
 * -------------------------------------------------------------------------------------------------
 */

export type Promiseable<T> = T | Promise<T>;

export type TestFunction = () => Promiseable<void>;

/*
 * External types
 * -------------------------------------------------------------------------------------------------
 */

export * from '@robinblomberg/assert';

export const describe: (description: string, test: TestFunction) => Promiseable<void>;

export const it: (description: string, test: TestFunction) => Promiseable<void>;

export const test: (name: string, run: TestFunction) => TestFunction;
