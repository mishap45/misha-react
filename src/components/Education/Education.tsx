import React from 'react'
import style from './education.module.css'
import Title from '../Utils/Title/Title'

const Education = () => {
    return (
        <div className={style.education}>
            <div className={style.first}>
                <Title text={'Освіта'} />
            </div>

            <div className={style.second}>
                <div>
                    <p className={style.head}>Інженерія програмного забезпечення, ГКТНТУ</p>
                    <p className={style.desc}><u>2016 2020, бакалавр, червоний диплом</u></p>
                    <p className={style.desc}>
                        Мови програмування: C++, C#, Pascal, Python, PHP, JavaScript, Java, SQL, HTML, CSS.
                        <br/>
                        Дискретна математика, алгоритми і структури даних, ООП, теорія ймовірності, математична
                        статистика, математичний аналіз, лінійна алгебра
                        <br/>
                        UX/UI дизайн: Figma & Adobe XD
                    </p>
                </div>

                <div>
                    <p className={style.head}>Курс по React JS </p>
                    <p className={style.desc}><u>2019 2020, реакт-самурай</u></p>
                    <p className={style.desc}>
                        Навчився: створювати реакт-додатки, працювати з компонентами, CSS модулі, маршрутизація
                        (React-Router), використовувати props, Redux, Flux React, контейнерні компоненти і React-Hooks,
                        Context React, Rest API, HOC.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Education