import React from 'react';
import s from './index.module.css';
import image from './image.png';

export default function DiscountForm() {

  return (
    <div className={s.block_form}>

        <h1>5% off on the first order</h1>

        <div className={s.content_container}>
            <img src={image} alt="Image" />
            <div className={s.form_container}>form</div>
        </div>

    </div>
  )
}
