import React, {useEffect, useRef, useState} from 'react';
import card1left from '../img/card-1-left.png'
import card1right from '../img/card-1-right.png'
import card2left from '../img/card-2-left.png'
import card2right from '../img/card-2-right.png'
import card3left from '../img/card-3-left.png'
import card3right from '../img/card-3-right.png'
import scoreNull from '../img/score-null.png'

export const Card = (
    {state}) => {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('2021-12-14 18:20').getTime()

        interval = setInterval(() => {
            const now = new Date();
            const distance = countdownDate - now;

            const hours = Math.floor(distance / (1000 * 60 * 60));
            const minutes = Math.floor((distance / (1000 * 60) % 60));
            const seconds = Math.floor(distance / 1000 % 60);

            if (distance < 0) {
                clearInterval(interval.current)
            } else {
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }

        }, 1000)
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })


    switch (state){
        case 'ended':
            return (
                <div className="card card-ended">
                    <div className="card__inner">
                        <div className="card__title">1-й тур | Тинькофф РПЛ</div>
                        <div className="team__box">
                            <div className="team__box-left">
                                <img src={card1left} alt=""/>
                                <div className="team__box-text">урал</div>
                            </div>
                            <div className="team__box-score">2 : 1</div>
                            <div className="team__box-right">
                                <img src={card1right} alt=""/>
                                <div className="team__box-text">сочи</div>
                            </div>
                        </div>
                        <div className="info__box">
                            <div className="info__box-text">
                                <div className="info__box-date">3 июля, 19:00</div>
                                <div className="info__box-place">Екатеренбург Арена</div>
                            </div>
                            <button className="info__box-btn" onClick={() => alert('Нажата левая кнопка')}></button>
                        </div>
                    </div>
                </div>
            )
        case 'active':
            return (
                <div className="card card-active">
                    <div className="card__inner">
                        <div className="card__title">1-й тур | Тинькофф РПЛ</div>
                        <div className="team__box">
                            <div className="team__box-left">
                                <img src={card2left} alt=""/>
                                <div className="team__box-text">Спартак</div>
                            </div>
                            <div className="team__box-timer">{('0'+timerHours).slice(-2)} : {('0'+timerMinutes).slice(-2)} : {('0'+timerSeconds).slice(-2)}</div>
                            <div className="team__box-right">
                                <img src={card2right} alt=""/>
                                <div className="team__box-text">Локомотив</div>
                            </div>
                        </div>
                        <div className="info__box">
                            <div className="info__box-text">
                                <div className="info__box-date">19 июля, 19:00</div>
                                <div className="info__box-place">Открытие Банк Арена</div>
                            </div>
                            <div className="info__box-bids">
                                <button className="info__box-bid bid-red" onClick={() => alert("Коэффициент ставки")}>3.81<span>П1</span></button>
                                <button className="info__box-bid" onClick={() => alert("Коэффициент ставки")}>3.82<span>Х</span></button>
                                <button className="info__box-bid bid-green" onClick={() => alert("Коэффициент ставки")}>3.83<span>П2</span></button>
                            </div>
                            <button className="info__box-buyticket" onClick={() => alert('Купить билет')}><span className="buy">Купить</span> <span className="ticket">билет</span></button>
                        </div>
                        <div className="info__box-bids bids__adap">
                            <button className="info__box-bid bid-red" onClick={() => alert("Коэффициент ставки")}>3.81<span>П1</span></button>
                            <button className="info__box-bid" onClick={() => alert("Коэффициент ставки")}>3.82<span>Х</span></button>
                            <button className="info__box-bid bid-green" onClick={() => alert("Коэффициент ставки")}>3.83<span>П2</span></button>
                        </div>
                        <button className="card__broadcast-btn" onClick={() => alert('Смотреть трансляцию')}>смотреть трансляцию матча</button>
                    </div>
                </div>
            )
        case 'waiting':
            return (
                <div className="card card-waiting">
                    <div className="card__inner">
                        <div className="card__title">1-й тур | Тинькофф РПЛ</div>
                        <div className="team__box">
                            <div className="team__box-left">
                                <img src={card3left} alt=""/>
                                <div className="team__box-text">цска</div>
                            </div>
                            <img src={scoreNull} className="team__box-score__null"></img>
                            <div className="team__box-right">
                                <img src={card3right} alt=""/>
                                <div className="team__box-text">Динамо</div>
                            </div>
                        </div>
                        <div className="info__box">
                            <div className="info__box-text">
                                <div className="info__box-date">24 июля, 19:00</div>
                                <div className="info__box-place">ВЭБАрена</div>
                            </div>
                            <button className="info__box-buyticket" onClick={() => alert('Купить билет')}></button>
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div>Не указано состояние блока</div>
            )
    }
};
