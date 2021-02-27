import RatingIcon from './ratingIcon'
import React from 'react';
import './../App.css';

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
