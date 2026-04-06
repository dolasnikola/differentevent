export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}

const imageAlts: Record<string, string> = {
  "different-event.webp": "iznajmljivanje šatora different event",
  "Iznajmljivanje-barijera-stubica-1.webp": "iznajmljivanje barijera stubića sa kanapom",
  "Iznajmljivanje-barskih-stolova-1.webp": "iznajmljivanje barskih stolova za proslave",
  "Iznajmljivanje-barskih-stolova-2.webp": "barski stolovi za iznajmljivanje",
  "Iznajmljivanje-barskih-stolova-3.webp": "beli barski stolovi za iznajmljivanje",
  "Iznajmljivanje-escajga-1.webp": "iznajmljivanje escajga tanjira i čaša za proslave",
  "Iznajmljivanje-fotelja-1.webp": "iznajmljivanje fotelja za događaje",
  "Iznajmljivanje-govornica-1.webp": "iznajmljivanje govornice za događaje",
  "Iznajmljivanje-klima-1.webp": "iznajmljivanje klima uređaja",
  "Iznajmljivanje-pagoda-1.webp": "satori za svadbe",
  "Iznajmljivanje-pagoda-2.webp": "sator za svadbe cena",
  "Iznajmljivanje-pagoda-3.webp": "iznajmljivanje satora",
  "Iznajmljivanje-pagoda-4.webp": "iznajmljivanje pagoda za svadbe",
  "Iznajmljivanje-pagoda-5.webp": "pagode za iznajmljivanje na otvorenom",
  "Iznajmljivanje-pagoda-6.webp": "iznajmljivanje pagoda 5x5m bele boje",
  "Iznajmljivanje-pagoda-7.webp": "satori za proslave iznajmljivanje pagoda Beograd",
  "Iznajmljivanje-pagoda-8.webp": "beli šatori iznajmljivanje pagode za svadbe",
  "Iznajmljivanje-pagoda-9.webp": "iznajmljivanje pagoda za festivale i manifestacije",
  "Iznajmljivanje-pagoda-10.webp": "iznajmljivanje pagoda profesionalna montaža",
  "Iznajmljivanje-pagoda-11.webp": "beli satori za iznajmljivanje pagode Beograd",
  "Iznajmljivanje-pagoda-12.webp": "iznajmljivanje pagoda za venčanja i privatne proslave",
  "Iznajmljivanje-pagoda-13.webp": "iznajmljivanje pagoda kompletna oprema",
  "Iznajmljivanje-pivskih-setova-1.webp": "iznajmljivanje pivskih setova za festivale i proslave",
  "Iznajmljivanje-plinskih-grejalica-1.webp": "iznajmljivanje plinskih grejalica",
  "Iznajmljivanje-satora-1.webp": "iznajmljivanje šatora bele boje za venčanja i svadbe",
  "Iznajmljivanje-satora-2.webp": "beli satori za iznajmljivanje Beograd",
  "Iznajmljivanje-satora-3.webp": "iznajmljivanje šatora za proslave i korporativne evente",
  "Iznajmljivanje-satora-4.webp": "satori za svadbe iznajmljivanje beli šatori",
  "Iznajmljivanje-satora-5.webp": "iznajmljivanje belih šatora montaža i demontaža u ceni",
  "Iznajmljivanje-satora-6.webp": "beli satori iznajmljivanje cena Beograd",
  "Iznajmljivanje-satora-3x3-1.webp": "iznajmljivanje šatora 3x3",
  "Iznajmljivanje-satora-3x3-2.webp": "mali satori za iznajmljivanje 3x3",
  "Iznajmljivanje-satora-3x3-3.webp": "šator 3x3 iznajmljivanje",
  "Iznajmljivanje-stolica-1.webp": "iznajmljivanje Tiffany stolica za venčanja i proslave",
  "Iznajmljivanje-stolica-2.webp": "Tiffany stolice iznajmljivanje",
  "Iznajmljivanje-stolica-3.webp": "iznajmljivanje stolica",
  "Iznajmljivanje-stolova-1.webp": "iznajmljivanje stolova za proslave i venčanja",
  "Iznajmljivanje-stolova-2.webp": "okrugli stolovi za iznajmljivanje",
  "Iznajmljivanje-stolova-3.webp": "iznajmljivanje stolova za korporativne evente",
  "Iznajmljivanje-suncobrana-1.webp": "iznajmljivanje belih suncobrana za događaje",
  "Iznajmljivanje-ventilatora-1.webp": "iznajmljivanje ventilatora sa raspršivačem vode",
};

export function getImageAlt(imagePath: string, fallback?: string): string {
  const filename = imagePath.split("/").pop() || "";
  return imageAlts[filename] || fallback || "";
}

export function getPagodeImages(): string[] {
  return Array.from({ length: 13 }, (_, i) => `${basePath}/images/pagode/Iznajmljivanje-pagoda-${i + 1}.webp`);
}

export function getSatoriImages(): string[] {
  return Array.from({ length: 6 }, (_, i) => `${basePath}/images/satori/Iznajmljivanje-satora-${i + 1}.webp`);
}
