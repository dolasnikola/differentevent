export interface Product {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  images: string[];
  seo: {
    title: string;
    description: string;
  };
}

// Helper za generisanje slika
const pagodeImages = (indices: number[]) =>
  indices.map((i) => `/images/pagode/pagode-${i}.jpg`);
const satoriImages = (indices: number[]) =>
  indices.map((i) => `/images/satori/sator-${i}.jpg`);

export const products: Product[] = [
  // ========== ŠATORI ==========
  {
    slug: "sator-za-vencanje",
    category: "Šatori",
    categorySlug: "satori",
    title: "Šator za venčanje",
    shortDescription: "Elegantni šatori za venčanja i svečane proslave na otvorenom.",
    description:
      "Naši šatori za venčanja pružaju savršen ambijent za vaš najvažniji dan. Dostupni u različitim veličinama, sa mogućnošću potpunog prilagođavanja dekoraciji. Profesionalna montaža i demontaža uključena u cenu.",
    features: [
      "Različite veličine (od 50 do 500+ gostiju)",
      "Bela PVC cerada visoke kvalitete",
      "Mogućnost dodavanja podova, rasvete i grejanja",
      "Profesionalna montaža i demontaža",
      "Otpornost na vremenske uslove",
      "Elegantne enterijerske opcije",
    ],
    images: satoriImages([1, 2, 3, 4, 5]),
    seo: {
      title: "Šator za venčanje - Iznajmljivanje",
      description:
        "Iznajmljivanje elegantnih šatora za venčanja u Beogradu i Srbiji. Profesionalna montaža, različite veličine. Zatražite ponudu!",
    },
  },
  {
    slug: "sator-3x3",
    category: "Šatori",
    categorySlug: "satori",
    title: "Šator 3x3",
    shortDescription: "Kompaktni šator 3x3m idealan za manje događaje i štandove.",
    description:
      "Šator dimenzija 3x3 metra je idealan za manje događaje, štandove na sajmovima, garden partije i privremene zaklonjene prostore. Brza montaža i praktičan transport.",
    features: [
      "Dimenzije: 3x3 metra",
      "Brza i jednostavna montaža",
      "Idealan za štandove i manje događaje",
      "Lak za transport",
      "Vodootporna cerada",
    ],
    images: satoriImages([6, 7, 8]),
    seo: {
      title: "Šator 3x3 - Iznajmljivanje malih šatora",
      description:
        "Iznajmljivanje šatora 3x3m u Beogradu. Idealan za štandove, garden partije i manje događaje. Brza montaža.",
    },
  },
  {
    slug: "magacinski-sator",
    category: "Šatori",
    categorySlug: "satori",
    title: "Magacinski šator",
    shortDescription: "Robusni magacinski šatori za skladištenje i industrijske potrebe.",
    description:
      "Magacinski šatori su idealno rešenje za privremeno ili dugoročno skladištenje robe, mašina i materijala. Izuzetno robusni i otporni na sve vremenske uslove.",
    features: [
      "Različite dimenzije po meri",
      "Čelična konstrukcija",
      "PVC cerada otporna na UV i vremenske uslove",
      "Mogućnost ugradnje vrata i prozora",
      "Dugoročna upotreba",
      "Brza montaža",
    ],
    images: satoriImages([1, 5, 9]),
    seo: {
      title: "Magacinski šator - Iznajmljivanje i prodaja",
      description:
        "Magacinski šatori za skladištenje i industrijske potrebe. Robusna konstrukcija, različite dimenzije. Beograd i Srbija.",
    },
  },
  {
    slug: "industrijski-sator",
    category: "Šatori",
    categorySlug: "satori",
    title: "Industrijski šator",
    shortDescription: "Veliki industrijski šatori za proizvodnju i logistiku.",
    description:
      "Industrijski šatori su projektovani za najzahtevnije uslove. Idealni za proizvodne pogone, logističke centre, i velike skladišne prostore.",
    features: [
      "Veliki rasponi bez stubova",
      "Teška čelična konstrukcija",
      "Termoizolacija opciona",
      "Industrijska vrata",
      "Otpornost na vetar i sneg",
      "Prilagodljive dimenzije",
    ],
    images: satoriImages([2, 4, 7]),
    seo: {
      title: "Industrijski šator - Veliki šatori za industriju",
      description:
        "Industrijski šatori za proizvodnju i logistiku. Veliki rasponi, robusna konstrukcija. Iznajmljivanje i prodaja u Srbiji.",
    },
  },
  {
    slug: "prodaja-satora",
    category: "Šatori",
    categorySlug: "satori",
    title: "Prodaja šatora",
    shortDescription: "Prodaja novih i polovnih šatora svih tipova i veličina.",
    description:
      "Nudimo prodaju šatora svih tipova — od malih garden šatora do velikih industrijskih konstrukcija. Novi i polovni šatori po povoljnim cenama sa garancijom kvaliteta.",
    features: [
      "Novi i polovni šatori",
      "Sve veličine i tipovi",
      "Garancija kvaliteta",
      "Dostava na teritoriji Srbije",
      "Stručni saveti pri izboru",
      "Povoljne cene",
    ],
    images: satoriImages([3, 6, 8]),
    seo: {
      title: "Prodaja šatora - Novi i polovni šatori",
      description:
        "Prodaja šatora u Srbiji. Novi i polovni šatori svih veličina. Garancija kvaliteta, dostava na teritoriji Srbije.",
    },
  },
  {
    slug: "montazne-hale",
    category: "Šatori",
    categorySlug: "satori",
    title: "Montažne hale",
    shortDescription: "Montažne hale za trajne i polutrajne objekte.",
    description:
      "Montažne hale su polutrajni objekti sa čeličnom konstrukcijom i PVC ili sendvič panel oblogom. Idealne za proizvodnju, skladištenje, sportske objekte i sajamske prostore.",
    features: [
      "Čelična konstrukcija",
      "PVC ili sendvič paneli",
      "Termoizolacija",
      "Prilagodljive dimenzije",
      "Brza montaža",
      "Dugotrajan kvalitet",
    ],
    images: satoriImages([5, 9, 1]),
    seo: {
      title: "Montažne hale - Proizvodnja i montaža",
      description:
        "Montažne hale za skladištenje, proizvodnju i sportske objekte. Čelična konstrukcija, brza montaža. Srbija.",
    },
  },

  // ========== PAGODE ==========
  {
    slug: "iznajmljivanje",
    category: "Pagode",
    categorySlug: "pagode",
    title: "Iznajmljivanje pagoda",
    shortDescription: "Elegantne pagode za venčanja, proslave i korporativne događaje.",
    description:
      "Naše pagode su idealne za elegantne događaje na otvorenom. Dostupne u dimenzijama 3x3m, 4x4m, 5x5m i 6x6m. Mogu se spajati za veće površine. Profesionalna montaža uključena.",
    features: [
      "Dimenzije: 3x3, 4x4, 5x5, 6x6 metara",
      "Mogućnost spajanja više pagoda",
      "Elegantna bela PVC cerada",
      "Prozirne ili pune stranice",
      "Profesionalna montaža i demontaža",
      "Otpornost na kišu i vetar",
    ],
    images: pagodeImages([1, 2, 3, 4, 5, 6, 8, 9, 10]),
    seo: {
      title: "Iznajmljivanje pagoda - Pagode za events",
      description:
        "Iznajmljivanje elegantnih pagoda za venčanja i događaje u Beogradu. Dimenzije 3x3 do 6x6m. Profesionalna montaža uključena.",
    },
  },
  {
    slug: "prodaja",
    category: "Pagode",
    categorySlug: "pagode",
    title: "Prodaja pagoda",
    shortDescription: "Prodaja novih pagoda sa garancijom kvaliteta.",
    description:
      "Nudimo prodaju novih pagoda vrhunskog kvaliteta. Idealne za restorane, hotele, event kompanije i privatne korisnike koji žele trajno rešenje za događaje na otvorenom.",
    features: [
      "Nove pagode sa garancijom",
      "Sve standardne dimenzije",
      "Čelični ili aluminijumski ram",
      "UV otporna PVC cerada",
      "Dostava na teritoriji Srbije",
      "Stručna podrška pri izboru",
    ],
    images: pagodeImages([11, 12, 13, 14, 15]),
    seo: {
      title: "Prodaja pagoda - Nove pagode",
      description:
        "Prodaja novih pagoda u Srbiji. Vrhunski kvalitet, garancija, sve dimenzije. Idealno za restorane i event kompanije.",
    },
  },

  // ========== TIFFANY STOLICE ==========
  {
    slug: "bele",
    category: "Tiffany stolice",
    categorySlug: "tiffany-stolice",
    title: "Bele Tiffany stolice",
    shortDescription: "Klasične bele Tiffany stolice za elegantne događaje.",
    description:
      "Bele Tiffany stolice su sinonim za eleganciju. Idealne za venčanja, svečane večere i ekskluzivne događaje. Udobne, izdržljive i vizuelno upečatljive.",
    features: [
      "Klasičan beli Tiffany dizajn",
      "Udoban sedi šte sa jastučićem",
      "Izdržljiva polikarbonatna konstrukcija",
      "Nosivost do 150 kg",
      "Lako slaganje za transport",
      "Dostupne u velikim količinama",
    ],
    images: pagodeImages([16, 17, 18]),
    seo: {
      title: "Bele Tiffany stolice - Iznajmljivanje",
      description:
        "Iznajmljivanje belih Tiffany stolica u Beogradu. Elegantne stolice za venčanja i svečane događaje. Povoljne cene.",
    },
  },
  {
    slug: "zlatne",
    category: "Tiffany stolice",
    categorySlug: "tiffany-stolice",
    title: "Zlatne Tiffany stolice",
    shortDescription: "Luksuzne zlatne Tiffany stolice za premium događaje.",
    description:
      "Zlatne Tiffany stolice dodaju dozu luksuza svakom događaju. Savršene za gala večere, ekskluzivne proslave i VIP zone.",
    features: [
      "Zlatna završna obrada",
      "Udoban sedi šte sa jastučićem",
      "Izdržljiva konstrukcija",
      "Nosivost do 150 kg",
      "Premium izgled",
      "Dostupne u velikim količinama",
    ],
    images: pagodeImages([19, 20, 21]),
    seo: {
      title: "Zlatne Tiffany stolice - Iznajmljivanje",
      description:
        "Iznajmljivanje zlatnih Tiffany stolica u Beogradu. Luksuzne stolice za premium događaje. Dostava i montaža.",
    },
  },

  // ========== DODATNA OPREMA ==========
  {
    slug: "stolovi",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Stolovi",
    shortDescription: "Okrugli i pravougaoni stolovi za sve tipove događaja.",
    description:
      "Nudimo iznajmljivanje stolova različitih oblika i dimenzija. Okrugli stolovi za svečane večere, pravougaoni za konferencije, koktel stolovi za koktele.",
    features: ["Okrugli stolovi (Ø150, Ø180cm)", "Pravougaoni stolovi", "Koktel stolovi", "Beer garden stolovi", "Stabilna čelična konstrukcija"],
    images: pagodeImages([22, 23]),
    seo: { title: "Stolovi za events - Iznajmljivanje", description: "Iznajmljivanje stolova za događaje u Beogradu. Okrugli, pravougaoni i koktel stolovi. Povoljne cene." },
  },
  {
    slug: "stolice",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Stolice",
    shortDescription: "Razne stolice za sve vrste događaja.",
    description: "Različiti tipovi stolica za svaki tip događaja — od plastičnih stolica za veće kapacitete do premium stolica za ekskluzivne proslave.",
    features: ["Plastične stolice", "Drvene stolice", "Preklopne stolice", "Stolice sa navlakama", "Velike količine"],
    images: pagodeImages([24, 25]),
    seo: { title: "Stolice za events - Iznajmljivanje", description: "Iznajmljivanje stolica za događaje u Beogradu. Razni tipovi, povoljne cene." },
  },
  {
    slug: "suncobrani",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Suncobrani",
    shortDescription: "Veliki suncobrani za zaštitu od sunca na events.",
    description: "Profesionalni suncobrani velikih dimenzija za zaštitu od sunca na događajima, baštama restorana i terasama.",
    features: ["Veliki prečnik (3-5m)", "UV zaštita", "Stabilna baza", "Razne boje"],
    images: pagodeImages([26, 27]),
    seo: { title: "Suncobrani - Iznajmljivanje", description: "Iznajmljivanje velikih suncobrana za events i bašte u Beogradu." },
  },
  {
    slug: "grejanje",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Grejanje",
    shortDescription: "Sistemi grejanja za šatore i spoljne prostore.",
    description: "Profesionalni sistemi grejanja koji omogućavaju korišćenje šatora i tokom hladnijih meseci. Gasni i električni grejači.",
    features: ["Gasni grejači", "Električni grejači", "Infracrveni grejači", "Grejanje za velike šatore"],
    images: pagodeImages([28, 1]),
    seo: { title: "Grejanje šatora - Iznajmljivanje", description: "Iznajmljivanje sistema za grejanje šatora u Beogradu. Gasni i električni grejači." },
  },
  {
    slug: "klimatizacija",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Klimatizacija",
    shortDescription: "Sistemi klimatizacije za šatore i event prostore.",
    description: "Mobilni klima uređaji i sistemi za hlađenje koji obezbeđuju ugodan ambijent u šatorima tokom letnjih meseci.",
    features: ["Mobilni klima uređaji", "Industrijski ventilatori", "Hlađenje velikih prostora", "Tihi rad"],
    images: pagodeImages([2, 3]),
    seo: { title: "Klimatizacija šatora - Iznajmljivanje", description: "Iznajmljivanje klima uređaja za šatore i events u Beogradu." },
  },
  {
    slug: "rasveta",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Rasveta",
    shortDescription: "Profesionalna rasveta za events i šatore.",
    description: "Kompletna rasveta za događaje — od ambijentalne rasvete za venčanja do profesionalne scene rasvete za koncerte i korporativne događaje.",
    features: ["Ambijentalna rasveta", "LED trake", "Par reflektori", "Lusteri za šatore", "Fairy lights"],
    images: pagodeImages([4, 5]),
    seo: { title: "Rasveta za events - Iznajmljivanje", description: "Iznajmljivanje profesionalne rasvete za events i šatore u Beogradu." },
  },
  {
    slug: "podijumi",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Podijumi i bine",
    shortDescription: "Podijumi i bine za sve vrste događaja i nastupa.",
    description: "Modularne bine i podijumi za koncerte, konferencije, modne revije i sve tipove nastupa. Prilagodljive dimenzije i visine.",
    features: ["Modularne konstrukcije", "Razne dimenzije", "Prilagodljive visine", "Stepenište i rampe", "Sigurnosne ograde"],
    images: pagodeImages([6, 8]),
    seo: { title: "Podijumi i bine - Iznajmljivanje", description: "Iznajmljivanje podijuma i bina za events u Beogradu. Modularne konstrukcije." },
  },
  {
    slug: "beer-setovi",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Beer setovi",
    shortDescription: "Beer garden setovi sa klupama i stolovima.",
    description: "Klasični beer garden setovi (sto + 2 klupe) za festivale, oktoberfest događaje, bašte i outdoor proslave.",
    features: ["Drveni sto + 2 klupe", "Kapacitet 6-8 osoba po setu", "Stabilna konstrukcija", "Lako slaganje"],
    images: pagodeImages([9, 10]),
    seo: { title: "Beer setovi - Iznajmljivanje", description: "Iznajmljivanje beer garden setova u Beogradu. Sto + klupe za festivale i proslave." },
  },
  {
    slug: "escajg",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Escajg i porcelan",
    shortDescription: "Kompletni setovi escajga i porcelana za events.",
    description: "Profesionalni escajg i porcelanski setovi za svečane večere i event ketering. Tanjiri, čaše, pribor za jelo.",
    features: ["Porcelanski tanjiri", "Kristalne čaše", "Inox pribor za jelo", "Salvete i stolnjaci", "Kompletni setovi"],
    images: pagodeImages([11, 12]),
    seo: { title: "Escajg i porcelan - Iznajmljivanje", description: "Iznajmljivanje escajga i porcelana za events u Beogradu." },
  },
  {
    slug: "ograde",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Ograde (HERAS)",
    shortDescription: "HERAS ograde za obezbeđenje events i gradilišta.",
    description: "Mobilne HERAS ograde za obezbeđenje perimetra na festivalima, gradilištima, sportskim događajima i koncertima.",
    features: ["Standardne HERAS dimenzije", "Betonska postolja", "Laka montaža", "Velike količine"],
    images: pagodeImages([13, 14]),
    seo: { title: "HERAS ograde - Iznajmljivanje", description: "Iznajmljivanje HERAS ograda za events i gradilišta u Beogradu." },
  },
  {
    slug: "barijere",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Barijere",
    shortDescription: "Barijere za kontrolu publike na events.",
    description: "Metalne barijere za kontrolu protoka publike na koncertima, festivalima i javnim događajima.",
    features: ["Čelične barijere", "Standardne dimenzije", "Sigurnosni mehanizmi", "Lako povezivanje"],
    images: pagodeImages([15, 16]),
    seo: { title: "Barijere - Iznajmljivanje", description: "Iznajmljivanje barijera za kontrolu publike na events u Beogradu." },
  },
  {
    slug: "barski-stolovi",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Barski stolovi",
    shortDescription: "Visoki barski stolovi za koktel events.",
    description: "Elegantni barski stolovi za koktel events, VIP zone i bar prostore. Razni stilovi i završne obrade.",
    features: ["Visina 110cm", "Razni stilovi", "Stabilna baza", "LED opcije"],
    images: pagodeImages([17, 18]),
    seo: { title: "Barski stolovi - Iznajmljivanje", description: "Iznajmljivanje barskih stolova za koktel events u Beogradu." },
  },
  {
    slug: "barske-stolice",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Barske stolice",
    shortDescription: "Visoke barske stolice za bar zone.",
    description: "Barske stolice za upotrebu uz barske stolove na koktel events, VIP zonama i lounge prostorima.",
    features: ["Visina prilagođena barskim stolovima", "Udobne", "Razni materijali", "Moderne i klasične opcije"],
    images: pagodeImages([19, 20]),
    seo: { title: "Barske stolice - Iznajmljivanje", description: "Iznajmljivanje barskih stolica za events u Beogradu." },
  },
  {
    slug: "fotelje",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Fotelje",
    shortDescription: "Lounge fotelje za VIP zone i chill-out prostore.",
    description: "Elegantne lounge fotelje za VIP zone, chill-out prostore i ekskluzivne događaje. Udobne i vizuelno atraktivne.",
    features: ["Lounge fotelje", "Razni stilovi", "Udobno sedenje", "Premium izgled"],
    images: pagodeImages([21, 22]),
    seo: { title: "Fotelje - Iznajmljivanje", description: "Iznajmljivanje lounge fotelja za VIP zone i events u Beogradu." },
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProduct(categorySlug: string, slug: string): Product | undefined {
  return products.find((p) => p.categorySlug === categorySlug && p.slug === slug);
}
