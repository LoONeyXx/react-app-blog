import './App.css';
import icon from '../images/Shop-icon.png';
import React from 'react';
import Item from './Item';

function App() {
    const [items, setItems] = React.useState([]);
    const [buyItems, setBuyItems] = React.useState([]);
    const [isOpenPopup, setIsOpenPopup] = React.useState(false);

    function handleClickBuyItem(item) {
        setBuyItems((prev) => [...prev, item]);
    }

    function handleClickTrash() {
        setIsOpenPopup((prev) => !prev);
    }

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((res) => setItems(res));
    }, []);

    return (
        <div className='App'>
            <header className='header'>
                <h1 className='title'>Интернет магазин одежды</h1>
                <div
                    style={{
                        backgroundImage: `url(${icon})`,
                    }}
                    className='icon'
                    onClick={handleClickTrash}
                >
                    <div className='count'>{buyItems.length}</div>
                </div>
            </header>
            <ul className='container'>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        card={item}
                        onBuy={handleClickBuyItem}
                    />
                ))}
            </ul>
            <section className={`popup ${isOpenPopup ? 'popup_opened' : ''}`}>
                <ul className='popup__container'>
                    {isOpenPopup
                        ? buyItems.map((item) => (
                              <li className='popup__item'>
                                  <div
                                      style={{
                                          backgroundImage: `url(${item.image})`,
                                      }}
                                      className='popup__item-image'
                                  ></div>
                                  <h2 className='popup__item-title'>
                                      {item.title}
                                  </h2>
                                  <div className='popup__item-price'>
                                      {item.price + ' $'}
                                  </div>
                              </li>
                          ))
                        : 'no items'}
                </ul>
                <div className='total'>
                    <div className='total__price'>
                        Total price: {buyItems.length > 0
                            ? buyItems.reduce(
                                  (acc, curr) => (acc += curr.price),
                                  0
                              ).toFixed(2) + ' $'
                            : 0}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
