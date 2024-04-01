import React from 'react';
import s from './index.module.css';
import image from './image.png';

export default function DiscountForm() {
    const usersData = [];

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, phone_number, email } = event.target.elements;

        const user = {
            id: Date.now(),
            name: name.value,
            phone_number: phone_number.value,
            email: email.value
        };

        usersData.push(user);

        event.target.reset();
    };

    return (
        <div className={s.block_form}>
            <h1>5% off on the first order</h1>
            <div className={s.content_container}>
                <img src={image} alt="Image" />
                <form className={s.form_container} onSubmit={handleSubmit}>
                    <div className={s.inputs}>
                        <input type="text" placeholder="Name" name="name" />
                        <input type="text" placeholder="Phone number" name="phone_number" />
                        <input type="text" placeholder="Email" name="email" />
                    </div>
                    <button type="submit">Get a discount</button>
                </form>
            </div>
        </div>
    );
}
