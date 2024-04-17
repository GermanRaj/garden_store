import React from 'react'
import s from './index.module.css'
import closeSign from './media/delete.png'


export default function Modal({closeModalWindow, modalActive}) {
    return (
        <div className={[s.modal, modalActive ? s.active : ''].join(' ')}>
          <section className={s.modal_content} >
            <p>Congratulations!</p>
            <p>Your order has been successfully placed on the website.</p>
            <p>A manager will contact you shortly to confirm your order.</p>
            <img onClick={closeModalWindow} src={closeSign} alt="closeButton" />
          </section>
        </div>
      );
    }
