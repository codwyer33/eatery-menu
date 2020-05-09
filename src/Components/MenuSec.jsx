import React, {useState} from 'react';

function MenuSec(props){
    // console.log(props);
    const options = props.options;
    var col1 = [];
    var col2 = [];
    const [num, setNum] = useState((props.title === 'Appetizers' || props.title === 'Sides' || props.title === 'Desserts' || props.title === 'Drinks') ? {maxNum: 2, count: 0} : {maxNum: 1, count: 0});

    function changeNum(event) {
        if (event.target.checked) {
            //checking
            if (num.count < num.maxNum) {
                setNum(prevValue => {return {...prevValue, count: num.count + 1}});
                props.addItem(props.title, event.target.name);

            } else {
                //cannot pick any more
                event.target.checked = false;
            }
        } else {
            //unchecking 
            setNum(prevValue => {return {...prevValue, count: num.count - 1}});
            props.deleteItem(props.title, event.target.name);
        }
    }

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
            <input onClick={changeNum} id="check" type="checkbox" name={option.name}></input> 
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
                <h3>Please select {num.maxNum - num.count} more in this category.</h3>
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