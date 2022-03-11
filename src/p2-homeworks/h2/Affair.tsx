import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType // need to fix any
    deleteAffairCallback: any // need to fix any
}
const styleM = {
    display:'flex',
    width:'200px',
    justifyContent: "space-between"
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id:any) => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div style={styleM} key={props.affair._id}>
            <span>{props.affair.name}</span>
            <span>{props.affair.priority}</span>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair