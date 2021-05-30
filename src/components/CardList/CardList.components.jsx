import React from 'react';

import './CardList.style.scss';
import Card from '../Card/Card.components';

function CardList({ monsters }) {
    return (
        <div className="CardList">
            { monsters ? monsters.map((monster) => <Card key={monster.id} monster={monster} />)  : "" }
        </div>
    )
}

export default CardList
