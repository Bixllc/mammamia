// slug must match the filename in /public/img/pops/{slug}-t.png
export const fruityFlavors = [
  { name: "Pineapple", slug: "pineapple" },
  { name: "Passion Fruit", slug: "passion-fruit" },
  { name: "Mint Ginger Lemonade", slug: "mint-ginger-lemonade" },
  { name: "Blue Lemonade", slug: "blue-lemonade" },
  { name: "Strawberry", slug: "strawberry" },
  { name: "Watermelon", slug: "watermelon" },
  { name: "Coconut", slug: "coconut" },
  { name: "Pink Lemonade", slug: "pink-lemonade" },
  { name: "Kiwi Raspberry", slug: "kiwi-raspberry" },
  { name: "Soursop Raspberry", slug: "soursop-raspberry" },
  { name: "Florida Guava Lemonade", slug: "florida-guava-lemonade" },
  { name: "Coconut Pineapple", slug: "coconut-pineapple" },
  { name: "Chocolate Sorbet", slug: "chocolate-sorbet" },
];

export const creamyFlavors = [
  { name: "Cookies and Cream", slug: "cookies-and-cream" },
  { name: "Matcha", slug: "matcha" },
  { name: "Chocolate", slug: "chocolate" },
  { name: "Vanilla", slug: "vanilla" },
  { name: "Coffee", slug: "coffee" },
  { name: "Mint Cookies and Cream", slug: "mint-cookies-and-cream" },
  { name: "Pistachio", slug: "pistachio" },
];

export const allFlavors = [...fruityFlavors, ...creamyFlavors];

export const eventTypes = [
  "Birthday party",
  "Wedding",
  "Corporate / office",
  "Festival or market",
  "School event",
  "Other",
];
