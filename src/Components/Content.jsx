
import React from 'react';
import MenuSec from './MenuSec';
import { useState } from 'react';

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
    {name:"Scallion Pancakes", des:" "},
    {name:"Charcuterie Board", des:"Served fresh from the air fryer with homemade ketchup"},
    {name:"Eggplant Pizzas", des:"Served fresh from the air fryer with homemade ketchup"}

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

        </div>
           
    </div>
    );
}

export default Content;