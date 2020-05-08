
import React from 'react';
import MenuSec from './MenuSec';
import React, { useState } from 'react';

import ScheduleForm from './ScheduleForm';
const appetizers=[{}];
const sides=[{}];
const entrees=[{}];
const drinks=[{}];
const desserts=[{}];


function Content(){
    const [numDishes, setNumDishes] = useState({app: 2, sides: 2, entree: 1, dess: 2, drinks: 1});

    return(
    <div id="content">

        <div id="intro">
            <br></br>
            <hr></hr>
                <h1>You are cordially invited to a seaside Mother's Day Dinner!</h1>
                <h2> --- Cooked courtesy of Clare and Olivia O'Dwyer ---</h2>
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