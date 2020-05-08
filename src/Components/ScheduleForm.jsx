import React, { useState } from "react";

function ScheduleForm() {
  const [state, setName] = useState({name: "", set: false});

  function changeName(event) {
    const val = event.target.value;
    setName({name: val, set: false});
  }

  function changeView(event) {
    setName(prevValue => {
      return {...prevValue, set: true}
    })
  }

  return <div>
    {(!state.set) ? 
    <form>
      <label>Please Enter Your Name:</label><br></br>
      <input onChange={changeName} type="text" placeholder="Your Name" value={state.name}></input>
      <button onClick={changeView} type="submit">Ready to go!</button>
    </form> : 
    <h2>Welcome {state.name}!</h2>}
  </div>
}

export default ScheduleForm;
