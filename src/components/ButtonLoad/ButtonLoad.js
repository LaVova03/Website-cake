import './ButtonLoad.css';

const ButtonLoad = ({ setModalPhoto }) => {
    return (
        <div>
            <button onClick={setModalPhoto} className='button-load'>Завантажити</button>
        </div>
    )
}

export default ButtonLoad;