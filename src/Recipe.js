import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, link}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => <li>{ingredient.text}</li>)}  
            </ul>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt=""/>
            <br/>
            <a href={link} target="blank"><button className={style.buttonc}>Recipe</button></a>
            <br/>
        </div>
    );
};

export default Recipe;
