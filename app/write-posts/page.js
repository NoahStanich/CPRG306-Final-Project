"use client";

import { useState } from "react";

export default function WritePostComp(){

    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        console.dir(event.target.value);
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    let inputStyles = "bg-white border-1 border-blue-600 rounded px-2 py-1 focus:bg-amber-200"

    return(
        <form className="bg-blue-300 rounded-2xl p-4" onSubmit={handleSubmit}>
            <h2 className="text-center text-2xl mb-4">Write a post!</h2>
            <div className="mb-4">
                <label className="inline-block w-40">Text</label>
                <input name="text" value={text} type="text" className={inputStyles} onChange={handleTextChange} />
            </div>
        </form>
    );
}