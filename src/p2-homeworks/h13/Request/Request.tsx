import React, {ChangeEvent, useEffect, useState} from 'react';
import s from '../hw13.module.css'
import axios from "axios";
import {Simulate} from "react-dom/test-utils";

export const Request = () => {
    let [count, setCount] = useState(1)
    let [check, setCheck] = useState(false)

    useEffect(() => {
        axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: check})
            .then(res => res.data)
            .catch((error) => {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message)
            })
    },[check])

    const onInput = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
    }

    return (
        <div>
            <button className={s.button} onClick={() => {
                setCount(count + 1)
            }}>button
            </button>
            <input type="checkbox" onChange={onInput}/>
        </div>
    );
};
