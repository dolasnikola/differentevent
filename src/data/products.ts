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

import { basePath } from "@/lib/images";

// Helper za generisanje slika
const pagodeImages = (indices: number[]) =>
  indices.map((i) => `${basePath}/images/pagode/pagode-${i}.jpg`);
const satoriImages = (indices: number[]) =>
  indices.map((i) => `${basePath}/images/satori/sator-${i}.jpg`);

export const products: Product[] = [
  // ========== ŠATORI ==========
  {
    slug: "iznajmljivanje-satora",
    category: "Šatori",
    categorySlug: "satori",
    title: "Iznajmljivanje šatora",
    shortDescription: "Šatori bele boje, modernog dizajna, pogodni za sve vrste događaja.",
    description:
      "Iznajmljujemo šatore bele boje, modernog dizajna, pogodne za sve vrste događaja — od svadbi i venčanja, do korporativnih događaja, sajmova, koncerata i festivala.",
    features: [
      "Modularni šatori širine 10 m, sa mogućnošću produžavanja u segmentima od 5 m",
      "Bela PVC cerada visokog kvaliteta",
      "Mogućnost dodavanja podova, rasvete i grejanja",
      "Profesionalna montaža i demontaža",
      "Otpornost na različite vremenske uslove",
    ],
    images: satoriImages([1, 2, 3, 4, 5]),
    seo: {
      title: "Iznajmljivanje šatora Beograd",
      description:
        "Iznajmljivanje šatora bele boje za sve vrste događaja u Beogradu i Srbiji. Modularni šatori širine 10m. Profesionalna montaža uključena.",
    },
  },
  {
    slug: "iznajmljivanje-satora-3x3",
    category: "Šatori",
    categorySlug: "satori",
    title: "Iznajmljivanje šatora 3x3",
    shortDescription: "Šator 3x3m idealan za manje događaje, štandove i promocije.",
    description:
      "Šator dimenzija 3x3 metra idealan je za manje događaje, sajamske štandove, promocije, rođendane, okupljanja u dvorištu i razne privatne proslave. Odlikuje ga brza i jednostavna montaža, kao i praktičan transport, što ga čini odličnim rešenjem za situacije gde je potrebna brza montaža.",
    features: [
      "Dimenzije: 3x3 metra",
      "Brza i jednostavna montaža",
      "Praktičan transport",
      "Idealan za štandove i manje događaje",
      "Vodootporna cerada",
    ],
    images: satoriImages([6, 7, 8]),
    seo: {
      title: "Iznajmljivanje šatora 3x3 Beograd",
      description:
        "Iznajmljivanje šatora 3x3m u Beogradu. Idealan za sajamske štandove, promocije, rođendane. Brza montaža.",
    },
  },
  {
    slug: "prodaja-satora",
    category: "Šatori",
    categorySlug: "satori",
    title: "Prodaja šatora",
    shortDescription: "Prodaja šatora različitih dimenzija i namena — novi i polovni.",
    description:
      "Nudimo prodaju šatora različitih dimenzija i namena — od kompaktnih modela za manje događaje do velikih modularnih šatora za proslave, manifestacije i komercijalnu upotrebu. U ponudi su novi i polovni šatori, uz pouzdan kvalitet i dugotrajnost.",
    features: [
      "Novi i polovni šatori",
      "Sve veličine i tipovi",
      "Stručni saveti pri izboru",
      "Povoljne cene",
    ],
    images: satoriImages([3, 6, 9]),
    seo: {
      title: "Prodaja šatora - Novi i polovni šatori",
      description:
        "Prodaja šatora u Srbiji. Novi i polovni šatori svih dimenzija i namena. Povoljne cene, pouzdan kvalitet.",
    },
  },

  // ========== PAGODE ==========
  {
    slug: "iznajmljivanje",
    category: "Pagode",
    categorySlug: "pagode",
    title: "Iznajmljivanje pagoda",
    shortDescription: "Elegantne pagode 5x5m za događaje na otvorenom.",
    description:
      "Naše pagode dimenzija 5x5 m predstavljaju vrhunski izbor za elegantne događaje na otvorenom. Zahvaljujući modernom dizajnu i visokom kvalitetu izrade, savršeno se uklapaju u venčanja, korporativne proslave i ekskluzivne događaje. Mogu se međusobno povezivati kako bi se dobile veće, funkcionalne celine.",
    features: [
      "Dimenzije: 5x5 metara",
      "Mogućnost spajanja više pagoda",
      "Elegantna bela PVC cerada",
      "Profesionalna montaža i demontaža",
      "Otpornost na kišu i vetar",
    ],
    images: pagodeImages([1, 2, 3, 4, 5, 6, 8, 9, 10]),
    seo: {
      title: "Iznajmljivanje pagoda Beograd",
      description:
        "Iznajmljivanje elegantnih pagoda 5x5m za venčanja i događaje u Beogradu. Mogućnost spajanja. Profesionalna montaža uključena.",
    },
  },
  {
    slug: "prodaja",
    category: "Pagode",
    categorySlug: "pagode",
    title: "Prodaja pagoda",
    shortDescription: "Prodaja novih i polovnih pagoda visokog kvaliteta.",
    description:
      "Nudimo prodaju pagoda dimenzija 5x5 m, koje važe za jedno od najtraženijih i najpouzdanijih rešenja za događaje na otvorenom. Idealan su izbor za venčanja, korporativne događaje, sajmove, kao i za ugostiteljske objekte. U ponudi su nove i polovne pagode, izrađene od kvalitetnih materijala koji obezbeđuju dug vek trajanja i profesionalan izgled na svakoj lokaciji.",
    features: [
      "Nove ili polovne pagode",
      "Dimenzije: 5 × 5 m",
      "Aluminijumska konstrukcija",
      "Kvalitetna PVC cerada",
      "Dostava na teritoriji Srbije",
      "Stručna podrška pri izboru",
    ],
    images: pagodeImages([11, 12, 13, 14, 15]),
    seo: {
      title: "Prodaja pagoda - Nove i polovne pagode",
      description:
        "Prodaja pagoda 5x5m u Srbiji. Nove i polovne pagode, aluminijumska konstrukcija, kvalitetna PVC cerada. Dostava.",
    },
  },

  // ========== DODATNA OPREMA ==========
  {
    slug: "stolovi",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje stolova",
    shortDescription: "Okrugli, pravougaoni, pivski i barski stolovi za sve vrste događaja.",
    description:
      "Nudimo iznajmljivanje stolova za sve vrste događaja — od svečanih proslava i venčanja do korporativnih okupljanja i manifestacija. U ponudi imamo okrugle stolove dimenzija Ø155 i Ø180 cm, pravougaone stolove, pivske setove i barske stolove, koji se lako uklapaju u različite postavke prostora i tipove događaja.",
    features: [
      "Okrugli stolovi (Ø155 i Ø180 cm)",
      "Pravougaoni stolovi",
      "Pivski setovi",
      "Barski stolovi",
      "Stabilna konstrukcija",
    ],
    images: pagodeImages([22, 23]),
    seo: {
      title: "Iznajmljivanje stolova Beograd",
      description:
        "Iznajmljivanje stolova za događaje u Beogradu. Okrugli, pravougaoni, pivski i barski stolovi. Povoljne cene.",
    },
  },
  {
    slug: "stolice",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje stolica",
    shortDescription: "Tiffany, konferencijske i barske stolice za sve vrste događaja.",
    description:
      "Nudimo iznajmljivanje elegantnih Tiffany stolica, konferencijskih stolica i barskih stolica za sve vrste događaja — od venčanja i korporativnih proslava do konferencija i manje formalnih okupljanja. Stolice su udobne, stabilne i dostupne u većim količinama, što omogućava fleksibilnu organizaciju prostora.",
    features: [
      "Tiffany stolice",
      "Konferencijske stolice",
      "Barske stolice",
      "Stabilne i udobne",
      "Dostupne u većim količinama",
    ],
    images: pagodeImages([16, 17, 18]),
    seo: {
      title: "Iznajmljivanje stolica Beograd",
      description:
        "Iznajmljivanje Tiffany, konferencijskih i barskih stolica u Beogradu. Udobne i elegantne stolice za sve događaje.",
    },
  },
  {
    slug: "klima",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje klima",
    shortDescription: "Mobilni klima uređaji za šatore, sale i privremene prostorije.",
    description:
      "Nudimo iznajmljivanje mobilnih klima uređaja, pogodnih za manje zatvorene prostore poput šatora, sala i privremenih prostorija. Uređaji brzo i efikasno hlade prostor, obezbeđujući prijatnu temperaturu i udobnost za goste. Jednostavni su za upotrebu i mogu se koristiti u većim količinama po potrebi.",
    features: [
      "Mobilni klima uređaji",
      "Pogodni za šatore, sale i privremene prostorije",
      "Brzo i efikasno hlađenje",
      "Jednostavna upotreba",
      "Dostupni u većim količinama",
    ],
    images: pagodeImages([2, 3]),
    seo: {
      title: "Iznajmljivanje klima uređaja Beograd",
      description:
        "Iznajmljivanje mobilnih klima uređaja za šatore i events u Beogradu. Brzo hlađenje, jednostavna upotreba.",
    },
  },
  {
    slug: "ventilatori",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje ventilatora",
    shortDescription: "Mobilni ventilatori sa raspršivačem vode za osvežavanje.",
    description:
      "Nudimo iznajmljivanje mobilnih ventilatora sa raspršivačem vode, pogodnih za šatore, sale i privremene prostorije. Ventilatori efikasno osvežavaju prostor i poboljšavaju cirkulaciju vazduha, a dodatni raspršivač vode pruža prijatan osećaj hlađenja tokom toplih dana. Jednostavni su za postavljanje i upotrebu, dostupni u većim količinama po potrebi.",
    features: [
      "Mobilni ventilatori sa raspršivačem vode",
      "Pogodni za šatore, sale i privremene prostorije",
      "Efikasno osvežavanje i cirkulacija vazduha",
      "Jednostavna upotreba",
      "Dostupni u većim količinama",
    ],
    images: pagodeImages([4, 5]),
    seo: {
      title: "Iznajmljivanje ventilatora Beograd",
      description:
        "Iznajmljivanje mobilnih ventilatora sa raspršivačem vode za šatore i events u Beogradu.",
    },
  },
  {
    slug: "plinske-grejalice",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje plinskih grejalica",
    shortDescription: "Plinske grejalice za spoljašnje prostore i događaje.",
    description:
      "Nudimo iznajmljivanje plinskih grejalica, idealnih za spoljašnje prostore kada je potrebna dodatna toplota. Grejalice brzo zagrevaju okolni prostor i obezbeđuju prijatnu temperaturu za goste.",
    features: [
      "Plinske grejalice",
      "Idealne za spoljašnje prostore",
      "Brzo i efikasno zagrevanje",
    ],
    images: pagodeImages([6, 8]),
    seo: {
      title: "Iznajmljivanje plinskih grejalica Beograd",
      description:
        "Iznajmljivanje plinskih grejalica za spoljašnje prostore i events u Beogradu. Brzo zagrevanje.",
    },
  },
  {
    slug: "pivski-setovi",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje pivskih setova",
    shortDescription: "Pivski setovi (sto + 2 klupe) za festivale i proslave.",
    description:
      "Nudimo iznajmljivanje pivskih setova koji se sastoje od pravougaonog stola i dve klupe. Idealni su za festivale, korporativne događaje, koncerte i proslave na otvorenom.",
    features: [
      "Pivski setovi (sto + 2 klupe)",
      "Praktični i funkcionalni za događaje na otvorenom",
      "Brza i jednostavna postavka",
    ],
    images: pagodeImages([9, 10]),
    seo: {
      title: "Iznajmljivanje pivskih setova Beograd",
      description:
        "Iznajmljivanje pivskih setova za festivale i proslave u Beogradu. Sto + 2 klupe, brza postavka.",
    },
  },
  {
    slug: "govornice",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje govornica",
    shortDescription: "Kliritne govornice za seminare, konferencije i predavanja.",
    description:
      "Nudimo iznajmljivanje kliritnih govornica, idealnih za seminare, konferencije, predavanja i prezentacije. Mobilne i praktične, mogu se postaviti na bilo kojoj lokaciji i olakšavaju profesionalno vođenje događaja.",
    features: [
      "Kliritne govornice",
      "Mobilne i jednostavne za postavljanje",
      "Pogodne za seminare, konferencije i predavanja",
    ],
    images: pagodeImages([11, 12]),
    seo: {
      title: "Iznajmljivanje govornica Beograd",
      description:
        "Iznajmljivanje kliritnih govornica za seminare i konferencije u Beogradu. Mobilne i praktične.",
    },
  },
  {
    slug: "suncobrani",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje suncobrana",
    shortDescription: "Profesionalni beli suncobrani za događaje i bašte.",
    description:
      "Nudimo iznajmljivanje profesionalnih belih suncobrana, idealnih za događaje, bašte restorana i terase. Suncobrani pružaju efikasnu zaštitu od sunca i doprinose prijatnom ambijentu na otvorenom.",
    features: [
      "Profesionalni beli suncobrani",
      "Efikasna zaštita od sunca",
      "Stabilna baza",
    ],
    images: pagodeImages([26, 27]),
    seo: {
      title: "Iznajmljivanje suncobrana Beograd",
      description:
        "Iznajmljivanje profesionalnih belih suncobrana za events i bašte u Beogradu.",
    },
  },
  {
    slug: "barski-stolovi",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje barskih stolova",
    shortDescription: "Sklopivi barski stolovi sa belom ili crnom navlakom.",
    description:
      "Nudimo iznajmljivanje barskih stolova, pogodnih za korporativne događaje, proslave i okupljanja. Stolovi se mogu iznajmiti sa belom ili crnom navlakom, prilagođeni stilu vašeg događaja i dekoraciji prostora.",
    features: [
      "Sklopivi barski stolovi",
      "Bela ili crna navlaka",
      "Pogodni za proslave, korporativne događaje i okupljanja",
      "Stabilna konstrukcija",
    ],
    images: pagodeImages([17, 18]),
    seo: {
      title: "Iznajmljivanje barskih stolova Beograd",
      description:
        "Iznajmljivanje barskih stolova za korporativne događaje i proslave u Beogradu. Bela ili crna navlaka.",
    },
  },
  {
    slug: "fotelje",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje fotelja",
    shortDescription: "Fotelje u crnoj eko koži za VIP zone i events.",
    description:
      "Nudimo iznajmljivanje fotelja u crnoj eko koži, idealnih za VIP zone, chill-out prostore, seminare, korporativne događaje i sajamske prezentacije. Fotelje su udobne, elegantne i vizuelno atraktivne, čime prostoru daju ekskluzivan izgled.",
    features: [
      "Fotelje",
      "Crna eko koža",
      "Udobno sedenje",
      "Elegantni i premium izgled",
    ],
    images: pagodeImages([21, 22]),
    seo: {
      title: "Iznajmljivanje fotelja Beograd",
      description:
        "Iznajmljivanje fotelja u crnoj eko koži za VIP zone i events u Beogradu. Udobne i elegantne.",
    },
  },
  {
    slug: "pribor-za-jelo",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje pribora za jelo",
    shortDescription: "Escajg, tanjiri i čaše za sve vrste događaja.",
    description:
      "Nudimo iznajmljivanje escajga, tanjira i čaša za sve vrste događaja i proslava. U ponudi su kašike, viljuške, noževi i male kašičice, dostupni i u elegantnoj zlatnoj varijanti, kao i tanjiri i čaše visokog kvaliteta koji doprinose svečanom izgledu stola.",
    features: [
      "Zlatni pribor",
      "Porcelanski tanjiri",
      "Sve vrste čaša",
      "Elegantni i profesionalni setovi",
    ],
    images: pagodeImages([13, 14]),
    seo: {
      title: "Iznajmljivanje pribora za jelo Beograd",
      description:
        "Iznajmljivanje escajga, tanjira i čaša za events u Beogradu. Zlatni pribor, porcelanski tanjiri.",
    },
  },
  {
    slug: "barijere",
    category: "Dodatna oprema",
    categorySlug: "dodatna-oprema",
    title: "Iznajmljivanje barijera",
    shortDescription: "Barijere sa stubićima i kanapima za kontrolu pristupa.",
    description:
      "Nudimo iznajmljivanje barijera sa stubićima i kanapima, idealnih za kontrolu pristupa, organizaciju redova i definisanje VIP zona na događajima. Kanapi su dostupni u crvenoj, plavoj i crnoj boji, što omogućava prilagođavanje stilu i dekoraciji događaja.",
    features: [
      "Barijere sa stubićima i kanapima",
      "Kanapi u crvenoj, plavoj i crnoj boji",
      "Idealne za kontrolu pristupa i definisanje zona",
      "Elegantno i profesionalno rešenje za događaje",
    ],
    images: pagodeImages([15, 16]),
    seo: {
      title: "Iznajmljivanje barijera Beograd",
      description:
        "Iznajmljivanje barijera sa stubićima i kanapima za events u Beogradu. Kontrola pristupa i VIP zone.",
    },
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProduct(categorySlug: string, slug: string): Product | undefined {
  return products.find((p) => p.categorySlug === categorySlug && p.slug === slug);
}
