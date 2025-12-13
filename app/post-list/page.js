import PostCompObject from "./post-comp"

export default function PropsPage(){

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
        <h1>List of Posts</h1>
        <PostCompObject postObj={postOne}/>
        <PostCompObject postObj={postTwo}/>
    </main>
);
}