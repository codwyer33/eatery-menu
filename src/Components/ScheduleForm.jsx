import React, { useState } from "react";

function ScheduleForm(props) {
  const [state, setName] = useState({name: "", set: false});
  const [timeState, setTime] = useState({time: "", timeSet: false});
  const [emailState, setEmail] = useState({email: "", emailSet: false});

  // var form = document.getElementById("schedule-form");

  // document.body.appendChild(form);

  function changeName(event) {
    const val = event.target.value;
    setName({name: val, set: false});
  }

  function changeView(event) {
    event.preventDefault();
    setName(prevValue => {
      return {...prevValue, set: true}
    });
    props.getName(state.name);
  }

  function changeTime(event) {
    const value = event.target.value;
    setTime({time: value, set:false});
  }

  function changeTimeView(event) {
    event.preventDefault();

    setTime(prevValue => {
      return {...prevValue, timeSet: true}
    });
    props.getTime(timeState.time);
  }

  function changeEmail(event) {
    event.preventDefault();

    if (event.target.name === "email") {
      const val = event.target.value;
      setEmail({email: val, setEmail: false});
    } else {
      setEmail(prevValue => {
        return {...prevValue, emailSet: true}
      });
      props.getEmail(emailState.email);
    }
    
  }

  return <div id="schedule-form">
    
    <form id="form1" onSubmit={changeView}>
    {(!state.set) ? <div>
      <label><h2>Please Enter Your Name:</h2></label>
      <input onChange={changeName} type="text" placeholder="Your Name" value={state.name}></input>
      <button  type="submit">Ready to go!</button></div> : <h2>Welcome, {state.name}!</h2>}
    </form> 
      <br/><br/>

    <form className="form">
    {(!timeState.timeSet) ? 
    <div>
    <h2>Select a time to dine on Sunday, May 10:</h2>
      <input onClick={changeTime} type="radio"  id="5:00pm" name="time" value="5:00pm"></input>
      <label for="5:00pm">5:00pm </label>
      <input onClick={changeTime} type="radio"  id="5:30pm" name="time" value="5:30pm"></input>
      <label for="5:30pm">5:30pm </label>
      <input onClick={changeTime} type="radio"  id="6:00pm" name="time" value="6:00pm"></input>
      <label for="6:00pm">6:00pm </label>
      
      <input onClick={changeTime} type="radio"  id="6:30pm" name="time" value="6:30pm"></input>
      <label for="6:30pm">6:30pm </label>
      <input onClick={changeTime} type="radio"  id="7:00pm" name="time" value="7:00pm"></input>
      <label for="7:00pm">7:00pm </label>
      <input onClick={changeTime} type="radio"  id="7:30pm" name="time" value="7:30pm"></input>
      <label for="7:30pm">7:30pm </label>
      <input onClick={changeTime} type="radio"  id="8:00pm" name="time" value="8:00pm"></input>
      <label for="8:00pm">8:00pm </label>

      <input onClick={changeTimeView} className="btn" type="submit" value="Submit"></input>
  </div> : 
    <h3>Your reservation is set for {timeState.time} on  Sunday, May 10!</h3> }
    </form>

  <br/><br/>

  
  <form className="form">
  {!emailState.emailSet ? <div>
  <label><h2>If you would like to receive an email confirmation for your reservation and order, please enter your email:</h2></label>
      <input onChange={changeEmail} name="email" type="text" placeholder="Email" value={emailState.email}></input>
      <button onClick={changeEmail} type="submit">Send me a confirmation!</button></div>
 :
  <h3>We'll shoot you a confirmation email at {emailState.email}!</h3>
  }  </form>

  </div>
}

export default ScheduleForm;
