import React, {useState} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";


function HW12() {
    const themes = useSelector<AppStoreType, Array<string>>(store => store.themeReducer.themes)
    const theme = useSelector<AppStoreType, string>(store => store.themeReducer.value)

    const [value, seValue] = useState(theme)

    const dispatch = useDispatch()


    const onChangeOption = (option: string) => {
        dispatch(changeThemeC(option))
        seValue(option)
    }


    const color = value === 'dark' ? s.dark : '' || value === 'red' ? s.red : '' || value === 'some' ? s.some : ''

    return (
        <div className={s[theme]}>

            <span className={s[theme + 'Text']}>
                <div>
                    <div className={s.title}>Theme: {value}</div>
                    <SuperRadio
                        className={color}
                        name={'radio'}
                        options={themes}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </span>

            <hr/>
        </div>
    );
}

export default HW12;