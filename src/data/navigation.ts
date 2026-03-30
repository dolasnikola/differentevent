export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Početna", href: "/" },
  {
    label: "Pagode",
    href: "/pagode",
    children: [
      { label: "Iznajmljivanje pagoda", href: "/pagode/iznajmljivanje" },
      { label: "Prodaja pagoda", href: "/pagode/prodaja" },
    ],
  },
  {
    label: "Šatori",
    href: "/satori",
    children: [
      { label: "Iznajmljivanje šatora", href: "/satori/iznajmljivanje-satora" },
      { label: "Iznajmljivanje šatora 3x3", href: "/satori/iznajmljivanje-satora-3x3" },
      { label: "Prodaja šatora", href: "/satori/prodaja-satora" },
    ],
  },
  {
    label: "Dodatna oprema",
    href: "/dodatna-oprema",
    children: [
      { label: "Iznajmljivanje stolova", href: "/dodatna-oprema/stolovi" },
      { label: "Iznajmljivanje stolica", href: "/dodatna-oprema/stolice" },
      { label: "Iznajmljivanje klima", href: "/dodatna-oprema/klima" },
      { label: "Iznajmljivanje ventilatora", href: "/dodatna-oprema/ventilatori" },
      { label: "Iznajmljivanje plinskih grejalica", href: "/dodatna-oprema/plinske-grejalice" },
      { label: "Iznajmljivanje pivskih setova", href: "/dodatna-oprema/pivski-setovi" },
      { label: "Iznajmljivanje govornica", href: "/dodatna-oprema/govornice" },
      { label: "Iznajmljivanje suncobrana", href: "/dodatna-oprema/suncobrani" },
      { label: "Iznajmljivanje barskih stolova", href: "/dodatna-oprema/barski-stolovi" },
      { label: "Iznajmljivanje fotelja", href: "/dodatna-oprema/fotelje" },
      { label: "Iznajmljivanje pribora za jelo", href: "/dodatna-oprema/pribor-za-jelo" },
      { label: "Iznajmljivanje barijera", href: "/dodatna-oprema/barijere" },
    ],
  },
  { label: "Galerija", href: "/galerija" },
  { label: "O nama", href: "/o-nama" },
  { label: "Kontakt", href: "/kontakt" },
];
