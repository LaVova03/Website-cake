import './PhotoOrder.css';
import Transit1 from '../../assets/transit1.png';
import Phone1 from '../../assets/phone 1.png';
import ButtonLoad from '../ButtonLoad/ButtonLoad';
import { useState } from 'react';
import PhotoClient from '../../components/PhotoClient/PhotoClient';
import Berry1 from '../../assets/berry1.png';
import Transit2 from '../../assets/transit2.png';


const PhotoOrder = () => {

    const [modalPhoto, showModalPhoto] = useState(false);
    const [photo, loadPhoto] = useState(null);

    const setModalPhoto = () => {
        if (!modalPhoto) {
            showModalPhoto(true)
        }
        if (modalPhoto) {
            showModalPhoto(false)
        }
    }

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const photoUrl = URL.createObjectURL(file);
            loadPhoto(photoUrl);
        }
    };

    const postPhoto = () => {
        if (photo) {
            console.log('postPhoto');
            showModalPhoto(false);
            loadPhoto(null);
        } else {
            alert('Завантажте фото !!!')
        }
    }

    return (
        <div className='photo-order'>
            <img className='transit-img' src={Transit1} alt="logo" />
            <div className='photo-order-grid'>
                <img className='phone-order' src={Phone1} alt='logo' />
                <div >
                    <div className='order-ask'>Не знайшли що потрібно?AppRouter
                        <img className='berry-order' src={Berry1} alt='logo' /></div>
                    <div className='order-offer'>Приготуєм замовлення будь-якої складності по фото чи ескізу</div>
                    <PhotoClient modalPhoto={modalPhoto} photo={photo} handlePhotoChange={handlePhotoChange} setModalPhoto={setModalPhoto} postPhoto={postPhoto} />
                    <div className='order-bottom-text'>Завантажте фото чи ескіз капкейків та мы розрахуємо вартість за 30 хвилин</div>
                    <ButtonLoad setModalPhoto={setModalPhoto} />
                </div>
            </div>
            <img className='transit-img2' src={Transit2} alt='logo' />
        </div>
    )
}

export default PhotoOrder;