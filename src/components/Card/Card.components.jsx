import React from 'react'
import './Card.style.scss';

function Card({ monster }) {

    const { name, email, id, address} = monster;

    return (
        <div className="CardList_item">
            <img src={`https://robohash.org/10${id}?set=set2&size=180x180`} alt={name} />
            <h3 className="name">{name}</h3>
            <p className="email">{email}</p>
            <address>
                <span>{address.street} {address.suite}</span>
                <span>{address.city}, {address.zipcode}</span>
            </address>
        </div>
    )
}

export default Card;
