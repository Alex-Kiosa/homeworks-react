import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: any) => void // need to fix any
    addUser: () => void // need to fix any
    error: string
    totalUsers: any // need to fix any
    disabled: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, disabled} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.sucses

    /*const inputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") console.log(1)
    }*/

    return (
        <div className={s.wrap}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={s.errorMessage}>{error}</span>
            <button onClick={addUser} disabled={disabled}>add</button>
            <span>Количество юзеров - {totalUsers}</span>
        </div>
    )
}

export default Greeting
