import './ButtonImage.css';

const ButtonImage = ({ isClose, setModalPhoto, postPhoto, isCloseModalChef, closeModalAsk, addTextClient, isPost, isTextarea }) => {

    return (
        <div className='wrap-button-userModal'>
            <button className={isClose ? 'modal-img-close' : 'add-img-user'}
                onClick={isClose ? setModalPhoto : isPost ? postPhoto : isCloseModalChef ? closeModalAsk : isTextarea ? addTextClient : null}
            >{isClose || isCloseModalChef ? 'Повернутись' : 'Відправити'}</button>
        </div>
    )
}

export default ButtonImage;