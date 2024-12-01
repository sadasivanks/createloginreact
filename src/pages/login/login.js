import React from 'react'
import Image from '../../Assets/logimage.jpg'
import Styles from '../login/login.module.css'
function login() {
  return (
    <div className={Styles.bgcolor}>
    <div className={Styles.partitioof2}>

    <div>
            <input type='text' placeholder='enter email'  className={Styles.emailstyle}/>
            <input type='text' placeholder='enter password'  className={Styles.emailstyle}/>
            <button className={Styles.buttonstyle}>submit</button>
        </div>
        <img src= {Image} alt="images"/>



       
    </div>
    </div>


  )
}

export default login