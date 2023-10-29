import './ModalClientText.css';
import ButtonImage from '../ButtonImage/ButtonImage';

const ModalClientText = ({ modalAsk, closeModalAsk, addTextArea, textarea, addTextClient }) => {
    return (
        <div className={modalAsk ? 'modal-chef' : 'not-modal-chef'}>
            <textarea value={textarea} onChange={addTextArea} placeholder='Ваше питання...' className='textarea-chef' />
            <div className='button-modal-chef'>
                <ButtonImage isTextarea addTextClient={addTextClient}/>
                <ButtonImage isCloseModalChef closeModalAsk={closeModalAsk} />
            </div>
        </div>
    )
}

export default ModalClientText;