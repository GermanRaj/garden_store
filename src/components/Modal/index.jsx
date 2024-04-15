import React from 'react'
import s from './index.module.css'

export default function Modal({active, setActive}) {
    return (
        <div
          className={active ? "modal_active" : "modal"}
          onClick={() => setActive(true)} 
        >
          <section className={s.modal_content} onClick={(e) => e.stopPropagation()}>
            <p>Congratulations!</p>
            <p>Your order has been successfully placed on the website.</p>
            <p>A manager will contact you shortly to confirm your order.</p>
            <div>X</div>
          </section>
        </div>
      );
    }
