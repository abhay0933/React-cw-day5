
import './App.css';

import {useState} from "react";

function App() {
  const [subject, setsubject] = useState("");
  const [hour, sethours] = useState(0);
  const [planner, setplanner]= useState([]);

  const addthings = () =>{
    setplanner([...planner,{subjectName: subject, Hours: hour}])
  }

  const changethings = (e, fun) =>{
    fun(e.target.value);
  }

  const increasehour = (idx) => {
      setplanner((prevplanner) => {
        const newplanner = [...prevplanner];
        newplanner[idx] = {
          ...newplanner[idx],
          Hours: parseInt(newplanner[idx].Hours)+1,
        };
        return newplanner;
      });
  }

  const decreasehour = (idx) => {
    setplanner((prevplanner) => {
      const newplanner = [...prevplanner];
      newplanner[idx] = {
        ...newplanner[idx],
        Hours: parseInt(newplanner[idx].Hours)-1,
      };
      return newplanner;
    });
}

  return (
   
    <div className="App">
     <div className="container">
       <h1>Padhai Kar le Bhai Job Chaiye Toh</h1>
       <input type="text" placeholder="Enter" className='subject' value ={subject} onChange={(e)=>changethings(e, setsubject)}/>
       <input type="number" placeholder="hours" className='hour' value ={hour} onChange={(e)=>changethings(e, sethours)}/>
       <button className="addbtn" onClick={addthings}>Add+</button>
     </div>
    
      {
        planner.map((ele, index)=>(
          <div className='addedthings'>
          {ele.subjectName} {ele.Hours+ "Hour"}
          <button className='plus' onClick={() => increasehour(index)}>+</button>
          <button className='minus' onClick={() => decreasehour(index)}>-</button>
          
          </div>
        ))
      }
     
    </div>
  );
}

export default App;
