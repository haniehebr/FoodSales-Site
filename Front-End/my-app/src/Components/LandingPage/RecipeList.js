import React, { useEffect, useState } from "react";
import "./RecipeList.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/recipes/")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="recipe-list">
      <h2>Featured Recipes</h2>
      <div className="recipes">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
