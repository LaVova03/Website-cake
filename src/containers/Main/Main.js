import './Main.css';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Raspberries from '../../assets/berry.png';
import Leaf from '../../assets/leaf.png';
import MainCard from '../../components/MainCard/MainCard';



function Main() {

  const [buttonNext, setButtonNext] = useState(false);

  const navigate = useNavigate();

  const setNext = () => {
    setButtonNext(prevState => ({
      ...prevState,
      next: !prevState.next,
    }));
    navigate("/products");
  }

  return (
    <div className="Main">
      <img src={Raspberries} alt='logo' id='first-barry' />
      <img src={Raspberries} alt='logo' id='second-barry' />
      <img src={Raspberries} alt='logo' id='third-barry' />
      <img src={Leaf} alt='logo' id='leaf' />
      <div className='over-main'>
        <MainCard />
        <div className='main-button'>
          <Button isNext setNext={setNext} />
          <div className='button-next-float'>9 различных <br />видов на выбор</div>
        </div>
      </div >
    </div>
  );
}

export default Main;
