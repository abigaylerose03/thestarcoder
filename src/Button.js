import React, { useState } from "react";
import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';
import classNames from "classnames";

const Button = ({ title, onClick, primary, text}) => {
  return (
    <button
      className={classNames([
        styles.button,
        primary ? styles.primarybtn : text,
        text ? styles.textbtn : styles.primarybtn
       
      ])}
      // className={classNames([
      //   styles.button,
      //   text2 ? styles.primarybtn : styles.normalbtn,
       
      // ])}

      onClick={onClick}
      
    >
 
      <span>{title}</span>
    </button>
  );
};
export default Button;