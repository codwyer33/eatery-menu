import React from 'react';

function MenuSec(props){
    
    return(
        <div>
             <div id="block-a-right" class="menu-part">
                <h2>{props.title}</h2>

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
        </div>
    );
}

export default MenuSec;