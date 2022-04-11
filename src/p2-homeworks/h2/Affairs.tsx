import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (elem: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div>

            {mappedAffairs}
            <SuperButton  className={`${s.default} ${s.all}`} onClick={setAll}>All</SuperButton>
            <SuperButton className={`${s.default} ${s.high}`} onClick={setHigh}>High</SuperButton>
            <SuperButton className={` ${s.middle} ${s.default}`}  onClick={setMiddle}>Middle</SuperButton>
            <SuperButton className={` ${s.middle} ${s.low}`} onClick={setLow}>Low</SuperButton>
        </div>
    )
}

export default Affairs