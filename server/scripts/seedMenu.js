import mongoose from "mongoose";
import dotenv from "dotenv";
import Menu from "../models/menuModel.js";

dotenv.config();

const menuData = {
    breakfast: [
        { id: 'b1', name: 'Tea', price: 2, image: 'assets/menu/tea.jpg', category: 'breakfast' },
        { id: 'b2', name: 'Idli', price: 4, image: 'assets/menu/idli.jpg', category: 'breakfast' },
        { id: 'b3', name: 'Dosa set', price: 4, image: 'assets/menu/dosa.jpg', category: 'breakfast' },
        { id: 'b4', name: 'Onion uttapam', price: 6, image: 'assets/menu/uttapam.jpg', category: 'breakfast' },
        { id: 'b5', name: 'Unda wada', price: 1, image: 'assets/menu/wada.jpg', category: 'breakfast' },
        { id: 'b6', name: 'Upmavu', price: 4, image: 'assets/menu/upmavu.jpg', category: 'breakfast' },
        { id: 'b7', name: 'Puri baji', price: 5, image: 'assets/menu/puri.jpg', category: 'breakfast' },
        { id: 'b8', name: 'Channa masala', price: 5, image: 'assets/menu/channa.jpg', category: 'breakfast' },
        { id: 'b9', name: 'Green peas masala', price: 5, image: 'assets/menu/peas.jpg', category: 'breakfast' },
        { id: 'b10', name: 'Porotha Set', price: 4, image: 'assets/menu/porotha.jpg', category: 'breakfast' },
        { id: 'b11', name: 'Chapathi set', price: 4, image: 'assets/menu/chapathi.jpg', category: 'breakfast' },
        { id: 'b12', name: 'Wada sett', price: 4, image: 'assets/menu/wada-set.jpg', category: 'breakfast' },
        { id: 'b13', name: 'Masala dosa', price: 6, image: 'assets/menu/masala-dosa.jpg', category: 'breakfast' },
        { id: 'b14', name: 'Ghee rost', price: 5, image: 'assets/menu/ghee-rost.jpg', category: 'breakfast' },
        { id: 'b15', name: 'Veg curry', price: 5, image: 'assets/menu/veg-curry.jpg', category: 'breakfast' },
        { id: 'b16', name: 'Paneer kadai', price: 12, image: 'assets/menu/paneer-kadai.jpg', category: 'breakfast' },
        { id: 'b17', name: 'Veg kurma', price: 6, image: 'assets/menu/veg-kurma.jpg', category: 'breakfast' },
        { id: 'b18', name: 'Brocolli mushroom', price: 15, image: 'assets/menu/brocolli.jpg', category: 'breakfast' },
        { id: 'b19', name: 'Daal tadak', price: 5, image: 'assets/menu/daal.jpg', category: 'breakfast' },
    ],
    friedRice: [
        { id: 'fr1', name: 'Veg fried rice', price: 12, image: 'assets/menu/veg-fried-rice.jpg', category: 'fried-rice' },
        { id: 'fr2', name: 'Egg fried rice', price: 13, image: 'assets/menu/egg-fried-rice.jpg', category: 'fried-rice' },
        { id: 'fr3', name: 'Chicken fried rice', price: 15, image: 'assets/menu/chicken-fried-rice.jpg', category: 'fried-rice' },
        { id: 'fr4', name: 'Singapore Friedrice', price: 18, image: 'assets/menu/singapore-fried-rice.jpg', category: 'fried-rice' },
        { id: 'fr5', name: 'Schezwan Friedrice', price: 15, image: 'assets/menu/schezwan-rice.jpg', category: 'fried-rice' },
        { id: 'fr7', name: 'Green house Special', price: 20, image: 'assets/menu/special-rice.jpg', category: 'fried-rice' },
    ],
    mutton: [
        { id: 'm1', name: 'Mutton biriyani', price: 18, image: 'assets/menu/mutton-biriyani.jpg', category: 'mutton' },
        { id: 'm2', name: 'Mutton curry', price: 15, image: 'assets/menu/mutton-curry.jpg', category: 'mutton' },
        { id: 'm3', name: 'Mutton kadai', price: 18, image: 'assets/menu/mutton-kadai.jpg', category: 'mutton' },
        { id: 'm4', name: 'Mutton pepper', price: 15, image: 'assets/menu/mutton-pepper.jpg', category: 'mutton' },
        { id: 'm5', name: 'Mutton kondata', price: 18, image: 'assets/menu/mutton-kondata.jpg', category: 'mutton' },
        { id: 'm6', name: 'Mutton paya', price: 10, image: 'assets/menu/mutton-paya.jpg', category: 'mutton' },
    ],
    chicken: [
        { id: 'c1', name: 'Chicken biriyani', price: 12, image: 'assets/menu/chicken-biriyani.jpg', category: 'chicken' },
        { id: 'c2', name: 'Chicken chilli boneless', price: 15, image: 'assets/menu/chicken-boneless.jpg', category: 'chicken' },
        { id: 'c4', name: 'Chicken kadai', price: 15, image: 'assets/menu/chicken-kadai.jpg', category: 'chicken' },
        { id: 'c5', name: 'Chicken curry', price: 10, image: 'assets/menu/chicken-curry.jpg', category: 'chicken' },
        { id: 'c6', name: 'Chicken kolapuri', price: 18, image: 'assets/menu/chicken-kholapuri.jpg', category: 'chicken' },
        { id: 'c7', name: 'Chicken hariyali', price: 15, image: 'assets/menu/chicken-hariyali.jpg', category: 'chicken' },
        { id: 'c8', name: 'Chicken pepper', price: 12, image: 'assets/menu/chicken-pepper.jpg', category: 'chicken' },
        { id: 'c9', name: 'Chicken malai', price: 15, image: 'assets/menu/chicken-malai.jpg', category: 'chicken' },
        { id: 'c11', name: 'Chicken Haleem', price: 10, image: 'assets/menu/chicken-haleem.jpg', category: 'chicken' },
        { id: 'c12', name: 'Chicken lollipop', price: 3, image: 'assets/menu/chicken-lollipop.jpg', category: 'chicken' },
        { id: 'c13', name: 'Chicken tawa', price: 5, image: 'assets/menu/chicken-tawa.jpg', category: 'chicken' },
    ],
    meal: [
        { id: 'ml1', name: 'Fish meal', price: 15, description: 'Seasonal price', image: 'assets/menu/fish-meal.jpg', category: 'meal' },
        { id: 'ml3', name: 'Veg meal', price: 12, image: 'assets/menu/veg-meal.jpg', category: 'meal' },
    ],
    mojitosShakes: [
        { id: 'ms2', name: 'Blue storm', price: 8, image: 'assets/menu/blue-storm.jpg', category: 'mojitos-shakes' },
        { id: 'ms4', name: 'Oreo', price: 8, image: 'assets/menu/oreo-shake.jpg', category: 'mojitos-shakes' },
        { id: 'ms10', name: 'Lotus', price: 10, image: 'assets/menu/lotus-shake.jpg', category: 'mojitos-shakes' },
        { id: 'ms13', name: 'Orange', price: 8, image: 'assets/menu/orange-shake.jpg', category: 'mojitos-shakes' },
        { id: 'ms15', name: 'Passion fruit', price: 8, image: 'assets/menu/passion-fruit.jpg', category: 'mojitos-shakes' },
    ],
    juice: [
        { id: 'j1', name: 'Avocado', price: 10, image: 'assets/menu/avocado-juice.jpg', category: 'juice' },
        { id: 'j2', name: 'Orange', price: 8, image: 'assets/menu/orange-juice.jpg', category: 'juice' },
        { id: 'j3', name: 'Lemon mint', price: 8, image: 'assets/menu/lemon-mint-juice.jpg', category: 'juice' },
        { id: 'j4', name: 'Strawberry', price: 8, image: 'assets/menu/strawberry-juice.jpg', category: 'juice' },
        { id: 'j5', name: 'Cocktail', price: 10, image: 'assets/menu/cocktail.jpg', category: 'juice' },
    ]
};

const seedMenu = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected for seeding");

        // Clear existing menu items
        await Menu.deleteMany({});

        // Flatten and insert menu items
        const menuItems = Object.entries(menuData).flatMap(([category, items]) =>
            items.map(item => ({ ...item, category }))
        );

        await Menu.insertMany(menuItems);
        console.log("Menu seeded successfully");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error seeding menu:", error);
        process.exit(1);
    }
};

seedMenu();