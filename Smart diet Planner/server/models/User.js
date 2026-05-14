const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  breakfast: { type: String, default: '' },
  lunch: { type: String, default: '' },
  dinner: { type: String, default: '' },
  snacks: { type: String, default: '' },
  calories: { type: Number, default: 0 },
  protein: { type: Number, default: 0 },
  carbs: { type: Number, default: 0 },
  fats: { type: Number, default: 0 },
  goal: { type: String, default: 'Maintain' },
  preference: { type: String, default: 'Veg' },
  date: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, default: 25 },
    gender: { type: String, default: 'Prefer not to say' },
    weight: { type: Number, default: 70 },
    height: { type: Number, default: 170 },
    activityLevel: { type: String, default: 'Moderate' },
    goal: { type: String, default: 'Maintain' },
    preference: { type: String, default: 'Veg' },
    plans: [planSchema],
  },
  { timestamps: true }
);

const UserModel = mongoose.model('User', userSchema);

const formatUser = (doc, includePassword = false) => {
  if (!doc) return null;

  const user = {
    id: doc._id.toString(),
    name: doc.name,
    email: doc.email,
    age: doc.age,
    gender: doc.gender,
    weight: doc.weight,
    height: doc.height,
    activityLevel: doc.activityLevel,
    goal: doc.goal,
    preference: doc.preference,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };

  if (includePassword) {
    user.password = doc.password;
  }

  return user;
};

class User {
  static async findOne({ email }, includePassword = false) {
    const query = UserModel.findOne({ email });
    if (!includePassword) {
      query.select('-password');
    }
    const user = await query.exec();
    return formatUser(user, includePassword);
  }

  static async create({ name, email, password }) {
    const user = new UserModel({ name, email, password });
    await user.save();
    return formatUser(user, true);
  }

  static async findById(id) {
    const user = await UserModel.findById(id).exec();
    return formatUser(user, false);
  }

  static async updateById(id, updates) {
    const fields = ['name', 'age', 'gender', 'weight', 'height', 'activityLevel', 'goal', 'preference'];
    const payload = {};

    fields.forEach((field) => {
      if (updates[field] !== undefined) {
        payload[field] = updates[field];
      }
    });

    if (!Object.keys(payload).length) {
      return this.findById(id);
    }

    const updatedUser = await UserModel.findByIdAndUpdate(id, payload, { new: true }).exec();
    return formatUser(updatedUser, false);
  }

  static async addPlan(userId, plan) {
    await UserModel.findByIdAndUpdate(userId, { $push: { plans: plan } }).exec();
    return plan;
  }

  static async getPlans(userId) {
    const user = await UserModel.findById(userId).select('plans').exec();
    if (!user) return [];

    return user.plans
      .slice()
      .sort((a, b) => b.date - a.date)
      .map((row) => ({
        id: row._id.toString(),
        date: row.date,
        breakfast: row.breakfast,
        lunch: row.lunch,
        dinner: row.dinner,
        snacks: row.snacks,
        calories: row.calories,
        protein: row.protein,
        carbs: row.carbs,
        fats: row.fats,
        goal: row.goal,
        preference: row.preference,
      }));
  }
}

module.exports = User;
