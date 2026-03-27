export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}

export function getPagodeImages(): string[] {
  const indices = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
  return indices.map((i) => `${basePath}/images/pagode/pagode-${i}.jpg`);
}

export function getSatoriImages(): string[] {
  return Array.from({ length: 9 }, (_, i) => `${basePath}/images/satori/sator-${i + 1}.jpg`);
}
