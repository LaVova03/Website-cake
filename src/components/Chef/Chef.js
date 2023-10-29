import './Chef.css';
import { useState, useEffect } from 'react';
import ModalClientText from '../../components/ModalClientText/ModalClientText';
import Woman from '../../assets/woman 2.png';
import Berry from '../../assets/berry1.png';
import Leaf from '../../assets/leaf.png';
import Transit1 from '../../assets/transit1.png';

const Chef = () => {

    const [modalAsk, setModalAsk] = useState(false);
    const [textClient, setTextClient] = useState('');
    const [textarea, setTextArea] = useState('');

    useEffect(() => {
        console.log(textClient)
    }, [textClient])

    const openModalAsk = () => {
        setModalAsk(true)
    }

    const closeModalAsk = () => {
        setModalAsk(false);
        setTextArea('');
    }


    const addTextArea = (event) => {
        setTextArea(event.target.value);
    }

    const addTextClient = () => {
        if (textarea) {
            setTextClient(textarea);
            setModalAsk(false);
            setTextArea('');
        }
    }

    return (
        <div>
            <div className='wrap-chef'>
                <div className='left-block-chef'>
                    <div className='ask-chef'>Хто буде готовути?</div>
                    <div className='body-chef'>Особисто приготую та все красиво упакую для вашої події</div>
                    <div className='chef-list'>
                        <ul>
                            <li>Проконсультую щодо вибору капкейкові і придумаю нестандартну ідею</li>
                            <li>Приготую капкейки для вашої події, які обов'язково всім сподобаються</li>
                            <li>Акуратно і красиво все запакую, якщо ви хочете зробити приємний подарунок</li>
                        </ul>
                    </div>
                    <button className='button-chef' onClick={openModalAsk}>Поставити запитання Юлії</button>
                    <ModalClientText textarea={textarea} addTextClient={addTextClient}
                        modalAsk={modalAsk} closeModalAsk={closeModalAsk} addTextArea={addTextArea} textClient={textClient} />
                </div>
                <div className='right-block-chef'>
                    <img className='woman-chef-berry' src={Berry} alt='logo' />
                    <img className='woman-chef-leaf' src={Leaf} alt='logo' />
                    <img className='woman-chef' src={Woman} alt='logo' />
                    <div className='name-chef'>Юлія Кондратьєва</div>
                    <div className='worker-chef'>Ваш кондитер</div>
                </div>
                <img className='transit-img' src={Transit1} alt="logo" />
            </div>
        </div>
    )
}

export default Chef;