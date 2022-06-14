import React, {ChangeEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onKeyDownHandler: KeyboardEventHandler<HTMLInputElement>
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
            <span>Users count - {totalUsers}</span>
        </div>
    )
}

export default Greeting
