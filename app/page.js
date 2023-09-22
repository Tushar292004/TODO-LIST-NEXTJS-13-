"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");    // STRING USE STATE 
  const [desc, setdesc] = useState("");      // STRING USE STATE 
  const [mainTask, setMainTask] = useState([]);   // ARRAY USE STATE 
  
  const submiteHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  
  const deleteHandler = (i) => {
    let copyTask = [...mainTask] 
    copyTask.splice(i,1)
    setMainTask(copyTask)
  };
  
  let renderTask = <h2 className="default-message">No Task Avaliable</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="return_li">
          <div className="task-desc">
            <h5 className="task-return">{t.title}</h5>
            <h5 className="desc-return">{t.desc}</h5> 
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i);
          }}
          className="delete">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="headline">
        TODO - LIST
      </h1>
      <div className="container">
        <form onSubmit={submiteHandler}>
          <div className="top">
            <input
              className="text-area"
              type="text"
              placeholder="Add Task"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
            <input
              className="text-area"
              type="text"
              placeholder="Add Description"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
            <button className="add" type="submit">
              Add
            </button>
          </div>
          <div className="tasks"></div>
        </form>
       
        <div className="render-task">
          <ul>{renderTask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
