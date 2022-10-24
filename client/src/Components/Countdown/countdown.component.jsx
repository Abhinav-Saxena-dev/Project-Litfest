import React,{ useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import './countdown.style.scss';

const CountDown = ({targetDate}) =>{

    const {year, month, date} = targetDate

    const [countDown, setCountDown] = useState(new Date(year, month, date).getTime() - new Date().getTime());

    useEffect(() => {
        const event = new Date(year, month, date).getTime();
        const now = new Date().getTime();

        const timer = setInterval(() => {
            setCountDown(event - now)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [countDown])

    const getCount = (countDown) => {
        let s= Math.floor(countDown/1000);
        let m= Math.floor(s/60);
        let h= Math.floor(m/60);
        let d= Math.floor(h/24);
    
        h%= 24;
        m%= 60;
        s%= 60;

        if(d + h + m + s <= 0){
            return {h : 0, m : 0, s : 0, d : 0}
        }
        return {h, m, s, d}
    }

    const {d, h, m, s} = getCount(countDown);
        return (
        <div className='countdown-container'>
            <div className="info">
            <span class="material-symbols-outlined text">
                event
            </span>
            {
                d + h + m + s > 0 ?
                <span className='info-text'>Registrations will end in</span>
                :
                <span className='info-text'>Registrations have ended</span>
            }
            </div>
            <div className="countdown">
               <div className="count">
                <div className="heading">DAYS</div>
                <div className="value">
                <AnimatePresence>
                    <motion.h1
                        key={d}
                        exit={{ y: 75, opacity: 0, position: "absolute" }}
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1}}
                        transition={{
                            ease: "easeOut",
                            duration: 1,
                        }}
                    >
                        {d < 10 ? '0' + d : d}
                    </motion.h1>
                </AnimatePresence>
                </div>
               </div>
               <div className="count">
                <div className="heading">HOURS</div>
                <div className="value">
                <AnimatePresence>
                    <motion.h1
                        key={h}
                        exit={{ y: 75, opacity: 0, position: "absolute" }}
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1}}
                        transition={{
                            ease: "easeOut",
                            duration: 1,
                        }}
                    >
                        {h < 10 ? '0' + h : h}
                    </motion.h1>
                </AnimatePresence>
                </div>
               </div>
               <div className="count">
                <div className="heading">MINUTES</div>
                <div className="value">
                <AnimatePresence>
                    <motion.h1
                        key={m}
                        exit={{ y: 75, opacity: 0, position: "absolute" }}
                        initial={{ y: -150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1}}
                        transition={{
                            ease: "easeOut",
                            duration: 1,
                        }}
                    >
                        {m < 10 ? '0' + m : m}
                    </motion.h1>
                </AnimatePresence>
                </div>
               </div>
               <div className="count">
                <div className="heading">SECONDS</div>
                <div className="value">
                <AnimatePresence>
                    <motion.h1
                        key={s}
                        exit={{ y: 75, opacity: 0, position: "absolute" }}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1}}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                        }}
                    >
                        {s < 10 ? '0' + s : s}
                    </motion.h1>
                </AnimatePresence>
                </div>
               </div>
            </div>
        </div>
    );
}

export default CountDown;