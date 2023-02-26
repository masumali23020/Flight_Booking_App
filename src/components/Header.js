import React, { useState } from 'react'
import double_tick from "../images/double-tick.png"
import notesImg from "../images/notes.png"
import plusImg from '../images/plus.png'

import { useDispatch } from "react-redux"
import { added, allCompleed, clearCompleed } from '../redux/todos/action'
export default function Header() {
    
    const dispatch = useDispatch()
    const [input, setInput] = useState("");

    const handelInput = (e) => {
        setInput(e.target.value)
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        dispatch(added(input))
        setInput("")
    }

    const completedAlltask = () => {
        dispatch(allCompleed())
    }
    const clearHandeler = () => {
        dispatch(clearCompleed())
    }
    
  
  return (
    <div>
    <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md" onSubmit={handelSubmit}
    >
        <img
            src={notesImg}
            className="w-6 h-6"
            alt="Add todo"
        />
        <input
            type="text"
            value={input}
            onChange={handelInput}

            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
      
            type="submit"
            className={`appearance-none w-8 h-8 bg-[url(${plusImg})] bg-no-repeat bg-contain`}
        ></button>
    </form>

    <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completedAlltask}>
            <img
                className="w-4 h-4"
                src={double_tick}
                alt="Complete"
            />
            <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandeler}>Clear completed</li>
    </ul>
</div>
  )
}