import './MainCard.css';
import Phone from '../assets/phone.png';

const MainCard = () => {
    return (
        <div>
            <div className='card-header'>
                <div>Солодкий сундук</div>
                <div className='card-header-right'>
                    <div className='card-header-right-body'>м.Харків, вул.Сумська 101</div>
                    <div>
                        <img src={Phone} alt="logo" className='phone' />
                        8 (093) 12-12-12
                        <br /><div>Щоденно з 9:00 до 20:00</div>
                    </div>
                </div>
            </div>
            <div className='main-body'>
                Тістечка та капкейки<br />від 50 грн/шт. з доставкою<br />по Харкову та області
                <div className='main-script'>Приготуємо за 3 години на день замовлення.
                    <br /> Доставка на авто у холодильнику.</div>
            </div>
        </div>
    )
}



export default MainCard;