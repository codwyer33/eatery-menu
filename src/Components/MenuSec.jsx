import React from 'react';

function MenuSec(props){
    const options = props.options;
    var col1 = [];
    var col2 = [];

    // Divides options into two columns
    options.map((option,index)=>{
        if(index< (Math.ceil(options.length/2)) ){
            col1.push(option);
        } else {
            col2.push(option);
        }
    })
    // console.log(col1,col2);
    
    function makeOption(option){
        return(
        <div>
            <div id="option-checkbox-div">
            <input type="checkbox"></input> 
            </div>
            <div id="option-text-div">
            <h6>{option.name}</h6>
            <p>{option.des}</p>    
            <br/>
            </div>
        </div>
        );
    }

    return(
        <div id="menu">
             <div id="block-a-right" class="menu-part">
                <h2>{props.title}</h2>
                {col1.map(makeOption)}

            </div>
            <div id="block-a-left" class="menu-part">
                <h2 id="spacer"> _ </h2>
                {col2.map(makeOption)}
             </div><br></br><hr></hr>
        </div>
    );
}

export default MenuSec;