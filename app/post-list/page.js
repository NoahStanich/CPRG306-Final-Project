"use client"

import PostCompObject from "./post-comp"
import { useUserAuth } from "../_utils/auth-context";

export default function PropsPage(){

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();



    let postOne = {
    id: 1,
    dateTime: "December 14 10:00 AM",
    text: "This is a post.",
    photoUrl: ""
    }

    let postTwo = {
    id: 2,
    dateTime: "December 14 11:00 AM",
    text: "This is also a post.",
    photoUrl: ""
    }

return (
    <main>
    { user ? (
        <div>
            <h1>List of Posts</h1>
            <PostCompObject postObj={postOne}/>
            <PostCompObject postObj={postTwo}/>
        </div>
    ) : (
        <div>
            <p>You must be signed in to use this page!</p>
        </div>
    )}
    </main>

);
}