import React from 'react';
import style from './styles/introduction.css';
import StarRatings from 'react-star-ratings';

var Introduction = (props) => {

  let location = '';
  if (props.home.location) {
    location = (props.home.location).toUpperCase();
  }

  return (
    <div className={style.introduction}>
      <div><img src='https://s3-us-west-1.amazonaws.com/hrsf93-fec-pictures/Screen+Shot+2018-04-16+at+12.04.15+PM.png' className={style.logo} /></div>
      <div className={style.text_title}> ENTIRE APARTMENT IN {location}</div>
      <div className={style.rating}> <StarRatings
        rating={props.home.rating}
        starRatedColor='rgb(187, 48, 118)'
        starDimension="15px"
        starSpacing="1px"
      /> {props.home.reviewCount}</div>
      <div className={style.text_location}>{props.home.title}</div>
    </div>
  );
  
};

export default Introduction;


