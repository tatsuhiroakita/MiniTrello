import React, {useState } from 'react'

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
    //console.log(isClick);
  };

  const handleChange = (e) => {
    //console.log(inputCardTitle);
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);

  };

  const handleBlur = (e) => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input 
            className="taskCardTitleInput"
            autoFocus
            type="text" 
            onChange={handleChange} 
            onBlur={handleBlur} 
            value={inputCardTitle}
            maxLength="10"
          />
        </form>
      ) : ( 
        <h3>{inputCardTitle}</h3> 
      )}
    </div>
  )
}