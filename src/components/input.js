
import './input.css'
import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'
const Input = () => {
    const [input, setInput] = useState(' ')
    const dispatch = useDispatch()

    const addToDo = () => {
        console.log(`Adding ${input}`)
        if (input != "") {
            dispatch(saveTodo({
                item: input,
                done: false,
                id: Date.now()
            }))
        }
        setInput("");
    }

    return (
        <div className='input'>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addToDo}>Add</button>
        </div>
    )
}
export default Input;