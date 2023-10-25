import './Basket.css';
import { useState, useEffect } from 'react';
import Berry from '../../assets/berry.png';
import Leaf from '../../assets/leaf.png';

const Basket = ({ modal, handleClose, nameCard }) => {

    const [name, setName] = useState('');
    const [address, setEmail] = useState('');
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (!modal) {
            setName('');
            setEmail('');
            setQuantity(0);
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const setData = () => {
        if (name, address, quantity) {
            console.log('Fulfilled');
            handleClose();
        }
    }


    return (
        <div className={modal ? 'form' : 'not-form'}>
            <form onSubmit={handleSubmit}>
                <div className='modal-body'>
                    <div className='wrap-modal-grid'>
                        Назва товару:
                        <div className='modal-header'>{nameCard}</div>
                    </div>

                    <div className='wrap-modal-grid'>
                        П.І.П.:
                        <input
                            type="text"
                            value={name}
                            className='input-modal'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='wrap-modal-grid'>
                        Адреса:
                        <input
                            type="text"
                            value={address}
                            className='input-modal'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div >

                    <div className='wrap-modal-grid'>
                        Кількість:
                        <input
                            type="number"
                            value={quantity}
                            className='input-modal'
                            onChange={(e) => {
                                const value = parseInt(e.target.value, 10);
                                setQuantity(value >= 0 ? value : 0);
                            }}
                        />
                    </div>
                </div>
                <br />
                <br />
                <label>
                    Сумма до сплати:
                    <label>{` ${quantity * 50} грн`}</label>
                </label>
                <br />
                <img src={Berry} alt='logo' className='berry-modal' />
                <img src={Leaf} alt='logo' className='leaf-modal' />
                <br />
                <button type="submit" className='button-modal' onClick={setData}>Замовити</button>
                <button type="submit" className='button-modal' onClick={handleClose}>Повернутись</button>
            </form>
        </div>
    );
};

export default Basket;