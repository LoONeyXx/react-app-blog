import './Item.css';
import React from 'react';

function Item({ card, onBuy }) {
    const [isAdded, setIsAdded] = React.useState(false);

    function handleBuyClick() {
        onBuy(card);
        setIsAdded(true);
    }

    return (
        <li className='item'>
            <div className='title-zone'>
                <h2 className='item-title'>{card.title}</h2>
                <div
                    style={{
                        backgroundImage: `url(${card.image})`,
                    }}
                    className='item-image'
                ></div>
                <p className='info-category'>
                    {card.category[0].toUpperCase() + card.category.slice(1)}
                </p>
                <p className='info-price'>{`Price: ${card.price} $`}</p>
                <div className='item-rating'>Rating {card.rating.rate}</div>
                <div className='button-zone'>
                    <button className='detail'>Detail</button>
                    <button
                        onClick={handleBuyClick}
                        className={`buy ${isAdded ? 'buy_added' : ''}`}
                    >
                        {isAdded ? 'Added' : 'Add'}
                    </button>
                </div>
            </div>
            {/* <div className='info'>
                <p className='info-description'>{description}</p>
            </div> */}
        </li>
    );
}

export default Item;
