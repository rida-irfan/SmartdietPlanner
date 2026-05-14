const getActivityMultiplier = (level) => {
  const values = {
    Low: 1.2,
    Moderate: 1.4,
    High: 1.6,
  };
  return values[level] || 1.35;
};

const getGoalAdjustment = (goal) => {
  const values = {
    'Weight Loss': -500,
    'Weight Gain': 400,
    Maintain: 0,
  };
  return values[goal] || 0;
};

const getPreferenceMeals = (preference) => {
  const meals = {
    Veg: {
      breakfast: 'Greek yogurt parfait with berries and granola',
      lunch: 'Grilled paneer salad bowl with quinoa and roasted veggies',
      dinner: 'Lentil curry with brown rice and roasted broccoli',
      snacks: 'Mixed nuts with apple slices',
    },
    'Non-Veg': {
      breakfast: 'Veggie omelette with avocado and whole grain toast',
      lunch: 'Grilled chicken bowl with sweet potato and greens',
      dinner: 'Salmon with quinoa and asparagus',
      snacks: 'Hummus with carrot sticks',
    },
    Keto: {
      breakfast: 'Scrambled eggs with spinach and cauliflower rice',
      lunch: 'Chicken salad with avocado and olive oil dressing',
      dinner: 'Seared steak with zucchini noodles',
      snacks: 'Cheese slices and olives',
    },
    'Gluten Free': {
      breakfast: 'Smoothie bowl with almond milk and chia seeds',
      lunch: 'Grilled shrimp salad with avocado',
      dinner: 'Stuffed peppers with ground turkey',
      snacks: 'Cottage cheese with cucumber',
    },
  };
  return meals[preference] || meals.Veg;
};

const generateDietPlan = ({ age, gender, weight, height, activityLevel, goal, preference }) => {
  const baseCalories = Math.round((10 * weight) + (6.25 * height) - (5 * age) + (gender === 'Male' ? 5 : -161));
  const maintenance = Math.round(baseCalories * getActivityMultiplier(activityLevel));
  const calories = Math.max(1200, maintenance + getGoalAdjustment(goal));
  const protein = Math.round(weight * 1.8);
  const fats = Math.round((calories * 0.25) / 9);
  const carbs = Math.round((calories - protein * 4 - fats * 9) / 4);
  const meals = getPreferenceMeals(preference);

  return {
    breakfast: meals.breakfast,
    lunch: meals.lunch,
    dinner: meals.dinner,
    snacks: meals.snacks,
    calories,
    protein,
    carbs,
    fats,
    goal,
    preference,
  };
};

module.exports = generateDietPlan;
