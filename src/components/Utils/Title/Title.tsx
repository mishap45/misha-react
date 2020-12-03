import React from 'react'
import style from './title.module.css'

type TitleTypes = {
    text: string
}

const Title:React.FC<TitleTypes> = ({ text }) => <p className={style.text}>{ text }</p>;

export default Title