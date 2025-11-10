import PaneerBites from "../assets/menu/paneer-bites.png";
import ChickenTakka from "../assets/menu/chicken-tikka.png";
import ButterChicken from "../assets/menu/ButterChicken.png";
import Pannerbuttermasala from "../assets/menu/PaneerButterMasala.png";
import MuttonRoganJosh from "../assets/menu/MuttonRoganJosh.png";
import GulabJamun from "../assets/menu/GulabJamun.png";
import LavaCake from "../assets/menu/ChocolateLavaCake.png";
import MangoLassi from "../assets/menu/MangoLassi.png";
import MasalaChai from "../assets/menu/MasalaChai.png";
import Rasmalai from "../assets/menu/Rasmalai.png";

export const menuData = [
  {
    id: 1,
    category: "Starters",
    name: "Crispy Paneer Bites",
    description:
      "Golden-fried cottage cheese cubes served with spicy mint chutney.",
    price: 249,
    rating: 4.6,
    image: PaneerBites,
    tags: ["Vegetarian", "Crispy", "Popular"],
  },
  {
    id: 2,
    category: "Starters",
    name: "Chicken Tikka Skewers",
    description:
      "Tender chicken chunks marinated in Indian spices and grilled to perfection.",
    price: 299,
    rating: 4.8,
    image: ChickenTakka,
    tags: ["Spicy", "Grilled"],
  },
  {
    id: 3,
    category: "Main Course",
    name: "Butter Chicken",
    description:
      "Classic North Indian curry with tender chicken in creamy tomato sauce.",
    price: 379,
    rating: 4.9,
    image: ButterChicken,
    tags: ["Non-Veg", "Rich", "Creamy"],
  },
  {
    id: 4,
    category: "Main Course",
    name: "Paneer Butter Masala",
    description: "Soft paneer cubes simmered in smooth butter-tomato gravy.",
    price: 339,
    rating: 4.7,
    image: Pannerbuttermasala,
    tags: ["Vegetarian", "Creamy", "Popular"],
  },
  {
    id: 5,
    category: "Main Course",
    name: "Mutton Rogan Josh",
    description:
      "Slow-cooked lamb curry infused with aromatic Kashmiri spices.",
    price: 429,
    rating: 4.8,
    image: MuttonRoganJosh,
    tags: ["Spicy", "Signature Dish"],
  },
  {
    id: 6,
    category: "Desserts",
    name: "Gulab Jamun",
    description: "Soft fried dumplings soaked in warm sugar syrup.",
    price: 149,
    rating: 4.5,
    image: GulabJamun,
    tags: ["Sweet", "Classic"],
  },
  {
    id: 7,
    category: "Desserts",
    name: "Chocolate Lava Cake",
    description: "Molten chocolate cake served with vanilla ice cream.",
    price: 199,
    rating: 4.9,
    image:LavaCake,
    tags: ["Chocolate", "Hot & Cold"],
  },
  {
    id: 8,
    category: "Beverages",
    name: "Mango Lassi",
    description: "Refreshing yogurt-based mango drink topped with saffron.",
    price: 129,
    rating: 4.6,
    image: MangoLassi,
    tags: ["Cold", "Refreshing"],
  },
  {
    id: 9,
    category: "Beverages",
    name: "Masala Chai",
    description: "Strong Indian tea brewed with spices and milk.",
    price: 89,
    rating: 4.7,
    image: MasalaChai,
    tags: ["Hot", "Traditional"],
  },
  {
    id: 10,
    category: "Desserts",
    name: "Rasmalai",
    description:
      "Soft paneer patties soaked in saffron-flavored milk with pistachios.",
    price: 179,
    rating: 4.8,
    image: Rasmalai,
    tags: ["Sweet", "Rich"],
  },
];
