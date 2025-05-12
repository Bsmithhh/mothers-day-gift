import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import DeleteButton from './components/DeleteButton';

async function getRecipes() {
  const { data: recipes, error } = await supabase
    .from('recipes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }

  return recipes;
}

export default async function HomePage() {
  const recipes = await getRecipes();

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 py-6 px-4 sm:py-12 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-pink-700 mb-3 sm:mb-4">Welcome, Mom! 💖</h1>
          <p className="text-base sm:text-xl text-pink-600 max-w-2xl mx-auto px-4">
            Your personal recipe collection, made with love. Add, organize, and cherish your favorite dishes and memories.
          </p>
        </div>

        <div className="fixed bottom-6 right-6 sm:static sm:flex sm:justify-end sm:mb-8">
          <Link 
            href="/add" 
            className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold py-3 px-6 rounded-full sm:rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span className="sm:hidden">Add</span>
            <span className="hidden sm:inline">Add New Recipe</span>
          </Link>
        </div>

        <div className="grid gap-4 sm:gap-6 pb-20 sm:pb-0">
          {recipes.map((recipe: any) => (
            <div 
              key={recipe.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-pink-800">{recipe.title}</h2>
                    {recipe.is_favorite && (
                      <span className="text-yellow-400 text-2xl" title="Favorite Recipe">★</span>
                    )}
                  </div>
                  {recipe.description && (
                    <p className="text-pink-600 mb-4 text-sm sm:text-base">{recipe.description}</p>
                  )}
                  <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-pink-500">
                    {recipe.prep_time && (
                      <span className="flex items-center gap-1 bg-pink-50 px-2 py-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        Prep: {recipe.prep_time} min
                      </span>
                    )}
                    {recipe.cook_time && (
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        Cook: {recipe.cook_time} min
                      </span>
                    )}
                    {recipe.servings && (
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        Serves: {recipe.servings}
                      </span>
                    )}
                    {recipe.category && (
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        {recipe.category}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <Link 
                    href={`/edit/${recipe.id}`} 
                    className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Edit
                  </Link>
                  <DeleteButton id={recipe.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
