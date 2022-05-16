import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import s from './hw.module.css'
import {loadingAC} from "./bll/loadingReducer";


function HW10() {
    let loading = useSelector<AppStoreType, boolean>(store => store.loadingReducer.loading)
    const dispatch = useDispatch()



    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{
            dispatch(loadingAC(false))
        },2000)

        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton className={s.button} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
