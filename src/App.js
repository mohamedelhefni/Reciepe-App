import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./Recipe";
import { async } from "q";

const App = () => {
  const APP_ID = ""; // Use Your ID App from http://edamam.com/
  const APP_KEY = ""; // Use Your App_KEY from http://edamam.com/
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={getSearch}>
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">search</i>
                <input
                  id="icon_prefix2"
                  type="text"
                  onChange={updateSearch}
                  className="materialize-textarea"
                />
                <label htmlFor="icon_prefix2">Search ...</label>
              </div>
            </div>
          </form>
          <div className="cards">
            {recipes.map(recipe => (
              <Recipe
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
