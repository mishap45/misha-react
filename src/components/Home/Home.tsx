import React from 'react'
import style from './home.module.css'
import IconBlock from '../Utils/IconBlock/IconBlock'
import ReactPlayer from 'react-player'

const Home = () => {
    return (
        <>
            <div className={style.home}>
                <div>
                    <div>
                        <p className={style.name}>Міша Павлов <br/> React Frond-End Developer</p>
                    </div>

                    <IconBlock />
                </div>
            </div>
            <div>
                <ReactPlayer
                    url="https://youtu.be/hgffNxVQatg"
                    playing
                    muted
                    loop
                    volume={0}
                    width = "100%"
                    height = "650px"
                />
            </div>
            </>
    )
};

export default Home