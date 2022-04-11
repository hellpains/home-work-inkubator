import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    const styleAffairs={
        width:'250px',
        display:'flex',
        justifyContent:'space-between'
    }



    return (
        <div style={styleAffairs}>
           <span className={s.nameTask}>{props.affair.name}</span>
           <span className={`${props.affair.priority==='high'?s.highColor:''} ${props.affair.priority==='middle'?s.middleColo:'' } ${props.affair.priority==='low'?s.lowColor:''}`}>[{props.affair.priority}]</span>

            <SuperButton className={`${s.default} ${s.remove}`} onClick={deleteCallback}>x</SuperButton>
        </div>
    )
}

export default Affair