import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id:number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    const styleAffairs={
        width:'200px',
        display:'flex',
        justifyContent:'space-between'
    }
    return (
        <div style={styleAffairs}>
           <span>{props.affair.name}</span>
           <span>{props.affair.priority}</span>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair