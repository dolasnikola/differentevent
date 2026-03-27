export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Početna", href: "/" },
  {
    label: "Šatori",
    href: "/satori",
    children: [
      { label: "Šator za venčanje", href: "/satori/sator-za-vencanje" },
      { label: "Šator 3x3", href: "/satori/sator-3x3" },
      { label: "Magacinski šator", href: "/satori/magacinski-sator" },
      { label: "Industrijski šator", href: "/satori/industrijski-sator" },
      { label: "Prodaja šatora", href: "/satori/prodaja-satora" },
      { label: "Montažne hale", href: "/satori/montazne-hale" },
    ],
  },
  {
    label: "Pagode",
    href: "/pagode",
    children: [
      { label: "Iznajmljivanje pagoda", href: "/pagode/iznajmljivanje" },
      { label: "Prodaja pagoda", href: "/pagode/prodaja" },
    ],
  },
  {
    label: "Tiffany stolice",
    href: "/tiffany-stolice",
    children: [
      { label: "Bele Tiffany stolice", href: "/tiffany-stolice/bele" },
      { label: "Zlatne Tiffany stolice", href: "/tiffany-stolice/zlatne" },
    ],
  },
  {
    label: "Dodatna oprema",
    href: "/dodatna-oprema",
    children: [
      { label: "Stolovi", href: "/dodatna-oprema/stolovi" },
      { label: "Stolice", href: "/dodatna-oprema/stolice" },
      { label: "Suncobrani", href: "/dodatna-oprema/suncobrani" },
      { label: "Grejanje", href: "/dodatna-oprema/grejanje" },
      { label: "Klimatizacija", href: "/dodatna-oprema/klimatizacija" },
      { label: "Rasveta", href: "/dodatna-oprema/rasveta" },
      { label: "Podijumi i bine", href: "/dodatna-oprema/podijumi" },
      { label: "Beer setovi", href: "/dodatna-oprema/beer-setovi" },
      { label: "Escajg i porcelan", href: "/dodatna-oprema/escajg" },
      { label: "Ograde (HERAS)", href: "/dodatna-oprema/ograde" },
      { label: "Barijere", href: "/dodatna-oprema/barijere" },
      { label: "Barski stolovi", href: "/dodatna-oprema/barski-stolovi" },
      { label: "Barske stolice", href: "/dodatna-oprema/barske-stolice" },
      { label: "Fotelje", href: "/dodatna-oprema/fotelje" },
    ],
  },
  { label: "Galerija", href: "/galerija" },
  { label: "Video", href: "/video" },
  { label: "Kontakt", href: "/kontakt" },
];
