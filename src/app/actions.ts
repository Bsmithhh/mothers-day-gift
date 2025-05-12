'use server';

import { supabase } from '@/lib/supabase';
import { redirect } from 'next/navigation';

export async function addRecipe(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const ingredients = formData.get('ingredients') as string;
  const instructions = formData.get('instructions') as string;
  const prepTime = formData.get('prepTime') ? Number(formData.get('prepTime')) : null;
  const cookTime = formData.get('cookTime') ? Number(formData.get('cookTime')) : null;
  const servings = formData.get('servings') ? Number(formData.get('servings')) : null;
  const notes = formData.get('notes') as string;
  const category = formData.get('category') as string;
  const isFavorite = formData.get('isFavorite') === 'on';

  const { error } = await supabase
    .from('recipes')
    .insert([
      {
        title,
        description,
        ingredients,
        instructions,
        prep_time: prepTime,
        cook_time: cookTime,
        servings,
        notes,
        category,
        is_favorite: isFavorite,
      },
    ]);

  if (error) {
    console.error('Error adding recipe:', error);
  }
}

export async function deleteRecipe(id: string) {
  const { error } = await supabase
    .from('recipes')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting recipe:', error);
    throw new Error('Failed to delete recipe');
  }

  redirect('/');
}

export async function handleDeleteRecipe(id: string) {
  const { error } = await supabase
    .from('recipes')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting recipe:', error);
    throw new Error('Failed to delete recipe');
  }

  redirect('/');
} 