import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: ()=>void  // need to fix any
    error: string // need to fix any
    setError: (error: string) => void
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, setError, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error && s.error
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.key === "Enter") {
            addUser()
        }
    }
    return (
        <div>
            <input onKeyPress={onKeyPressHandler}
                   value={name}
                   onChange={setNameCallback}
                   className={inputClass}
            />
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error&&<div className={s.errorMessage}>{error}</div>}
        </div>
    )
}

export default Greeting
