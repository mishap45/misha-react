import React from 'react'
import style from './skils.module.css'
import Title from '../Utils/Title/Title'
import { Button } from 'antd'

const Skills = () => {

    const skills1 = ['HTML5', 'CSS3', 'JavaScript'];
    const skills2 = ['React JS', 'React Native', 'Redux', 'TypeScript', 'JQuery', 'GIT'];
    const skills3 = ['Figma', 'Photoshop', 'Adobe XD'];

    return (
        <div className={style.skills}>
            <div className={style.first}>
                <Title text={'Вміння'} />
            </div>

            <div className={style.second}>
                <div>
                    {skills1.map((s, i) => <Button key={i}
                                                   style={{ margin: 15, backgroundColor: '#7e57c2', borderColor: '#7e57c2' }}
                                                   type="primary" size={'large'} danger>{s}</Button>)}
                </div>

                <div>
                    {skills2.map((s, i) => <Button key={i}
                                                   style={{ margin: 15, backgroundColor: '#7e57c2', borderColor: '#7e57c2' }}
                                                   type="primary" size={'large'} danger>{s}</Button>)}
                </div>

                <div>
                    {skills3.map((s, i) => <Button key={i}
                                                   style={{ margin: 15, backgroundColor: '#7e57c2', borderColor: '#7e57c2' }}
                                                   type="primary" size={'large'} danger>{s}</Button>)}
                </div>
            </div>
        </div>
    )
};

export default Skills