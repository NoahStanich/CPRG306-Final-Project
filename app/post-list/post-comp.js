import Link from "next/link";

export default function PostCompObject( {postObj} ){

    let {id, dateTime, text} = postObj;

    return (
        <div className="bg-blue-300 m-4 p-4 rounded-2xl">
            <ul className="list-disc pl-4 mt-4 text-center">
                <li className="text-sm">{text}</li>
                <li className="text-md font-bold font-serif">{dateTime}</li>
                <Link href={`/${post.id}`}>Check Replies</Link>
            </ul>
        </div>
    );
}