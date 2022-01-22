import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDollarSign } from '@fortawesome/free-solid-svg-icons'
import fbIcon from '../../img/icons8-facebook-48.png';
import instraIcon from '../../img/icons8-whatsapp-48.png'
import './Scientist.css'

const Scientist = (props) => {
// console.log(props.scientist);
const {name,age,img,role,by,complement,salary,} = props.scientist
const icon = <FontAwesomeIcon icon={faDollarSign} />

    return (
        <div className="scientist flex-grow-1 m-2">
            <img className=" img" src={img} alt="" />
            <div className="scientist-detail p-2">
                <h5>{complement}</h5>
                <p><small>BY {by}</small></p>
                <h4>Name: {name}</h4>
                <p>Age: {age}</p>
                <p>Role: <span>{role}</span></p>
                <p>Salary: {salary}</p>
                <button onClick={() => props.handleAddToCart(props.scientist)} className="btn-primary rounded mt-3">{icon} Add salary to cart</button>
                <div className="social-icon">
                    <img src={fbIcon} alt="" />
                    <img src={instraIcon} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Scientist;