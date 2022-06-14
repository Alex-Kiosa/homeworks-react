import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
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

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            disabled={buttonDisabled}
        />
    )
}

export default GreetingContainer
