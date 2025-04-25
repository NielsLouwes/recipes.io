export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  nutrition: string[];
  spices: string[];
  instructions: string[];
  tips: string[];
  "prep-time": number | null;
  "cooking-time": number;
  serves: string;
  difficulty: number;
  cuisine: string;
  calories: number | null;
  tags: string[];
  slug: string;
}

export interface Data {
  recipes: Recipe[];
}
