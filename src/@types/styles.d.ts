// declaration.d.ts
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

// declaration.d.ts
declare module '*.sass' {
  const content: Record<string, string>;
  export default content;
}