import { motion } from 'framer-motion';
import { Utensils, Coffee, Sun, Moon, Cookie } from 'lucide-react';

const mealIcons = {
  breakfast: Coffee,
  lunch: Sun,
  dinner: Moon,
  snacks: Cookie,
};

const pakistaniMeals = {
  breakfast: [
    { name: 'Anda Paratha', calories: 320, protein: 12, carbs: 35, fats: 15 },
    { name: 'Chai with Brown Bread', calories: 280, protein: 8, carbs: 45, fats: 8 },
    { name: 'Oats with Banana', calories: 250, protein: 6, carbs: 40, fats: 5 },
    { name: 'Daal Chana', calories: 290, protein: 14, carbs: 38, fats: 9 },
    { name: 'Omelette with Roti', calories: 350, protein: 18, carbs: 25, fats: 20 },
    { name: 'Yogurt with Fruit', calories: 220, protein: 10, carbs: 30, fats: 6 },
  ],
  lunch: [
    { name: 'Chicken Biryani', calories: 450, protein: 25, carbs: 50, fats: 18 },
    { name: 'Daal Chawal', calories: 380, protein: 15, carbs: 55, fats: 12 },
    { name: 'Chicken Karahi', calories: 420, protein: 30, carbs: 15, fats: 25 },
    { name: 'Mixed Sabzi with Roti', calories: 350, protein: 12, carbs: 45, fats: 14 },
    { name: 'Grilled Chicken with Rice', calories: 400, protein: 28, carbs: 40, fats: 16 },
    { name: 'Rajma Chawal', calories: 360, protein: 14, carbs: 52, fats: 10 },
  ],
  dinner: [
    { name: 'Chicken Pulao', calories: 410, protein: 22, carbs: 48, fats: 15 },
    { name: 'Tandoori Chicken', calories: 380, protein: 32, carbs: 12, fats: 22 },
    { name: 'Chapati with Curry', calories: 340, protein: 16, carbs: 42, fats: 13 },
    { name: 'Vegetable Soup', calories: 180, protein: 8, carbs: 25, fats: 6 },
    { name: 'BBQ Chicken', calories: 390, protein: 35, carbs: 8, fats: 24 },
    { name: 'Fish with Rice', calories: 370, protein: 28, carbs: 35, fats: 14 },
  ],
  snacks: [
    { name: 'Dates', calories: 120, protein: 1, carbs: 30, fats: 0 },
    { name: 'Roasted Chana', calories: 150, protein: 8, carbs: 18, fats: 6 },
    { name: 'Fruit Salad', calories: 100, protein: 2, carbs: 22, fats: 1 },
    { name: 'Lassi', calories: 180, protein: 6, carbs: 20, fats: 8 },
    { name: 'Dry Fruits Mix', calories: 200, protein: 5, carbs: 15, fats: 14 },
  ],
};

const DietPlanCard = ({ plan }) => {
  // Generate Pakistani meals based on preference
  const generatePakistaniMeals = (preference) => {
    const meals = {};
    Object.keys(pakistaniMeals).forEach(mealType => {
      const options = pakistaniMeals[mealType];
      // Filter based on preference
      let filteredOptions = options;
      if (preference === 'Veg') {
        filteredOptions = options.filter(meal =>
          !meal.name.toLowerCase().includes('chicken') &&
          !meal.name.toLowerCase().includes('fish') &&
          !meal.name.toLowerCase().includes('bbq') &&
          !meal.name.toLowerCase().includes('tandoori')
        );
      } else if (preference === 'Non-Veg') {
        filteredOptions = options.filter(meal =>
          meal.name.toLowerCase().includes('chicken') ||
          meal.name.toLowerCase().includes('fish') ||
          meal.name.toLowerCase().includes('bbq') ||
          meal.name.toLowerCase().includes('tandoori')
        );
      }

      if (filteredOptions.length === 0) filteredOptions = options;
      const randomMeal = filteredOptions[Math.floor(Math.random() * filteredOptions.length)];
      meals[mealType] = randomMeal;
    });
    return meals;
  };

  const meals = generatePakistaniMeals(plan.preference);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="backdrop-blur-xl bg-white/60 dark:bg-navy-800/60 rounded-3xl p-8 shadow-glass border border-white/20 dark:border-navy-700/20"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-primary rounded-2xl">
          <Utensils className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-navy-900 dark:text-white">Your Daily Meal Plan</h3>
          <p className="text-navy-600 dark:text-navy-300">Personalized Pakistani meals for {plan.goal.toLowerCase()}</p>
        </div>
        <div className="ml-auto">
          <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
            {plan.goal}
          </span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(meals).map(([mealType, meal], index) => {
          const IconComponent = mealIcons[mealType];
          return (
            <motion.div
              key={mealType}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-navy-800/50 rounded-2xl p-6 shadow-soft border border-white/20 dark:border-navy-700/20 hover:shadow-glass transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-accent rounded-xl">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-navy-900 dark:text-white capitalize">
                  {mealType}
                </h4>
              </div>

              <div className="space-y-3">
                <p className="text-navy-800 dark:text-navy-200 font-medium">{meal.name}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-navy-600 dark:text-navy-400">Calories</span>
                  <span className="font-semibold text-primary-600">{meal.calories} kcal</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <div className="font-semibold text-primary-700 dark:text-primary-300">{meal.protein}g</div>
                    <div className="text-primary-600 dark:text-primary-400">Protein</div>
                  </div>
                  <div className="text-center p-2 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                    <div className="font-semibold text-accent-700 dark:text-accent-300">{meal.carbs}g</div>
                    <div className="text-accent-600 dark:text-accent-400">Carbs</div>
                  </div>
                  <div className="text-center p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <div className="font-semibold text-orange-700 dark:text-orange-300">{meal.fats}g</div>
                    <div className="text-orange-600 dark:text-orange-400">Fats</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Total Macros Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 p-6 bg-gradient-primary rounded-2xl text-white"
      >
        <h4 className="text-xl font-bold mb-4">Daily Totals</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">
              {Object.values(meals).reduce((sum, meal) => sum + meal.calories, 0)} kcal
            </div>
            <div className="text-sm opacity-90">Calories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              {Object.values(meals).reduce((sum, meal) => sum + meal.protein, 0)}g
            </div>
            <div className="text-sm opacity-90">Protein</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              {Object.values(meals).reduce((sum, meal) => sum + meal.carbs, 0)}g
            </div>
            <div className="text-sm opacity-90">Carbs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              {Object.values(meals).reduce((sum, meal) => sum + meal.fats, 0)}g
            </div>
            <div className="text-sm opacity-90">Fats</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DietPlanCard;
