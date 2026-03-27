export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marko Simić",
    text: "Momci su profesionalci, rade posao brzo i profesionalno. Šatori i pagode su novi i veoma visokog kvaliteta. Usluga je prvoklasna. Preporučujem svima.",
    rating: 5,
  },
  {
    name: "Zoran Rasić",
    text: "Vrhunska oprema za sve vrste proslava.",
    rating: 5,
  },
  {
    name: "Filip Stojanović",
    text: "Super!",
    rating: 5,
  },
];

export const googleRating = {
  average: 4.3,
  total: 16,
};
