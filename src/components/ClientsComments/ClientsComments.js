import './ClientsComments.css';
import React, { useState } from 'react';
import Girl from '../../assets/girl.png';
import Girl1 from '../../assets/girl1.jpg';
import Girl2 from '../../assets/girl2.jpg';
import Berry from '../../assets/berry1.png';
import Leaf from '../../assets/leaf.png';
import Transit2 from '../../assets/transit2.png';


const ClientsComments = () => {

    const [comments, setComments] = useState({
        first: true,
        second: false,
        third: false,
        next: true,
        before: false,
    })

    const handleClickNext = () => {
        setComments(prevComments => {
            if (prevComments.first) {
                return {
                    ...prevComments,
                    first: false,
                    second: true,
                    before: true,
                };
            }
            if (prevComments.second) {
                return {
                    ...prevComments,
                    second: false,
                    third: true,
                    before: true,
                    next: false,
                };
            }
            return prevComments;
        });
    };

    const handleClickBefore = () => {
        setComments(prevComments => {
            if (prevComments.first) {
                return {
                    ...prevComments,
                    before: false,
                };
            }
            if (prevComments.second) {
                return {
                    ...prevComments,
                    second: false,
                    first: true,
                    before: false,
                };
            }
            if (prevComments.third) {
                return {
                    ...prevComments,
                    third: false,
                    second: true,
                    before: true,
                    next: true,
                };
            }
            return prevComments;
        });
    };

    return (
        <div className='box-com'>
            <div className='comments-header'>Почитайте відгуки задоволених клієнтів</div>
            <div className={comments.first ? 'first-com' : 'not-first-com'}>
                <img src={Leaf} alt='logo' className='leaf-com' />
                <img src={Berry} alt='logo' className='berry-com' />
                <div className='wrap-com'>
                    <div className='text-comment'>
                        <h3>"Результат дико порадував, друзі були в захваті"</h3>
                        <h5>«Замовила капкейки як подарунок на новий рік. Робити замовлення було легко і приємно, а результат дико порадував, друзі були в захваті. І оформлення, і на смак капкейки були чудові. Обов'язково замовлятиму ще)) Вже будую плани, щоб спробувати всі начинки. Вони чудові!) Навіть їсти було шкода, така краса!)</h5>
                    </div>
                    <div className='photo-user'>
                        <img className='photo-to-comment' src={Girl} alt='logo' />
                        <h5>Ірина Ларіонівна<br />м. Харків</h5>
                    </div>
                </div>
            </div>
            <div className={comments.second ? 'second-com' : 'not-second-com'} >
                <img src={Leaf} alt='logo' className='leaf-com' />
                <img src={Berry} alt='logo' className='berry-com' />
                <div className='wrap-com'>
                    <div className='text-comment'>
                        <h3>"Все дуже смачно, навіть хотілося ще)"</h3>
                        <h5>«Замовила капкейки як подарунок на новий рік. Робити замовлення було легко і приємно, а результат дико порадував, друзі були в захваті. І оформлення, і на смак капкейки були чудові. Обов'язково замовлятиму ще)) Вже будую плани, щоб спробувати всі начинки. Вони чудові!) Навіть їсти було шкода, така краса!)</h5>
                    </div>
                    <div className='photo-user'>
                        <img className='photo-to-comment' src={Girl1} alt='logo' />
                        <h5>Наталья Степанова<br />м. Харків</h5>
                    </div>
                </div>
            </div>
            <div className={comments.third ? 'third-com' : 'not-third-com'} >
                <img src={Leaf} alt='logo' className='leaf-com' />
                <img src={Berry} alt='logo' className='berry-com' />
                <div className='wrap-com'>
                    <div className='text-comment'>
                        <h3>"Результат бомбезний, родина була вражена"</h3>
                        <h5>«Замовила капкейки як подарунок на новий рік. Робити замовлення було легко і приємно, а результат дико порадував, друзі були в захваті. І оформлення, і на смак капкейки були чудові. Обов'язково замовлятиму ще)) Вже будую плани, щоб спробувати всі начинки. Вони чудові!) Навіть їсти було шкода, така краса!)</h5>
                    </div>
                    <div className='photo-user'>
                        <img className='photo-to-comment' src={Girl2} alt='logo' />
                        <h5>Аліна Версаль<br />м. Харків</h5>
                    </div>
                </div>
            </div>
            <div className='buttons-com'>
                <button className={comments.next ? 'com-next' : 'not-com-next'} onClick={handleClickNext}>Next</button>
                <button className={comments.before ? 'com-before' : 'not-com-before'} onClick={handleClickBefore}>Before</button>
            </div>
            <img src={Transit2} alt='logo' className='transit2-com'/>
        </div >
    )
}

export default ClientsComments;