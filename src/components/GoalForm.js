import React, { useState } from "react";

const GoalForm = (props) => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });
  
    function changeHandler(event) {
      setFormData({ ...formData, [event.target.name]: event.target.value })
    }
  
    function submitHandler(event) {
      event.preventDefault();
      props.onAdd(formData);
      setFormData({ goal:"", by: "" });
    }
  
    return (
      <>
        <h1>My Goals</h1>
        <form onSubmit={submitHandler}>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...' 
            value={formData.goal}
            onChange={changeHandler}
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
            value={formData.by}
            onChange={changeHandler}
          />
          <button>Add</button>
        </form>
      </>
    )
}

export default GoalForm;