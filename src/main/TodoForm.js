import React from 'react';
import send_icon from './send.svg'

export default function TodoForm( { addTodoTXT }) {
    let [word, setWord] = React.useState('')


    return (
        <form className='todoForm' onSubmit={(e) => addTodoTXT(e, word, setWord)}>
            <input value={word} type="text" placeholder="What needs to do done?" onChange={(e) => setWord(e.target.value)}/>
            <button className='save__button'><img src={send_icon} width='25' height='25' alt="" /></button>
        </form>
    )
}