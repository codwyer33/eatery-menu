
import React from 'react';
import MenuSec from './MenuSec';
import { useState } from 'react';

import emailjs from 'emailjs-com';

import ScheduleForm from './ScheduleForm';
const appetizers=[
    {name:"Scallion Pancakes", des:"Very, very delicious"},
    {name:"Charcuterie Board", des:"Very, very delicious"},
    {name:"Eggplant Pizzas", des:"Very, very delicious"},
    {name:"Homemade Empanadas", des:"Very, very delicious"},
    // {name:"Name of App5", des:"Very, very delicious"}

];
const sides=[
    {name:"Spiced Sweet Potato Fries", des:"Served fresh from the air fryer with homemade ketchup"},
    {name:"", des:" "},
    {name:"", des:"Served fresh from the air fryer with homemade ketchup"},
    {name:"", des:"Served fresh from the air fryer with homemade ketchup"}

];
const entrees=[
    {name:"dish", des:"des"},
    {name:"Potato Bun Sliders", des:"des"},
    {name:"dish", des:"des"},
    {name:"dish", des:"des"}
];
const drinks=[
    {name:"dish", des:"des"},
    {name:"dish", des:"des"},
    {name:"dish", des:"des"},
    {name:"dish", des:"des"}
];
const desserts=[
    {name:"Chocolate Dipped Strawberries", des:"des"},
    {name:"dish", des:"des"},
    {name:"dish", des:"des"},
    {name:"dish", des:"des"}
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