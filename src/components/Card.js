import React from 'react'
import edit from '../assets/edit.svg'
import remove from '../assets/delete.svg'
import './Card.css'

export default function Card(props) {
    return (
        <article>
            <header>
                <div className="dragon-info">
                    <span>{props.dragon.name}</span>
                    <span className="type">{props.dragon.type}</span>
                </div>
                <div className="avatar">{props.dragon.name[0]}</div>
            </header>
            <footer>
                <div className="actions">
                    <button type="button" onClick={() => props.update(props.dragon.id)}>
                        <img src={edit} alt="edit" width="25px" height="25px"/>
                    </button>
                    <button type="button" onClick={() => props.delete(props.dragon.id)}>
                        <img src={remove} alt="delete" width="25px" height="25px"/>
                    </button>
                </div>
            </footer>
        </article>
    )
}
