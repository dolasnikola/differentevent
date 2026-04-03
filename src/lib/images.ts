export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}

export function getPagodeImages(): string[] {
  return Array.from({ length: 13 }, (_, i) => `${basePath}/images/pagode/Iznajmljivanje-pagoda-${i + 1}.webp`);
}

export function getSatoriImages(): string[] {
  return Array.from({ length: 6 }, (_, i) => `${basePath}/images/satori/Iznajmljivanje-satora-${i + 1}.webp`);
}
