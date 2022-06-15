import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const checkName = e.currentTarget.value.trim()

        if (checkName) {
            setName( e.currentTarget.value)
            setError('')
            setButtonDisabled(false)
        } else {
            setName('')
            setError('Enter name')
            setButtonDisabled(true)
        }
    }

    const addUser = () => {
        alert(`Hello  ${name}!`)
        addUserCallback(name)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter" && e.currentTarget.value !== "") {
            addUser()
            setName('')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onKeyDownHandler={onKeyDownHandler}
            error={error}
            totalUsers={totalUsers}
            disabled={buttonDisabled}
        />
    )
}

export default GreetingContainer
