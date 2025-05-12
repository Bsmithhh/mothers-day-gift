import { supabase } from '@/lib/supabase';
import { redirect } from 'next/navigation';
import EditForm from '@/app/components/EditForm';
import { Recipe } from '@/app/types';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function EditPage({ params }: PageProps) {
  const { data: recipe, error } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !recipe) {
    redirect('/');
  }

  // Transform the recipe data to match our Recipe type
  const transformedRecipe: Recipe = {
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    prepTime: recipe.prep_time,
    cookTime: recipe.cook_time,
    servings: recipe.servings,
    notes: recipe.notes,
    category: recipe.category,
    isFavorite: recipe.is_favorite
  };

  return <EditForm recipe={transformedRecipe} />;
} 