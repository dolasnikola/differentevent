export function getPageImages(folder: string): string[] {
  const imageCounts: Record<string, number> = {
    pagode: 27,
    satori: 9,
  };

  const count = imageCounts[folder];
  if (!count) return [];

  const images: string[] = [];
  for (let i = 1; i <= count; i++) {
    images.push(`/images/${folder}/${folder === "satori" ? "sator" : folder.slice(0, -1).replace(/e$/, "e")}-${i}.jpg`);
  }
  return images;
}

export function getPagodeImages(): string[] {
  const indices = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
  return indices.map((i) => `/images/pagode/pagode-${i}.jpg`);
}

export function getSatoriImages(): string[] {
  return Array.from({ length: 9 }, (_, i) => `/images/satori/sator-${i + 1}.jpg`);
}
