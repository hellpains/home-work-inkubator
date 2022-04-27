import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'


export type UserType ={
    _id:number
    name:string
    age:number
}


const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]


function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    let [up,setUp]=useState(false)
    let [down,setDown]=useState(false)
    let [check,setCheck]=useState(false)

    const finalPeople = people.map((p: any) => (
        <div key={p._id } className={s.divFlexMap}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, sortAC('up')))
        setUp(true)
        setDown(false)
        setCheck(false)

    }
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, sortAC('down')))
        setDown(true)
        setCheck(false)
        setUp(false)
    }
    const check18 = () => {
        setPeople(homeWorkReducer(initialPeople, checkAC(18)))
        setCheck(true)
        setUp(false)
        setDown(false)
    }

    const activeClassName = (params: any) => params.isActive ? s.active : '';
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div className={s.divFlexButton}>
                <div><SuperButton className={ `${s.default} ${s.sortUp} ${up?s.active:''}`} onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton className={`${s.default} ${s.sortDown}  ${down?s.active:''}` }  onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton className={`${s.default} ${s.check18}  ${check?s.active:''}` }  onClick={check18}>check 18</SuperButton></div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
