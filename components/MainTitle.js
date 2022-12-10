import React, { useState } from 'react'
import Link from 'next/link';
import classes from './MainTitle.module.css';
import DescriptionModal from './UI/DescriptionModal';

const MainTitle = () => {
    const [modalState, setModalState] = useState(false);

    const modalOpenHandler = () => {
        setModalState(true)
    }

    const modalCloseHandler = () => {
        setModalState(false);
    }

  return (
    <>
    {modalState && <DescriptionModal onClose={modalCloseHandler}/>}
    <div className={classes['main-title-container']}>
      <h1>One Stop Destination for Business Grade <spam onClick={modalOpenHandler}>Refurbished</spam> IT Equipments</h1>
      <div className={classes['welcome-text']}>
      <p>Visit our showroom Computers World and experience the joy of using Refurbished & Business grade branded computers & laptops, where you will find these machines with exciting and configurations at really affordable price.</p>
      </div>
      <div>
        <Link href='/contacts'>
            <button type='button'>Visit Our Shop</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default MainTitle
