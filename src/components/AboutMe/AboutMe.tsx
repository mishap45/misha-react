import React from 'react'
import Me from '../../assets/img/Me.jpg'
import { Button } from 'antd'
import 'antd/dist/antd.css'
import { FilePdfOutlined } from '@ant-design/icons'
import style from './aboutMe.module.css'
// @ts-ignore
import PDF from '../../assets/files/misha-react_cv_ua.pdf'

const AboutMe = () => {
    return (
        <div className={style.aboutMe}>
            <div>
                <img width={300} src={Me} className={style.img} alt={'me'} />
            </div>

            <div className={style.textBlock}>
                <div>
                    <p className={style.aboutMeHead}>Про мене</p>
                    <p className={style.aboutMeDesc}>Привіт, я Міша Павлов. І я React Frond-End Developer. Обожнюю front-end.
                        Він є просто неймовірно
                        монотонним і динамічним водночас, важким і неймовірно цікавим. Можливість працювати у
                        професійній команді над складними проектами — цей той кар'єрний шлях, яким я хочу йти.</p>
                </div>

                <div className={style.resumeBlock}>
                    <div>
                        <p className={style.aboutMeHead}>Контактні дані</p>
                        <p className={style.aboutMeDesc}>Міша Павлов</p>
                        <p className={style.aboutMeDesc}>(+38) 066-349-24-54</p>
                        <p className={style.aboutMeDesc}>misha.frontend@gmail.com</p>

                        <Button type="primary" shape="round" ghost icon={<FilePdfOutlined />}
                                size={"large"} className={style.resumeBtn} href={PDF} download>
                            Скачати резюме
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutMe