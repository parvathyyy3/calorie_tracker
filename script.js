
// Food dataset
const foodData = [
        { "name": "Chicken Breast", "calories": 165, "protein": 31, "carbs": 0, "fat": 3.6, "servingSize": 100 },
        { "name": "Salmon", "calories": 208, "protein": 20, "carbs": 0, "fat": 13, "servingSize": 100 },
        { "name": "Eggs", "calories": 155, "protein": 13, "carbs": 1.1, "fat": 11, "servingSize": 100 },
        { "name": "Brown Rice", "calories": 112, "protein": 2.6, "carbs": 23, "fat": 0.9, "servingSize": 100 },
        { "name": "Quinoa", "calories": 120, "protein": 4.4, "carbs": 21, "fat": 1.9, "servingSize": 100 },
        { "name": "Oats", "calories": 389, "protein": 17, "carbs": 66, "fat": 7, "servingSize": 100 },
        { "name": "Almonds", "calories": 579, "protein": 21, "carbs": 22, "fat": 50, "servingSize": 100 },
        { "name": "Avocado", "calories": 160, "protein": 2, "carbs": 9, "fat": 15, "servingSize": 100 },
        { "name": "Broccoli", "calories": 34, "protein": 2.8, "carbs": 7, "fat": 0.4, "servingSize": 100 },
        { "name": "Spinach", "calories": 23, "protein": 2.9, "carbs": 3.6, "fat": 0.4, "servingSize": 100 },
        { "name": "Sweet Potato", "calories": 86, "protein": 1.6, "carbs": 20, "fat": 0.1, "servingSize": 100 },
        { "name": "Banana", "calories": 89, "protein": 1.1, "carbs": 23, "fat": 0.3, "servingSize": 100 },
        { "name": "Apple", "calories": 52, "protein": 0.3, "carbs": 14, "fat": 0.2, "servingSize": 100 },
        { "name": "Greek Yogurt", "calories": 59, "protein": 10, "carbs": 3.6, "fat": 0.4, "servingSize": 100 },
        { "name": "Cottage Cheese", "calories": 98, "protein": 11, "carbs": 3.4, "fat": 4.3, "servingSize": 100 },
        { "name": "Tuna", "calories": 132, "protein": 29, "carbs": 0, "fat": 0.6, "servingSize": 100 },
        { "name": "Turkey Breast", "calories": 135, "protein": 30, "carbs": 0, "fat": 0.7, "servingSize": 100 },
        { "name": "Beef Steak", "calories": 271, "protein": 26, "carbs": 0, "fat": 19, "servingSize": 100 },
        { "name": "Pork Chop", "calories": 242, "protein": 27, "carbs": 0, "fat": 14, "servingSize": 100 },
        { "name": "Shrimp", "calories": 99, "protein": 24, "carbs": 0.2, "fat": 0.3, "servingSize": 100 },
        { "name": "Tofu", "calories": 76, "protein": 8, "carbs": 1.9, "fat": 4.8, "servingSize": 100 },
        { "name": "Lentils", "calories": 116, "protein": 9, "carbs": 20, "fat": 0.4, "servingSize": 100 },
        { "name": "Chickpeas", "calories": 164, "protein": 9, "carbs": 27, "fat": 2.6, "servingSize": 100 },
        { "name": "Black Beans", "calories": 132, "protein": 9, "carbs": 24, "fat": 0.5, "servingSize": 100 },
        { "name": "Whole Wheat Bread", "calories": 247, "protein": 13, "carbs": 41, "fat": 3.4, "servingSize": 100 },
        { "name": "White Rice", "calories": 130, "protein": 2.7, "carbs": 28, "fat": 0.3, "servingSize": 100 },
        { "name": "Potato", "calories": 77, "protein": 2, "carbs": 17, "fat": 0.1, "servingSize": 100 },
        { "name": "Carrot", "calories": 41, "protein": 0.9, "carbs": 10, "fat": 0.2, "servingSize": 100 },
        { "name": "Cucumber", "calories": 16, "protein": 0.7, "carbs": 3.6, "fat": 0.1, "servingSize": 100 },
        { "name": "Tomato", "calories": 18, "protein": 0.9, "carbs": 3.9, "fat": 0.2, "servingSize": 100 },
        { "name": "Bell Pepper", "calories": 20, "protein": 0.9, "carbs": 4.6, "fat": 0.2, "servingSize": 100 },
        { "name": "Zucchini", "calories": 17, "protein": 1.2, "carbs": 3.1, "fat": 0.3, "servingSize": 100 },
        { "name": "Cauliflower", "calories": 25, "protein": 1.9, "carbs": 5, "fat": 0.3, "servingSize": 100 },
        { "name": "Green Beans", "calories": 31, "protein": 1.8, "carbs": 7, "fat": 0.2, "servingSize": 100 },
        { "name": "Peas", "calories": 81, "protein": 5, "carbs": 14, "fat": 0.4, "servingSize": 100 },
        { "name": "Corn", "calories": 86, "protein": 3.3, "carbs": 19, "fat": 1.4, "servingSize": 100 },
        { "name": "Blueberries", "calories": 57, "protein": 0.7, "carbs": 14, "fat": 0.3, "servingSize": 100 },
        { "name": "Strawberries", "calories": 32, "protein": 0.7, "carbs": 8, "fat": 0.3, "servingSize": 100 },
        { "name": "Raspberries", "calories": 52, "protein": 1.2, "carbs": 12, "fat": 0.7, "servingSize": 100 },
        { "name": "Blackberries", "calories": 43, "protein": 1.4, "carbs": 10, "fat": 0.5, "servingSize": 100 },
        { "name": "Oranges", "calories": 47, "protein": 0.9, "carbs": 12, "fat": 0.1, "servingSize": 100 },
        { "name": "Grapes", "calories": 69, "protein": 0.7, "carbs": 18, "fat": 0.2, "servingSize": 100 },
        { "name": "Pineapple", "calories": 50, "protein": 0.5, "carbs": 13, "fat": 0.1, "servingSize": 100 },
        { "name": "Mango", "calories": 60, "protein": 0.8, "carbs": 15, "fat": 0.4, "servingSize": 100 },
        { "name": "Peach", "calories": 39, "protein": 0.9, "carbs": 10, "fat": 0.3, "servingSize": 100 },
        { "name": "Pear", "calories": 57, "protein": 0.4, "carbs": 15, "fat": 0.1, "servingSize": 100 },
        { "name": "Watermelon", "calories": 30, "protein": 0.6, "carbs": 8, "fat": 0.2, "servingSize": 100 },
        { "name": "Cantaloupe", "calories": 34, "protein": 0.8, "carbs": 8, "fat": 0.2, "servingSize": 100 },
        { "name": "Kiwi", "calories": 61, "protein": 1.1, "carbs": 15, "fat": 0.5, "servingSize": 100 },
        { "name": "Pomegranate", "calories": 83, "protein": 1.7, "carbs": 19, "fat": 1.2, "servingSize": 100 },
        { "name": "Cherries", "calories": 50, "protein": 1, "carbs": 12, "fat": 0.3, "servingSize": 100 },
        { "name": "Plum", "calories": 46, "protein": 0.7, "carbs": 11, "fat": 0.3, "servingSize": 100 },
        { "name": "Apricot", "calories": 48, "protein": 1.4, "carbs": 11, "fat": 0.4, "servingSize": 100 },
        { "name": "Papaya", "calories": 43, "protein": 0.5, "carbs": 11, "fat": 0.3, "servingSize": 100 },
        { "name": "Guava", "calories": 68, "protein": 2.6, "carbs": 14, "fat": 1, "servingSize": 100 },
        { "name": "Lemon", "calories": 29, "protein": 1.1, "carbs": 9, "fat": 0.3, "servingSize": 100 },
        { "name": "Lime", "calories": 30, "protein": 0.7, "carbs": 11, "fat": 0.2, "servingSize": 100 },
        { "name": "Grapefruit", "calories": 42, "protein": 0.8, "carbs": 11, "fat": 0.1, "servingSize": 100 },
        { "name": "Coconut", "calories": 354, "protein": 3.3, "carbs": 15, "fat": 33, "servingSize": 100 },
        { "name": "Olive Oil", "calories": 884, "protein": 0, "carbs": 0, "fat": 100, "servingSize": 100 },
        { "name": "Butter", "calories": 717, "protein": 0.9, "carbs": 0.1, "fat": 81, "servingSize": 100 },
        { "name": "Cheese (Cheddar)", "calories": 402, "protein": 25, "carbs": 1.3, "fat": 33, "servingSize": 100 },
        { "name": "Milk (Whole)", "calories": 61, "protein": 3.2, "carbs": 4.8, "fat": 3.3, "servingSize": 100 },
        { "name": "Milk (Skim)", "calories": 35, "protein": 3.4, "carbs": 5, "fat": 0.1, "servingSize": 100 },
        { "name": "Yogurt (Plain)", "calories": 59, "protein": 10, "carbs": 3.6, "fat": 0.4, "servingSize": 100 },
        { "name": "Soy Milk", "calories": 54, "protein": 3.3, "carbs": 6, "fat": 1.8, "servingSize": 100 },
        { "name": "Almond Milk", "calories": 17, "protein": 0.4, "carbs": 0.6, "fat": 1.5, "servingSize": 100 },
        { "name": "Coconut Milk", "calories": 230, "protein": 2.3, "carbs": 6, "fat": 24, "servingSize": 100 },
        { "name": "Dark Chocolate", "calories": 546, "protein": 4.9, "carbs": 61, "fat": 31, "servingSize": 100 },
        { "name": "Milk Chocolate", "calories": 535, "protein": 7.7, "carbs": 59, "fat": 30, "servingSize": 100 },
        { "name": "Honey", "calories": 304, "protein": 0.3, "carbs": 82, "fat": 0, "servingSize": 100 },
        { "name": "Maple Syrup", "calories": 260, "protein": 0, "carbs": 67, "fat": 0.1, "servingSize": 100 },
        { "name": "Peanut Butter", "calories": 588, "protein": 25, "carbs": 20, "fat": 50, "servingSize": 100 },
        { "name": "Almond Butter", "calories": 614, "protein": 21, "carbs": 19, "fat": 56, "servingSize": 100 },
        { "name": "Cashew Butter", "calories": 587, "protein": 18, "carbs": 27, "fat": 49, "servingSize": 100 },
        { "name": "Tahini", "calories": 595, "protein": 17, "carbs": 21, "fat": 53, "servingSize": 100 },
        { "name": "Hummus", "calories": 166, "protein": 8, "carbs": 14, "fat": 9.6, "servingSize": 100 },
        { "name": "Mayonnaise", "calories": 680, "protein": 1, "carbs": 0.6, "fat": 75, "servingSize": 100 },
        { "name": "Mustard", "calories": 66, "protein": 4.4, "carbs": 6, "fat": 3.3, "servingSize": 100 },
        { "name": "Ketchup", "calories": 101, "protein": 1, "carbs": 27, "fat": 0.1, "servingSize": 100 },
        { "name": "Soy Sauce", "calories": 53, "protein": 8, "carbs": 5, "fat": 0.1, "servingSize": 100 },
        { "name": "Olives", "calories": 115, "protein": 0.8, "carbs": 6, "fat": 11, "servingSize": 100 },
        { "name": "Pickles", "calories": 12, "protein": 0.5, "carbs": 2.4, "fat": 0.2, "servingSize": 100 },
        { "name": "Salsa", "calories": 36, "protein": 1.5, "carbs": 7, "fat": 0.2, "servingSize": 100 },
        { "name": "Pasta (Whole Wheat)", "calories": 124, "protein": 5, "carbs": 25, "fat": 1.3, "servingSize": 100 },
        { "name": "Pasta (White)", "calories": 131, "protein": 5, "carbs": 25, "fat": 1.1, "servingSize": 100 },

            { "name": "Roti/Chapati", "calories": 104, "protein": 3, "carbs": 20, "fat": 1.5, "servingSize": 40 },
            { "name": "Paratha", "calories": 326, "protein": 6, "carbs": 45, "fat": 12, "servingSize": 100 },
            { "name": "Naan", "calories": 317, "protein": 10, "carbs": 50, "fat": 6, "servingSize": 100 },
            { "name": "Idli", "calories": 39, "protein": 2, "carbs": 8, "fat": 0.2, "servingSize": 30 },
            { "name": "Dosa", "calories": 133, "protein": 4, "carbs": 22, "fat": 3, "servingSize": 70 },
            { "name": "Vada", "calories": 147, "protein": 5, "carbs": 18, "fat": 6, "servingSize": 50 },
            { "name": "Poha", "calories": 250, "protein": 5, "carbs": 50, "fat": 4, "servingSize": 100 },
            { "name": "Upma", "calories": 200, "protein": 5, "carbs": 35, "fat": 4, "servingSize": 100 },
            { "name": "Pongal", "calories": 220, "protein": 6, "carbs": 40, "fat": 5, "servingSize": 100 },
            { "name": "Sambar", "calories": 90, "protein": 4, "carbs": 15, "fat": 2, "servingSize": 100 },
            { "name": "Rasam", "calories": 60, "protein": 2, "carbs": 10, "fat": 1, "servingSize": 100 },
            { "name": "Dal Tadka", "calories": 150, "protein": 7, "carbs": 20, "fat": 5, "servingSize": 100 },
            { "name": "Rajma", "calories": 180, "protein": 8, "carbs": 30, "fat": 4, "servingSize": 100 },
            { "name": "Chole", "calories": 170, "protein": 7, "carbs": 25, "fat": 5, "servingSize": 100 },
            { "name": "Paneer Butter Masala", "calories": 350, "protein": 12, "carbs": 15, "fat": 25, "servingSize": 100 },
            { "name": "Palak Paneer", "calories": 200, "protein": 10, "carbs": 10, "fat": 12, "servingSize": 100 },
            { "name": "Aloo Gobi", "calories": 120, "protein": 3, "carbs": 20, "fat": 4, "servingSize": 100 },
            { "name": "Baingan Bharta", "calories": 100, "protein": 3, "carbs": 15, "fat": 4, "servingSize": 100 },
            { "name": "Vegetable Biryani", "calories": 250, "protein": 6, "carbs": 45, "fat": 6, "servingSize": 100 },
            { "name": "Chicken Biryani", "calories": 300, "protein": 15, "carbs": 40, "fat": 10, "servingSize": 100 },
            { "name": "Mutton Biryani", "calories": 350, "protein": 18, "carbs": 40, "fat": 15, "servingSize": 100 },
            { "name": "Pulao", "calories": 200, "protein": 5, "carbs": 35, "fat": 5, "servingSize": 100 },
            { "name": "Kheer", "calories": 250, "protein": 5, "carbs": 40, "fat": 7, "servingSize": 100 },
            { "name": "Gulab Jamun", "calories": 387, "protein": 6, "carbs": 60, "fat": 15, "servingSize": 100 },
            { "name": "Jalebi", "calories": 400, "protein": 3, "carbs": 80, "fat": 10, "servingSize": 100 },
            { "name": "Rasgulla", "calories": 186, "protein": 4, "carbs": 40, "fat": 1, "servingSize": 100 },
            { "name": "Ladoo", "calories": 450, "protein": 8, "carbs": 60, "fat": 20, "servingSize": 100 },
            { "name": "Samosa", "calories": 262, "protein": 4, "carbs": 30, "fat": 14, "servingSize": 100 },
            { "name": "Pakora", "calories": 200, "protein": 5, "carbs": 20, "fat": 10, "servingSize": 100 },
            { "name": "Dhokla", "calories": 160, "protein": 6, "carbs": 25, "fat": 4, "servingSize": 100 },
            { "name": "Kachori", "calories": 300, "protein": 6, "carbs": 35, "fat": 15, "servingSize": 100 },
            { "name": "Pani Puri", "calories": 120, "protein": 2, "carbs": 25, "fat": 3, "servingSize": 100 },
            { "name": "Bhel Puri", "calories": 150, "protein": 4, "carbs": 30, "fat": 3, "servingSize": 100 },
            { "name": "Pav Bhaji", "calories": 300, "protein": 8, "carbs": 40, "fat": 12, "servingSize": 100 },
            { "name": "Vada Pav", "calories": 350, "protein": 8, "carbs": 45, "fat": 15, "servingSize": 100 },
            { "name": "Misal Pav", "calories": 400, "protein": 12, "carbs": 50, "fat": 15, "servingSize": 100 },
            { "name": "Dahi Puri", "calories": 180, "protein": 5, "carbs": 30, "fat": 5, "servingSize": 100 },
            { "name": "Raj Kachori", "calories": 400, "protein": 8, "carbs": 50, "fat": 18, "servingSize": 100 },
            { "name": "Chana Masala", "calories": 180, "protein": 7, "carbs": 25, "fat": 6, "servingSize": 100 },
            { "name": "Kadhi Pakora", "calories": 200, "protein": 6, "carbs": 20, "fat": 8, "servingSize": 100 },
            { "name": "Aloo Paratha", "calories": 300, "protein": 7, "carbs": 45, "fat": 10, "servingSize": 100 },
            { "name": "Gobi Paratha", "calories": 280, "protein": 6, "carbs": 40, "fat": 9, "servingSize": 100 },
            { "name": "Methi Paratha", "calories": 250, "protein": 6, "carbs": 35, "fat": 8, "servingSize": 100 },
            { "name": "Malai Kofta", "calories": 350, "protein": 8, "carbs": 30, "fat": 20, "servingSize": 100 },
            { "name": "Butter Chicken", "calories": 400, "protein": 20, "carbs": 15, "fat": 25, "servingSize": 100 },
            { "name": "Tandoori Chicken", "calories": 250, "protein": 25, "carbs": 5, "fat": 12, "servingSize": 100 },
            { "name": "Chicken Tikka", "calories": 200, "protein": 20, "carbs": 5, "fat": 10, "servingSize": 100 },
            { "name": "Fish Curry", "calories": 180, "protein": 15, "carbs": 10, "fat": 8, "servingSize": 100 },
            { "name": "Prawn Curry", "calories": 200, "protein": 18, "carbs": 10, "fat": 10, "servingSize": 100 },
            { "name": "Egg Curry", "calories": 150, "protein": 10, "carbs": 8, "fat": 8, "servingSize": 100 },
            { "name": "Mutton Curry", "calories": 300, "protein": 20, "carbs": 10, "fat": 20, "servingSize": 100 },
            { "name": "Keema", "calories": 250, "protein": 18, "carbs": 10, "fat": 15, "servingSize": 100 },
            { "name": "Paniyaram", "calories": 150, "protein": 4, "carbs": 25, "fat": 4, "servingSize": 100 },
            { "name": "Appam", "calories": 120, "protein": 3, "carbs": 25, "fat": 1, "servingSize": 100 },
            { "name": "Puttu", "calories": 130, "protein": 3, "carbs": 30, "fat": 0.5, "servingSize": 100 },
            { "name": "Kozhikode Biryani", "calories": 350, "protein": 15, "carbs": 45, "fat": 12, "servingSize": 100 },
            { "name": "Hyderabadi Biryani", "calories": 400, "protein": 18, "carbs": 50, "fat": 15, "servingSize": 100 },
            { "name": "Kulfi", "calories": 200, "protein": 4, "carbs": 30, "fat": 8, "servingSize": 100 },
            { "name": "Shrikhand", "calories": 300, "protein": 6, "carbs": 40, "fat": 12, "servingSize": 100 },
            { "name": "Modak", "calories": 150, "protein": 3, "carbs": 30, "fat": 3, "servingSize": 100 },
            { "name": "Puran Poli", "calories": 250, "protein": 5, "carbs": 45, "fat": 6, "servingSize": 100 },
            { "name": "Thepla", "calories": 200, "protein": 6, "carbs": 30, "fat": 6, "servingSize": 100 },
            { "name": "Undhiyu", "calories": 180, "protein": 5, "carbs": 30, "fat": 5, "servingSize": 100 },
            { "name": "Dhansak", "calories": 220, "protein": 10, "carbs": 30, "fat": 8, "servingSize": 100 },
            { "name": "Patra", "calories": 150, "protein": 4, "carbs": 25, "fat": 4, "servingSize": 100 },
            { "name": "Khandvi", "calories": 120, "protein": 5, "carbs": 20, "fat": 3, "servingSize": 100 },
            { "name": "Poha Jalebi", "calories": 300, "protein": 5, "carbs": 60, "fat": 6, "servingSize": 100 },
            { "name": "Sabudana Khichdi", "calories": 200, "protein": 2, "carbs": 40, "fat": 4, "servingSize": 100 },
            { "name": "Sabudana Vada", "calories": 250, "protein": 3, "carbs": 45, "fat": 8, "servingSize": 100 },
            { "name": "Ragi Mudde", "calories": 150, "protein": 3, "carbs": 30, "fat": 1, "servingSize": 100 },
            { "name": "Akki Roti", "calories": 200, "protein": 4, "carbs": 35, "fat": 5, "servingSize": 100 },
            { "name": "Neer Dosa", "calories": 120, "protein": 2, "carbs": 25, "fat": 1, "servingSize": 100 },
            { "name": "Kadambuttu", "calories": 150, "protein": 3, "carbs": 30, "fat": 2, "servingSize": 100 },
            { "name": "Bisi Bele Bath", "calories": 250, "protein": 6, "carbs": 45, "fat": 6, "servingSize": 100 },
            { "name": "Kosambari", "calories": 100, "protein": 3, "carbs": 15, "fat": 3, "servingSize": 100 },
            { "name": "Pesarattu", "calories": 180, "protein": 6, "carbs": 25, "fat": 5, "servingSize": 100 },
            { "name": "Uttapam", "calories": 150, "protein": 4, "carbs": 30, "fat": 2, "servingSize": 100 },
            { "name": "Rava Kesari", "calories": 300, "protein": 3, "carbs": 60, "fat": 8, "servingSize": 100 },
            { "name": "Mysore Pak", "calories": 450, "protein": 5, "carbs": 50, "fat": 25, "servingSize": 100 },
            { "name": "Pootharekulu", "calories": 200, "protein": 2, "carbs": 40, "fat": 5, "servingSize": 100 },
            { "name": "Kajjikaya", "calories": 250, "protein": 3, "carbs": 30, "fat": 12, "servingSize": 100 },
            { "name": "Ariselu", "calories": 300, "protein": 4, "carbs": 50, "fat": 10, "servingSize": 100 },
            { "name": "Pongal Vada", "calories": 200, "protein": 4, "carbs": 30, "fat": 6, "servingSize": 100 },
            { "name": "Murukku", "calories": 400, "protein": 5, "carbs": 60, "fat": 15, "servingSize": 100 },
            { "name": "Thattai", "calories": 350, "protein": 4, "carbs": 50, "fat": 12, "servingSize": 100 },
            { "name": "Kara Sev", "calories": 500, "protein": 6, "carbs": 50, "fat": 30, "servingSize": 100 },
            { "name": "Boondi Laddu", "calories": 450, "protein": 6, "carbs": 60, "fat": 20, "servingSize": 100 },
            { "name": "Adhirasam", "calories": 400, "protein": 4, "carbs": 70, "fat": 10, "servingSize": 100 },
            { "name": "Kozhukattai", "calories": 150, "protein": 2, "carbs": 30, "fat": 2, "servingSize": 100 },
            { "name": "Pazham Pori", "calories": 200, "protein": 2, "carbs": 40, "fat": 5, "servingSize": 100 },

];

document.addEventListener('DOMContentLoaded', function() {
    const foodForm = document.getElementById('food-form');
    const foodInput = document.getElementById('food-input');
    const quantityInput = document.getElementById('quantity-input');
    const foodSuggestions = document.getElementById('food-suggestions');
    const nutritionalInfo = document.getElementById('nutritional-info');
    const consumedFoods = document.getElementById('consumed-foods');
    const totalCalories = document.getElementById('total-calories');
    const totalProtein = document.getElementById('total-protein');
    const totalCarbs = document.getElementById('total-carbs');
    const totalFat = document.getElementById('total-fat');

    let dailyTotals = {
        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0
    };

    function fuzzyMatch(string, pattern) {
        pattern = '.*' + pattern.split('').join('.*') + '.*';
        const re = new RegExp(pattern, 'i');
        return re.test(string);
    }

    foodInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        if (value.length < 2) {
            foodSuggestions.style.display = 'none';
            return;
        }

        const matches = foodData.filter(food => fuzzyMatch(food.name.toLowerCase(), value));
        
        if (matches.length > 0) {
            foodSuggestions.innerHTML = matches.map(food => 
                `<div data-name="${food.name}">${food.name}</div>`
            ).join('');
            foodSuggestions.style.display = 'block';
        } else {
            foodSuggestions.style.display = 'none';
        }
    });

    foodSuggestions.addEventListener('click', function(e) {
        if (e.target.tagName === 'DIV') {
            foodInput.value = e.target.dataset.name;
            foodSuggestions.style.display = 'none';
            updateNutritionalInfo(e.target.dataset.name);
        }
    });

    function updateNutritionalInfo(foodName) {
        const food = foodData.find(f => f.name === foodName);
        if (food) {
            nutritionalInfo.innerHTML = `
                <p><strong>Nutritional Info (per 100g):</strong></p>
                <p>Calories: ${food.calories}</p>
                <p>Protein: ${food.protein}g</p>
                <p>Carbs: ${food.carbs}g</p>
                <p>Fat: ${food.fat}g</p>
            `;
            nutritionalInfo.style.display = 'block';
        } else {
            nutritionalInfo.style.display = 'none';
        }
    }

    foodForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const foodName = foodInput.value;
        const quantity = parseFloat(quantityInput.value);
        const food = foodData.find(f => f.name === foodName);

        if (food && quantity) {
            const scaleFactor = quantity / food.servingSize;
            const calories = Math.round(food.calories * scaleFactor);
            const protein = Math.round(food.protein * scaleFactor * 10) / 10;
            const carbs = Math.round(food.carbs * scaleFactor * 10) / 10;
            const fat = Math.round(food.fat * scaleFactor * 10) / 10;

            addFoodItem(foodName, quantity, calories, protein, carbs, fat);
            updateTotals(calories, protein, carbs, fat);

            foodInput.value = '';
            quantityInput.value = '';
            nutritionalInfo.style.display = 'none';
        }
    });

    function addFoodItem(name, quantity, calories, protein, carbs, fat) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="food-item-details">
                <span class="food-item-name">${name} (${quantity}g)</span>
                <span class="food-item-nutrition">
                    ${calories} cal | 
                    P: ${protein}g | 
                    C: ${carbs}g | 
                    F: ${fat}g
                </span>
            </div>
            <button class="remove-btn">Remove</button>
        `;
        
        const removeBtn = li.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function() {
            li.remove();
            updateTotals(-calories, -protein, -carbs, -fat);
        });

        consumedFoods.appendChild(li);
    }

    function updateTotals(calories, protein, carbs, fat) {
        dailyTotals.calories += calories;
        dailyTotals.protein += protein;
        dailyTotals.carbs += carbs;
        dailyTotals.fat += fat;

        totalCalories.textContent = Math.round(dailyTotals.calories);
        totalProtein.textContent = Math.round(dailyTotals.protein * 10) / 10;
        totalCarbs.textContent = Math.round(dailyTotals.carbs * 10) / 10;
        totalFat.textContent = Math.round(dailyTotals.fat * 10) / 10;
    }
});
// Add this to your script.js file

document.addEventListener('DOMContentLoaded', function() {
    const calculateBMI = () => {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const heightUnit = document.getElementById('height-unit').value;
        const weightUnit = document.getElementById('weight-unit').value;

        if (!height || !weight) return;

        // Convert to metric units
        let heightInMeters = heightUnit === 'cm' ? height / 100 : height * 0.3048;
        let weightInKg = weightUnit === 'kg' ? weight : weight * 0.453592;

        // Calculate BMI
        const bmi = weightInKg / (heightInMeters * heightInMeters);
        const roundedBMI = Math.round(bmi * 10) / 10;

        // Update BMI value
        document.getElementById('bmi-value').textContent = roundedBMI;

        // Determine category
        let category;
        let markerPosition;
        if (bmi < 18.5) {
            category = 'Underweight';
            markerPosition = (bmi / 18.5) * 25;
        } else if (bmi < 25) {
            category = 'Normal weight';
            markerPosition = 25 + ((bmi - 18.5) / 6.5) * 25;
        } else if (bmi < 30) {
            category = 'Overweight';
            markerPosition = 50 + ((bmi - 25) / 5) * 25;
        } else {
            category = 'Obese';
            markerPosition = Math.min(75 + ((bmi - 30) / 10) * 25, 98);
        }

        // Update category and marker
        document.getElementById('bmi-category').textContent = category;
        document.getElementById('bmi-marker').style.left = `${markerPosition}%`;

        // Add color classes
        const categoryColors = {
            'Underweight': '#3498db',
            'Normal weight': '#2ecc71',
            'Overweight': '#f1c40f',
            'Obese': '#e74c3c'
        };
        
        document.getElementById('bmi-category').style.color = categoryColors[category];
    };

    // Add event listeners
    document.getElementById('calculate-bmi').addEventListener('click', calculateBMI);
    
    // Add input event listeners for real-time calculation
    const inputs = ['height', 'weight', 'height-unit', 'weight-unit'];
    inputs.forEach(id => {
        document.getElementById(id).addEventListener('input', calculateBMI);
    });
});