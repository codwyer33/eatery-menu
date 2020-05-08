import React from 'react';
import ScheduleForm from './ScheduleForm';

function Content(){
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
            <div id="block-a-right" class="menu-part">
                <h2>Appetizers</h2>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                 <h6>item</h6>
                 <p>description</p>    

            </div>
            <div id="block-a-left" class="menu-part">
                <h2></h2>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                 <h6>item</h6>
                 <p>description</p>    
             </div><br></br><hr></hr>
             <div id="block-s-right" class="menu-part">
                 <h2>Sides</h2>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                 <h6>item</h6>
                 <p>description</p>   
            </div>
            <div id="block-s-left" class="menu-part">
             <h2></h2>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                 <h6>item</h6>
                 <p>description</p>   
             </div><br></br><hr></hr>
             <div id="block-e-right" class="menu-part">
                 <h2>Entrees</h2>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                 <h6>item</h6>
                 <p>description</p>   
            </div>
            <div id="block-e-left" class="menu-part">
                <h2></h2>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                 <h6>item</h6>
                 <p>description</p>   
             </div><br></br><hr></hr>
             <div id="block-d-right" class="menu-part">
                <h2>Desserts</h2>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                 <h6>item</h6>
                 <p>description</p>   
            </div>
            <div id="block-d-left" class="menu-part">
                 <h2></h2>
                <h6>item</h6>
                <p>description</p>    
                <br/>
                 <h6>item</h6>
                 <p>description</p>   
             </div><br></br><hr></hr>
             <br></br><br></br>

        </div>
    </div>
    );
}

export default Content;