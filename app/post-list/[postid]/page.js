"use client"
import { use, useEffect, useState } from "react";
import { useUserAuth } from "../../_utils/auth-context";
import { dbAddBlogReply, dbGetBlogPostById, dbGetAllReply } from "../../_services/blog-service";
import ReplyCompObject from "./reply-comp";

export default function BlogPostPage({params}) {
    const pageParams = use(params);
    const {user} = useUserAuth();
    const [blogPost, setBlogPost] = useState({});
    
    console.log(pageParams);
    useEffect( () => {
        if (user) dbGetBlogPostById(pageParams.postid, setBlogPost);
    }, [user]);

    const [text, setText] = useState("");
    const [blogPostList, setBlogPostList] = useState([]);

    useEffect(() => {
            if (user) dbGetAllReply(pageParams.postid, setBlogPostList);
    }, [user, blogPostList]);

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
        
        dbAddBlogReply(pageParams.postid, newBlogPost);
        setText("");
        }
    }
    

    return (
        <main>
            <ReplyCompObject postObj={blogPost}/>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center">
                    <label>Contents:</label>
                    <textarea onChange={handleTextChange} value={text}></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit">Add Blog Post</button>
                </div>
            </form>
            <h1>List of Replies</h1>
            {blogPostList.map((post) => (
                <li key={post.id}>
                    <ReplyCompObject postObj={post}/>
                </li>
            ))}
        </main>
    )
}