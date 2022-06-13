import React from 'react'
import style from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: {_id: number, name: string, priority: string}
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div className={style.affair}>
            <span className={style.affairTitle}>{props.affair.name}</span>
            <button className={style.affairButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
