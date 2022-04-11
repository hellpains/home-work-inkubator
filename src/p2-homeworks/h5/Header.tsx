import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './hm.module.css'

function Header() {
    return (
        <div className={s.slide_container}>
            <div className={s.slide}>
                <NavLink to={'/'}>main </NavLink>
                <NavLink to={'/junior'}> junior </NavLink>
                <NavLink to={'/junior_plus'}> junior+</NavLink>
                <div className={s.block}></div>
            </div>
        </div>
    )
}

export default Header
