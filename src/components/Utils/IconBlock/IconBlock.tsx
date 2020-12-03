import React from 'react'
import style from './iconBlock.module.css'
import { GithubOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'

const IconBlock = () => {
    return (
        <div className={style.iconBlock}>
            <a href="https://github.com/mishap45" target="blank">
                <GithubOutlined className={style.icon} />
            </a>

            <a href="https://www.instagram.com/mishap45/" target="blank">
                <InstagramOutlined className={style.icon} />
            </a>

            <a href="https://www.linkedin.com/in/misha-pavlov-2564241b9/" target="blank">
                <LinkedinOutlined className={style.icon} />
            </a>
        </div>
    )
};

export default IconBlock