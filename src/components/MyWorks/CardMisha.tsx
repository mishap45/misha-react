import React from 'react'
import { Card, Popover } from 'antd'
const { Meta } = Card;

type CardMishaTypes = {
    imgWork: string
    titleWork: string
    urlWork: string
}

const CardMisha:React.FC<CardMishaTypes> = ({ imgWork, titleWork, urlWork }) => {
    return (
        <Card
            hoverable
            style={{ width: 300, height: 375, marginBottom: 15 }}
            cover={<div style={{ height: 200, overflow: 'hidden' }}>
                <img alt="project" width={300} src={imgWork} />
            </div>}
        >
            <Meta title={titleWork.length > 30 ? <Popover title={titleWork}>{titleWork}</Popover> : titleWork}
                  description={<p style={{ wordBreak: 'break-word' }}>
                      <a href={urlWork} style={{ color: '#000', opacity: .6 }}
                         target={'blank'}>
                          {urlWork}
                      </a>
                  </p>}
            />
        </Card>
    )
};

export default CardMisha