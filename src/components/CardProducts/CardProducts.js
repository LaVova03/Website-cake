import './CardProducts.css';
import Berry from '../../assets/berry.png';
import Leaf from '../../assets/leaf.png';
import { motion } from 'framer-motion';

const CardProducts = ({ hendleOpen, arrProducts, addNameCard }) => {

    const listVariants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.5,
                duration: 1,
            }
        }),
        hidden: { opacity: 0, y: -1000 }
    }

    return (
        <div>
            <div className='cards-header' > Для будь- яких подій та дорогих вам людей</div>
            <div className='products-grid'>
                <img src={Berry} alt='logo' className='berry-card' />
                <img src={Berry} alt='logo' className='berry1-card' />
                <img src={Leaf} alt='logo' className='leaf-card' />
                <img src={Leaf} alt='logo' className='leaf1-card' />
                <img src={Leaf} alt='logo' className='leaf2-card' />
                {arrProducts.map((el, i) => {
                    return (
                <motion.ul
                    variants={listVariants}
                    initial='hidden'
                    animate='visible'
                    custom={i}
                    whileHover={{
                        scale: 1.1,
                    }}
                    key={el.id} className='products-card'>
                    <li><img src={el.img} alt='logo'></img></li>
                    <li>{el.name}</li>
                    <li>{el.direction}</li>
                    <li>{el.price}</li>
                    <li className='last-li'><button className='button-card' onClick={() => { hendleOpen(); addNameCard(el.name) }}>Замовити</button></li>
                </motion.ul>
                )
                })}
            </div>
        </div>
    )
}

export default CardProducts;