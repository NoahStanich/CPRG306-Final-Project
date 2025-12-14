"use client"

import PostCompObject from "./post-comp"
import { useUserAuth } from "../_utils/auth-context";
import { useEffect, useState } from "react";
import { dbGetAllBlogPosts } from "../_services/blog-service";
import Link from "next/link";



export default function PropsPage(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const [blogPostList, setBlogPostList] = useState([]);

    function handleBlogChange(input){
        setBlogPostList(input)
    }

    useEffect(() => {
        if (user) dbGetAllBlogPosts(user.uid, handleBlogChange);
    }, [user]);
    console.log(blogPostList);

    

    /*
    let postOne = {
    id: 1,
    uid: null,
    dateTime: "December 14 10:00 AM",
    text: "This is a post.",
    photoUrl: ""
    }

    let postTwo = {
    id: 2,
    uid: null,
    dateTime: "December 14 11:00 AM",
    text: "This is also a post.",
    photoUrl: ""
    }
    */

return (
    <main>
    { user ? (
        <div>
            <h1>List of Posts</h1>
            {blogPostList.map((post) => (
                <li key={post.id}>
                    <Link href={`/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </div>
    ) : (
        <div>
            <p>You must be signed in to use this page!</p>
        </div>
    )}
    </main>

);
}