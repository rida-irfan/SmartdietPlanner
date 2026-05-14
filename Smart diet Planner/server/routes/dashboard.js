const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const generateDietPlan = require('../utils/dietCalculator');

const router = express.Router();

router.get('/profile', auth, async (req, res) => {
  res.json({ user: req.user });
});

router.put('/profile', auth, async (req, res) => {
  const { age, gender, weight, height, activityLevel, goal, preference, name } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const updatedUser = await User.updateById(req.user.id, {
      name,
      age,
      gender,
      weight,
      height,
      activityLevel,
      goal,
      preference,
    });

    res.json({ user: updatedUser });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ message: 'Unable to update profile' });
  }
});

router.post('/plan', auth, async (req, res) => {
  const { age, gender, weight, height, activityLevel, goal, preference } = req.body;
  if (!age || !gender || !weight || !height || !activityLevel || !goal || !preference) {
    return res.status(400).json({ message: 'All fields are required to generate a plan' });
  }

  try {
    const plan = generateDietPlan({ age, gender, weight, height, activityLevel, goal, preference });
    await User.addPlan(req.user.id, plan);

    res.json({ plan });
  } catch (error) {
    console.error('Plan generation error:', error);
    res.status(500).json({ message: 'Unable to generate plan' });
  }
});

router.get('/plans', auth, async (req, res) => {
  try {
    const plans = await User.getPlans(req.user.id);
    res.json({ plans });
  } catch (error) {
    console.error('Fetch plans error:', error);
    res.status(500).json({ message: 'Unable to fetch plans' });
  }
});

module.exports = router;
