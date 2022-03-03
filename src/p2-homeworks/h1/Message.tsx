import React from 'react'
import s from './Message.module.css'

type MessagePropsType={
    avatar:string
    name:string
    message:string
    time:string
}
 function Message(props:MessagePropsType) {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.item__body}>
                <div>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>{props.message}</div>
                </div>
                <div className={s.time}>{props.time}</div>
                <div className={s.indicator}></div>
                <div className={s.indicator1}></div>
                <div className={s.indicator2}></div>
            </div>

        </div>
    )
}

export default Message
