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

    return(
        <main>
            <header>
                <h1 className="text-3xl p-5 text-center">Add a new blog post!</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <label>Contents:</label>
                    <textarea onChange={handleTextChange} value={text}></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit">Add Blog Post</button>
                </div>
            </form>
        </main>
    );
}