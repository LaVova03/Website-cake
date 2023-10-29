import './PhotoClient.css';
import ButtonImage from '../ButtonImage/ButtonImage';

const PhotoClient = ({ modalPhoto, photo, handlePhotoChange, setModalPhoto, postPhoto }) => {

    return (
        <div className={modalPhoto ? 'photo-client' : 'not-photo-client'}>
            <input type="file" onChange={handlePhotoChange} />
            <br /> <img className='img-user' src={photo} alt="logo" />
            <div className='button-photo-client'>
                <ButtonImage isPost postPhoto={postPhoto} />
                <ButtonImage isClose setModalPhoto={setModalPhoto} />
            </div>
        </div>
    )
}

export default PhotoClient;