'use client';

import React from 'react';
import Link from 'next/link';
import { handleEditRecipe } from '../actions';

interface Recipe {
  id: string;
  title: string;
  description: string | null;
  ingredients: string;
  instructions: string;
  prep_time: number | null;
  cook_time: number | null;
  servings: number | null;
  notes: string | null;
  category: string | null;
  is_favorite: boolean;
}

export default function EditRecipeForm({ recipe }: { recipe: Recipe }) {
  return (
    <main className="min-h-screen bg-pink-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold text-pink-700 mb-6">Edit Recipe</h1>
        <form className="space-y-4" action={(formData) => handleEditRecipe(recipe.id, formData)}>
          <div>
            <label className="block font-semibold mb-1 text-pink-800">Title</label>
            <input type="text" name="title" className="w-full border rounded px-3 py-2" required defaultValue={recipe.title} />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-pink-800">Description</label>
            <textarea name="description" className="w-full border rounded px-3 py-2" rows={2} defaultValue={recipe.description || ''} />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-pink-800">Ingredients</label>
            <textarea name="ingredients" className="w-full border rounded px-3 py-2" rows={3} placeholder="One per line" defaultValue={recipe.ingredients} />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-pink-800">Instructions</label>
            <textarea name="instructions" className="w-full border rounded px-3 py-2" rows={4} placeholder="Step by step" defaultValue={recipe.instructions} />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-pink-800">Prep Time (min)</label>
              <input type="number" name="prepTime" min="0" className="w-full border rounded px-3 py-2" defaultValue={recipe.prep_time || ''} />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-pink-800">Cook Time (min)</label>
              <input type="number" name="cookTime" min="0" className="w-full border rounded px-3 py-2" defaultValue={recipe.cook_time || ''} />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1 text-pink-800">Servings</label>
              <input type="number" name="servings" min="1" className="w-full border rounded px-3 py-2" defaultValue={recipe.servings || ''} />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-pink-800">Notes</label>
            <textarea name="notes" className="w-full border rounded px-3 py-2" rows={2} defaultValue={recipe.notes || ''} />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-pink-800">Category</label>
            <input type="text" name="category" className="w-full border rounded px-3 py-2" defaultValue={recipe.category || ''} />
          </div>
          <div className="flex items-center gap-2">
            <input id="favorite" name="isFavorite" type="checkbox" defaultChecked={recipe.is_favorite} />
            <label htmlFor="favorite" className="text-pink-800 font-semibold">Mark as Favorite</label>
          </div>
          <div className="flex justify-between mt-6">
            <Link href="/" className="text-pink-600 hover:underline">← Back to Recipes</Link>
            <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded shadow">Update Recipe</button>
          </div>
        </form>
      </div>
    </main>
  );
} 