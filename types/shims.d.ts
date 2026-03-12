declare module 'tinify' {
  const tinify: {
    key: string;
    fromBuffer: (data: Buffer) => {toFile: (target: string, cb: (error: unknown) => void) => void};
  };
  export default tinify;
}
