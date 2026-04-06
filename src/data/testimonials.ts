export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Nikola Dolaš",
    text: "Profesionalna i tačna ekipa, sve preporuke za sve vrste dogadjaja.",
    rating: 5,
  },
  {
    name: "Luka Selaković",
    text: "Sve pohvale za firmu, šatori su lepi i cisti. I sve pohvale za momke koju su montirali stvarno su profesionalni i brzi.",
    rating: 5,
  },
  {
    name: "Danica Čolakov",
    text: "Profesionalnost na visokom nivou! Od moderne i uredne opreme, povoljnih cena, pa do posvećenih radnika, ova firma svaki put ispuni moja očekivanja. Moja preporuka za iznajmljivanje event opreme uvek ide Differentevent-u.",
    rating: 5,
  },
];

export const googleRating = {
  average: 4.6,
  total: 18,
};
