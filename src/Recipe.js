import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="card sticky-action">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={image} alt="" className="activator" />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {title}{" "}
          <i className="material-icons right waves-effect waves-teal btn-flat">
            close
          </i>
        </span>
        <p>{Math.floor(calories)} Calorie</p>
        <h4>Ingredients</h4>
        <ul className="ingredients">
          {ingredients.map(ingr => (
            <li>{ingr.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
