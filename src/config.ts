export async function resolveConfig() {
  const config = (await import(`${process.cwd()}/.owners.config.ts`)).default;

  return config;
}
