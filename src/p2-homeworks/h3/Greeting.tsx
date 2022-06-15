import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onKeyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
    disabled: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onKeyDownHandler, error, totalUsers, disabled} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.sucses

    return (
        <div className={s.wrap}>
            <input value={name} onChange={setNameCallback} onKeyDown={onKeyDownHandler} className={inputClass}/>
            <span className={s.errorMessage}>{error}</span>
            <button onClick={addUser} disabled={disabled}>add</button>
            <span>Count of users - {totalUsers}</span>
        </div>
    )
}

export default Greeting