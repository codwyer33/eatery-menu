
import React from 'react';
import MenuSec from './MenuSec';
import { useState } from 'react';

import emailjs from 'emailjs-com';

import ScheduleForm from './ScheduleForm';
const appetizers=[
    {name:"Scallion Pancakes", des:"Crispy and layered with garlic and onion"},
    {name:"Charcuterie Board", des:"Crackers and bread served with assorted cheese, meat, and jam"},
    {name:"Guacamole Devilled Eggs", des:"Hard boiled eggs topped with avocado and diced tomato filling"},
    {name:"Homemade Empanadas", des:"Golden brown and stuffed with beef and onion filling "},
    {name:"Butternut Squash Soup", des:"Creamy"}
    // {name:"Name of App5", des:"Very, very delicious"}

];
const sides=[
    {name:"Spiced Sweet Potato Fries", des:"Served fresh from the air fryer with homemade ketchup"},
    {name:"Eggplant Pizzas", des:"Miniature sized pizzas topped with sauce, cheese, and beef"},
    {name:"Baked Potato", des:"Served hot and topped with salsa, corn, and homemade guacamole."},
    {name:"Grilled Kabobs", des:"Pineapple, eggplant, pepper, and sausage"}

];
const entrees=[
    {name:"Meatball Plate ", des:"Bite-sized and served with marinara and teriyaki dipping sauces"},
    {name:"Potato Bun Sliders", des:"Grilled patties on potato buns with homemade ketchup"},
    {name:"Garlic Parmesan Chicken", des:"Topped with lemon and chives"},
    {name:"Eggplant Lasagna", des:"des"}
];
const drinks=[
    {name:"Sparkling Water with Lemon", des:"des"},
    {name:"Wine", des:"White or red"},
    {name:"Chai Tea", des:"Served hot, may be served with dessert"},
    {name:"Summer Spritzer Cocktail", des:"Choice of pineapple or strawberry, iced"}
];
const desserts=[
    {name:"Chocolate Dipped Strawberries", des:"Topped with sprinkled chocolate and cookie crumbs"},
    {name:"Olivia's Chocolate Peanut Butter Bar Special", des:"Chooey, gooey goodness    (© Olivia 2020)"},
    {name:"Banana Split", des:"Topped with yogurt, sprinkled chocolate, toasted almonds, and fresh strawberries."},
    {name:"Four Ingredient Crepes", des:"Choice of toppings: blueberries, peanut butter, chocolate chips, strawberries, banana"}
];


function Content(){
    const [numDishes, setNumDishes] = useState({app: 2, sides: 2, entree: 1, dess: 2, drinks: 1});
    const [order, setOrder] = useState({appetizers: ["test app"], sides: ["test side"], entrees: [], drinks: [], desserts: []});

    function sendEmail(e) {
        console.log("send email");
        emailjs.sendForm('gmail', 'template_4XwuT01L', order, 'YOUR_USER_IDuser_NNbEaAW2hSuNXXPbx16QM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    return(
    <div id="content">

        <div id="intro">
            <br></br>
            <hr></hr>
                <h1>You are cordially invited to a seaside Mother's Day Dinner!</h1>
                <h2> --- Courtesy of Clare and Olivia O'Dwyer ---</h2>
            <hr></hr>
            <br></br>
        </div>

        <div id="schedule-block">
            <ScheduleForm />
        </div>

        <div id="main-block">
            <div id="block-top">
                <hr></hr>
                <h1>Mommy's 2020 Mother's Day Dinner</h1>
                <hr></hr>

           </div>

            <MenuSec title="Appetizers" options={appetizers}/>
            <MenuSec title="Sides" options={sides}/>
            <MenuSec title="Entrees" options={entrees}/>
            <MenuSec title="Desserts" options={desserts}/>
            <MenuSec title="Drinks" options={drinks}/>

            <div id="submit-section">
                <br/>
                <div id="submit-left-align">
                    <label><h2>Please leave any additional comments or dietary restrictions below:</h2></label>
                    <textarea  type="text" placeholder="Any additional comments" rows="10" cols="110"></textarea><br/>
                </div>
                <button id="submit-btn" onClick={sendEmail} type="submit">Submit my order!</button>
                <br/><br/>
            </div>
        </div>
           
    </div>
    );
}

export default Content;