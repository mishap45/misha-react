import React from 'react'
import style from './footer.module.css'
import IconBlock from '../Utils/IconBlock/IconBlock'

const Footer = () => {
    return (
        <div className={style.footer}>
            <IconBlock />

            <div className={style.headBlock}>
                <p className={style.head}>Міша Павлов  • React Frond-End Developer • #ReactSumurai</p>
            </div>
        </div>
    )
};

export default Footer