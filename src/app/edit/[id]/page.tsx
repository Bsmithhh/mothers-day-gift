import React from 'react';
import { supabase } from '@/lib/supabase';
import EditForm from '../../components/EditForm';

async function getRecipe(id: string) {
  const { data: recipe, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching recipe:', error);
    return null;
  }

  return recipe;
}

export default async function EditRecipePage({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id);
  if (!recipe) return <div>Recipe not found</div>;

  return <EditForm recipe={recipe} />;
} 