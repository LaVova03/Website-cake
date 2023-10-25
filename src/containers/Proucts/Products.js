import './Products.css';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CardProducts from '../../components/CardProducts/CardProducts';
import Basket from '../../components/Basket/Basket';
import Img from '../../assets/img.png';
import Img1 from '../../assets/img (1).png';
import Img2 from '../../assets/img (2).png';
import Img3 from '../../assets/img (3).png';
import Img4 from '../../assets/img (4).png';
import Img5 from '../../assets/img (5).png';
import Img6 from '../../assets/img (6).png';
import Img7 from '../../assets/img (7).png';
import Img8 from '../../assets/img (8).png';

const Products = () => {

    const arrProducts = [
        {
            id: 1,
            img: Img,
            name: 'Кремовий замок',
            direction: 'Ніжний крем будь-якого кольору на вибір, вафельна основа',
            price: '50 грн/шт. '
        },
        {
            id: 2,
            img: Img1,
            name: 'Малиновий рай',
            direction: 'Повітряний крем, темна основа та ягода малини',
            price: '50 грн/шт. '
        },
        {
            id: 3,
            img: Img2,
            name: 'Феєрверк',
            direction: 'Різнокольоровий крем, з бісквітною основою',
            price: '50 грн/шт. '
        },
        {
            id: 4,
            img: Img3,
            name: 'Шоколадний світ',
            direction: 'Горіхова стружка, ніжний крем та шоколадна основа',
            price: '50 грн/шт. '
        },
        {
            id: 5,
            img: Img4,
            name: 'Сльози дракона',
            direction: 'Ніжний крем будь-якого кольору на вибір, вафельна основа',
            price: '50 грн/шт. '
        },
        {
            id: 6,
            img: Img5,
            name: 'Літня фантазія',
            direction: 'Прикраси у формі сердець для коханої людини',
            price: '50 грн/шт. '
        },
        {
            id: 7,
            img: Img6,
            name: 'Мис безумства',
            direction: 'Різнокольорова основа, стружка та ніжний крем',
            price: '50 грн/шт. '
        },
        {
            id: 8,
            img: Img7,
            name: 'Хмарна казка',
            direction: 'Світла основа, ніжний крем із стружкою зверху',
            price: '50 грн/шт. '
        },
        {
            id: 9,
            img: Img8,
            name: 'Темний лицар',
            direction: 'Темна основа, ніжний крем та смачні кульки',
            price: '50 грн/шт. '
        },
    ]

    const [buttonBack, setButtonBack] = useState(false);
    const [modal, setModal] = useState(false);
    const [nameCard, setNameCard] = useState('');

    const navigate = useNavigate();

    const setBack = () => {
        setButtonBack(prevState => ({
            ...prevState,
            back: !prevState.next,
        }));
        navigate("/main");
    }

    const hendleOpen = () => {
        setModal(true)
    }

    const handleClose = () => {
        setModal(false);
        setNameCard('')
    }

    const addNameCard = (name) => {
        setNameCard(name)
    }

    return (
        <div className='Products'>
            <div className='wrap-basket'>
                <Basket modal={modal} handleClose={handleClose} nameCard={nameCard} />
            </div>
            <div className='wrap-card'>
                <Button setBack={setBack} />
                <CardProducts hendleOpen={hendleOpen} arrProducts={arrProducts} addNameCard={addNameCard} />
            </div>
        </div>
    )
}

export default Products;