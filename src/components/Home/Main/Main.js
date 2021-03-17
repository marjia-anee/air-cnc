import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

const Main = (props) => {
      const { title, category, image, rate,location } = props.Home;
      return (
            <div style={{ width: '400px', height: '300px' }}>
            <img className='p-1 w-100' src={image} alt="" />
            <p className = "text-center text-info"><b><small>{category} · {location}</small></b></p>
            <h6 className = "text-center">{title} </h6>
            

            <p className = "text-center"><small>{rate}$ per person</small>             <FontAwesomeIcon className="star-icon" icon={faStar} /> <b>4.9 </b>
            </p>

            </div>
      );
};

export default Main;