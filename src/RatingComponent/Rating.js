import RatingIcon from './ratingIcon'
import React , { Component } from 'react';
import './../App.css';
import axios from 'axios';


const RatingComponent = (props) => {
  const [rating, setRating] = React.useState(props.rating);
  const [hoverRating, setHoverRating] = React.useState(0);

  
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };

  const onSaveRating = (index) => { 

      axios.get(`http://localhost:8285/employeesByName/`+sessionStorage.getItem('emp_name'))
        .then(res => {
          const data = res.data;

          if(props.type==="emp"){
            data[props.tech]=index.toString();
            axios.post("http://localhost:8285/updateEmployees/"+data.employeeId, data)
            .then(response => console.log("res1 : ", response));
          }else{
            data.mgr[props.tech]=index.toString();
            axios.post("http://localhost:8285/updateEmployees/"+data.mgr.employeeId, data.mgr)
            .then(response => console.log("res 2: ", response));
          }
        })
    setRating(index);
  };

  return(
    <div className="box flex">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => {
        return (
          <RatingIcon 
            index={index} 
            key={index}
            rating={rating} 
            hoverRating={hoverRating} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave} 
            onSaveRating={onSaveRating} />
        )
      })}
    </div>
  );
}



export default RatingComponent;
