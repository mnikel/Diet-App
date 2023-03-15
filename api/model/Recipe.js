const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
    name: { type: String, required: true },
    ingredients: [
      {
        _id : {_id: false},
        name: { type: String, required: true },
        quantity: {
          value: { type: Number, required: true },
          unit: { type: String, required: true }
        },
        weight: {
          value: { type: Number, required: true },
          unit: { type: String, required: true }
        }
      }
      // TODO zastanowic sie nad wydzieleniem do osobnej kolekcji i przerobic na quasi-SQL
    ],
    preparation: { type: [String], required: true },
    macros: {
      protein: { value: { type: Number, required: true }, unit: { type: String, required: true } },
      carbs: { value: { type: Number, required: true }, unit: { type: String, required: true } },
      fat: { value: { type: Number, required: true }, unit: { type: String, required: true } }
      // TODO zastanowic sie nad wydzieleniem do osobnej kolekcji i przerobic na quasi-SQL
    },
    kcal: { type: Number, required: true },
    serving_size: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    type: { type: String, required: true }
  });

  const Recipe = model('Recipe', recipeSchema, 'Meals');

  module.exports = Recipe;