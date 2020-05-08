import React, { useState } from "react";

function ScheduleForm() {
  const [state, setName] = useState({name: "", set: false});
  const [timeState, setTime] = useState({time: "", timeSet: false});
  const [emailState, setEmail] = useState({email: "", emailSet: false});

  function changeName(event) {
    const val = event.target.value;
    setName({name: val, set: false});
  }

  function changeView(event) {
    setName(prevValue => {
      return {...prevValue, set: true}
    })
  }

  function changeTime(event) {
    const value = event.target.value;
    setTime({time: value, set:false});
  }

  function changeTimeView() {
    setTime(prevValue => {
      return {...prevValue, timeSet: true}
    });
  }

  function changeEmail(event) {
    if (event.target.name === "email") {
      const val = event.target.value;
      setEmail({email: val, setEmail: false});
    } else {
      setEmail(prevValue => {
        return {...prevValue, emailSet: true}
      });
    }
    
  }

  return <div>
    {(!state.set) ? 
    <form>
      <label>Please Enter Your Name:</label><br></br>
      <input onChange={changeName} type="text" placeholder="Your Name" value={state.name}></input>
      <button onClick={changeView} type="submit">Ready to go!</button>
    </form> :
    <h2>Welcome, {state.name}!</h2>}

    {(!timeState.timeSet) ? 
    <div>
    <h3>Please select a time to dine on Sunday, May 10!</h3>
    <form>
  <input onClick={changeTime} type="radio"  id="5:00pm" name="time" value="5:00pm"></input>
  <label for="5:00pm">5:00pm</label>
  <input onClick={changeTime} type="radio"  id="5:30pm" name="time" value="5:30pm"></input>
  <label for="5:30pm">5:30pm</label>
  <input onClick={changeTime} type="radio"  id="6:00pm" name="time" value="6:00pm"></input>
  <label for="6:00pm">6:00pm</label>
  
  <input onClick={changeTime} type="radio"  id="6:30pm" name="time" value="6:30pm"></input>
  <label for="6:30pm">6:30pm</label>
  <input onClick={changeTime} type="radio"  id="7:00pm" name="time" value="7:00pm"></input>
  <label for="7:00pm">7:00pm</label>
  <input onClick={changeTime} type="radio"  id="7:30pm" name="time" value="7:30pm"></input>
  <label for="7:30pm">7:30pm</label>
  <input onClick={changeTime} type="radio"  id="8:00pm" name="time" value="8:00pm"></input>
  <label for="8:00pm">8:00pm</label>

  <input onClick={changeTimeView} type="submit" value="Submit"></input>
  </form></div> : 
    <h3>Your reservation is set for {timeState.time} on  Sunday, May 10!</h3>}

  <br></br>

  {!emailState.emailSet ? 
  <form>
  <label>If you would like to receive an email confirmation for your reservation and order, please enter your email:</label><br></br>
      <input onChange={changeEmail} name="email" type="text" placeholder="Email" value={emailState.email}></input>
      <button onClick={changeEmail} type="submit">Send me a confirmation!</button>
  </form> :
  <h3>We'll shoot you a confirmation email at {emailState.email}!</h3>
  }

  </div>
}

export default ScheduleForm;
