"use client";

import PostCardComp from "./post-card";

export default function PostListComp(){
    return(
        <section className="p-6">
                <h1>List of Posts</h1>
            <div>
                <PostCardComp key={post.id} postObj={post}/>
            </div>
        </section>
    );
}