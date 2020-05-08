import React from 'react';
import ScheduleForm from './ScheduleForm';

function Content(){
    return(
    <div id="content">

        <div id="intro">
            <br></br>
            <hr></hr>
                <h1>You are cordially invited to Mommy's seaside Mother's Day Dinner!</h1>
                <h2>Cooked courtesy of Clare and Olivia O'Dwyer</h2>
            <hr></hr>
            <br></br>
        </div>
        <ScheduleForm />
        <div id="main-block">
            <div id="block-top">
                <hr></hr>
                <h1>Mommy's 2020 Mother's Day Dinner</h1>
                <hr></hr>

           </div>
            <div id="block-a-right">
                <h2>Appetizers</h2>
                <p>alsjfalksdjflkasdjfklasdjfkljdsakljfd</p>
            </div>
            <div id="block-a-left">
            <h2></h2>

             </div>
        </div>

    </div>
    );
}

export default Content;