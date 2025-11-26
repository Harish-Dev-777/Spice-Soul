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
import FriedChicken from "../assets/menu/FriedChicken.png";
import ChickenBiryani from "../assets/menu/ChickenBiryani.png";
import MuttonCurry from "../assets/menu/MuttonCurry.png";
import Pizza from "../assets/menu/Pizza.png";
import SweetLassi  from "../assets/menu/SweetLassi.png";

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
    id: 11,
    category: "Starters",
    name: "Spicy Fried Chicken",
    description: "Crispy fried chicken marinated in secret spices.",
    price: 349,
    rating: 4.7,
    image: FriedChicken,
    tags: ["Non-Veg", "Crispy"],
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
    id: 12,
    category: "Main Course",
    name: "Hyderabadi Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken and spices.",
    price: 399,
    rating: 4.9,
    image: ChickenBiryani,
    tags: ["Non-Veg", "Spicy", "Popular"],
  },
  {
    id: 13,
    category: "Main Course",
    name: "Spicy Mutton Curry",
    description: "Tender mutton pieces cooked in a rich, spicy gravy.",
    price: 449,
    rating: 4.8,
    image: MuttonCurry,
    tags: ["Non-Veg", "Spicy"],
  },
  {
    id: 14,
    category: "Main Course",
    name: "Farmhouse Pizza",
    description: "Loaded with fresh vegetables and mozzarella cheese.",
    price: 359,
    rating: 4.5,
    image: Pizza,
    tags: ["Vegetarian", "Cheesy"],
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
    image: LavaCake,
    tags: ["Chocolate", "Hot & Cold"],
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
    id: 16,
    category: "Beverages",
    name: "Sweet Lassi",
    description: "Traditional yogurt drink sweetened with sugar and cardamom.",
    price: 99,
    rating: 4.5,
    image: SweetLassi,
    tags: ["Cold", "Traditional"],
  },
];
