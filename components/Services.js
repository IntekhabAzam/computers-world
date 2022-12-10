import React from 'react'
import Image from 'next/image';
import retail from '../public/store.png';
import wholesale from '../public/wholesale.png';
import repair from '../public/repair.png';
import classes from './Services.module.css';

const Services = () => {
  return (
    <div className={classes['service-container']}>
      <h1>Our Services</h1>
      <div className={classes['service-offer']}>
        <div className={classes.wholesale}>
            <Image src={wholesale} alt='wholesale' />
            <h3>Wholesale</h3>
            <p>We are dealing in wholesale order of IT Equipments and its related accessories from our customers</p>
        </div>
        <div className={classes.retail}>
            <Image src={retail} alt='retail' />
            <h3>Retail</h3>
            <p>We are selling IT Equipment and its related accessories in retail to meet the requirements of our local customer</p>
        </div>
        <div className={classes.repair}>
            <Image src={repair} alt='repair' />
            <h3>Repair</h3>
            <p>We are providing the repair service for any issue related to laptops and desktops</p>
        </div>
      </div>
    </div>
  )
}

export default Services
