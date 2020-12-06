export * from "@robinblomberg/assert";
export function describe(description: string, test: () => void | Promise<void>): void | Promise<void>;
export function it(description: string, test: () => void | Promise<void>): void | Promise<void>;
export function test(name: string, run: () => void | Promise<void>): () => void | Promise<void>;
