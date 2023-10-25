import './Button.css';

const Button = ({ isNext, setNext, setBack }) => {
    return (
        <div>
            <button onClick={isNext ? setNext : setBack}
                className={isNext ? 'button-next' : 'button-back'}>{isNext ? 'Перейти в каталог' : 'Back'}</button>
        </div>
    )
}

export default Button;