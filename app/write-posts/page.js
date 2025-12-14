"use client";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context"
import { dbAddBlogPost } from "../_services/blog-service";

export default function WritePostComp(){

    const {user} = useUserAuth();
    const [text, setText] = useState("");

    const handleTextChange = (event) => {
        console.dir(event.target.value);
        setText(event.target.value);
    }

        function handleSubmit(event) {
        if (user != null) {
            event.preventDefault();
            const now = new Date();
            let newBlogPost = {
                uid: user.uid, 
                text: text,
                dateTime: now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
            }
            
            dbAddBlogPost(newBlogPost);
            setText("");
        }

    }

    let inputStyles = "bg-white border-1 border-blue-600 rounded px-2 py-1 focus:bg-amber-200"

    return(
        <main>
            <header>
                <h1>Add a new blog post!</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Contents:</label>
                    <textarea onChange={handleTextChange} value={text}></textarea>
                </div>
                <div>
                    <button type="submit">Add Blog Post</button>
                </div>
            </form>
        </main>
    );
}