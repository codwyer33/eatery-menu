
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
    {name:"Butternut Squash Soup", des:"Creamy, golden orange butternut squash delight"}
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
    {name:"Eggplant Lasagna", des:"A creative Whole30 invention!"}
];
const drinks=[
    {name:"Sparkling Water with Lemon", des:"Enough said."},
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
    const [numDishes, setNumDishes] = useState({app: 2, sides: 2, entree: 1, dess: 2, drinks: 2});
    const [order, setOrder] = useState({appetizers: [], sides: [], entrees: [], drinks: [], desserts: []});
    const [comment, setComment] = useState('');
    const [email, setEmail] = useState('orodwyer@gmail.com');
    const [name, setName] = useState('');
    const [time, setTime] = useState('');

    // var email = "orodwyer@gmail.com";
    // var name = '';
    // var time = '';

    function getEmail(e) {
        // email = e;
        setEmail(e);
        console.log(email);
    }

    function getName(n) {
        // name = n; 
        setName(n);
        console.log(name);
    }

    function getTime(t) {
        // time = t;
        setTime(t);
        console.log(time);
    }

    function changeComment(e) {
        const value = e.target.value;
        setComment(value);
        // console.log(comment);
        console.log(email);
    }

    function sendEmail(e) {
        setComment(comment);
        var templateParams = {
            to_email: email,
            from_name: 'The Exquisite Eatery Team',
            to_name: name,
            message_html: '<h1>We are confirming your reservation on Sunday, May 10 at ' + time + '.</h1><br/>' + 
            'Your appetizers: ' + order.appetizers + '<br/>' + 
            'Your sides: ' + order.sides + '<br/>' + 
            'Your entree: ' + order.entrees + '<br/>' + 
            'Your desserts: ' + order.desserts + '<br/>' + 
            'Your drink: ' + order.drinks + '<br/>' + 
            'Additional Comments: ' + comment + '<br/>' + 
            'We look forward to seeing you!'
        };

        console.log("send email");
        emailjs.send('gmail', 'template_4XwuT01L', templateParams, 'user_NNbEaAW2hSuNXXPbx16QM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    function addItem(category, item) {
        switch (category) {
            case 'Appetizers': 
            setOrder(prevValue => { return {...prevValue, 
                appetizers: [...order.appetizers, item]
            }});
            break;
            case 'Sides': 
            setOrder(prevValue => { return {...prevValue, 
                sides: [...order.sides, item]
            }});
            break;
            case 'Entrees': 
            setOrder(prevValue => { return {...prevValue, 
                entrees: [...order.entrees, item]
            }});
            break;
            case 'Desserts': 
            setOrder(prevValue => { return {...prevValue, 
                desserts: [...order.desserts, item]
            }});
            break;
            case 'Drinks': 
            setOrder(prevValue => { return {...prevValue, 
                drinks: [...order.drinks, item]
            }});
            break;
        }
        console.log(order);
    }

    function deleteItem(category, item) {
        switch (category) {
            case 'Appetizers': 
            setOrder(prevValue => { return {...prevValue, 
                appetizers: order.appetizers.filter(el => {
                    return el !== item
                })
            }});
            break;
            case 'Sides': 
            setOrder(prevValue => { return {...prevValue, 
                sides: order.sides.filter(el => {
                    return el !== item
                })
            }});
            break;
            case 'Entrees': 
            setOrder(prevValue => { return {...prevValue, 
                entrees: order.entrees.filter(el => {
                    return el !== item
                })
            }});
            break;
            case 'Desserts': 
            setOrder(prevValue => { return {...prevValue, 
                desserts: order.desserts.filter(el => {
                    return el !== item
                })
            }});
            break;
            case 'Drinks': 
            setOrder(prevValue => { return {...prevValue, 
                drinks: order.drinks.filter(el => {
                    return el !== item
                })
            }});
            break;
        }
        console.log(order);
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
            <ScheduleForm getEmail={getEmail} getName={getName} getTime={getTime}/>
        </div>

        <div id="main-block">
            <div id="block-top">
                <hr></hr>
                <h1>Mommy's 2020 Mother's Day Dinner</h1>
                <hr></hr>

           </div>

            <MenuSec title="Appetizers" options={appetizers} addItem={addItem} deleteItem={deleteItem}/>
            <MenuSec title="Sides" options={sides} addItem={addItem} deleteItem={deleteItem}/>
            <MenuSec title="Entrees" options={entrees} addItem={addItem} deleteItem={deleteItem}/>
            <MenuSec title="Desserts" options={desserts} addItem={addItem} deleteItem={deleteItem}/>
            <MenuSec title="Drinks" options={drinks} addItem={addItem} deleteItem={deleteItem}/>

            <div id="submit-section">
                <br/>
                <div id="submit-left-align">
                    <label><h2>Please leave any additional comments or dietary restrictions below:</h2></label>
                    <textarea  onChange={changeComment} type="text" placeholder="Any additional comments" rows="10" cols="110" value={comment}></textarea><br/>
                </div>
                <button id="submit-btn" onClick={sendEmail}>Submit my order!</button>
                <br/><br/>
            </div>
        </div>
           
    </div>
    );
}

export default Content;