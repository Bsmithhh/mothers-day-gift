'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { handleEditRecipe } from '../edit/actions';
import { Recipe } from '../types';

interface EditFormProps {
  recipe: Recipe;
}

export default function EditForm({ recipe }: EditFormProps) {
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 py-6 px-4 sm:py-12 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-pink-700 mb-2 text-center">Edit Recipe</h1>
          <p className="text-sm sm:text-base text-pink-600 text-center mb-6 sm:mb-8">Update your recipe details</p>
          
          <form className="space-y-4 sm:space-y-6" action={async (formData: FormData) => {
            await handleEditRecipe(recipe.id, formData);
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="md:col-span-2">
                <label className="block text-base sm:text-lg font-semibold mb-2 text-pink-800">Title</label>
                <input 
                  type="text" 
                  name="title" 
                  defaultValue={recipe.title}
                  className="w-full border-2 border-pink-100 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all outline-none text-base" 
                  required 
                  placeholder="Enter recipe title"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-base sm:text-lg font-semibold mb-2 text-pink-800">Description</label>
                <textarea 
                  name="description" 
                  defaultValue={recipe.description}
                  className="w-full border-2 border-pink-100 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all outline-none text-base" 
                  rows={2}
                  placeholder="Brief description of your recipe"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-base sm:text-lg font-semibold mb-2 text-pink-800">Ingredients</label>
                <textarea 
                  name="ingredients" 
                  defaultValue={recipe.ingredients}
                  className="w-full border-2 border-pink-100 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all outline-none text-base" 
                  rows={4} 
                  placeholder="List ingredients one per line"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-base sm:text-lg font-semibold mb-2 text-pink-800">Instructions</label>
                <textarea 
                  name="instructions" 
                  defaultValue={recipe.instructions}
                  className="w-full border-2 border-pink-100 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all outline-none text-base" 
                  rows={6} 
                  placeholder="Step by step instructions"
                />
              </div>

              <div>
                <label className="block text-base sm:text-lg font-semibold mb-2 text-pink-800">Prep Time (minutes)</label>
                <input 
                  type="number" 
                  name="prepTime" 
                  min="0" 
                  defaultValue={recipe.prepTime}
                  className="w-full border-2 border-pink-100 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all outline-none text-base" 
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-base sm:text-lg font-semibold mb-2 text-pink-800">Cook Time (minutes)</label>
                <input 
                  type="number" 
                  name="cookTime" 
                  min="0" 
                  defaultValue={recipe.cookTime}
                  className="w-full border-2 border-pink-100 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all outline-none text-base" 
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-base sm:text-lg font-semibold mb-2 text-pink-800">Servings</label>
                <input 
                  type="number" 
                  name="servings" 
                  min="1" 
                  defaultValue={recipe.servings}
                  className="w-full border-2 border-pink-100 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all outline-none text-base" 
                  placeholder="1"
                />
              </div>

              <div>
                <label className="block text-base sm:text-lg font-semibold mb-2 text-pink-800">Category</label>
                <input 
                  type="text" 
                  name="category" 
                  defaultValue={recipe.category}
                  className="w-full border-2 border-pink-100 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all outline-none text-base" 
                  placeholder="e.g., Dessert, Main Course"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-base sm:text-lg font-semibold mb-2 text-pink-800">Notes</label>
                <textarea 
                  name="notes" 
                  defaultValue={recipe.notes}
                  className="w-full border-2 border-pink-100 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-all outline-none text-base" 
                  rows={3}
                  placeholder="Additional tips or notes"
                />
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center gap-3 p-3 sm:p-4 bg-pink-50 rounded-xl">
                  <input 
                    id="favorite" 
                    name="isFavorite" 
                    type="checkbox" 
                    checked={isFavorite} 
                    onChange={e => setIsFavorite(e.target.checked)}
                    className="w-5 h-5 text-pink-600 border-pink-300 rounded focus:ring-pink-500" 
                  />
                  <label htmlFor="favorite" className="text-base sm:text-lg font-semibold text-pink-800">Mark as Favorite</label>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-pink-100">
              <Link 
                href="/" 
                className="text-pink-600 hover:text-pink-700 font-semibold flex items-center gap-2 transition-colors text-base sm:text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Recipes
              </Link>
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-base sm:text-lg"
              >
                Update Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 