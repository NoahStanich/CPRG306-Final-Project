import Link from "next/link";

export default function PostCompObject( {postObj} ){

    let {id, dateTime, text, photoUrl} = postObj;

    return (
        <div className="bg-red-900 m-4 p-4 rounded-2xl">
            <img src="https://images.dog.ceo/breeds/terrier-patterdale/Patterdale.jpg" className="w-15 h-15 rounded-full" />
            <ul className="list-disc pl-4 mt-4">
                <li className="text-sm">{text}</li>
                <li className="text-md font-bold font-serif">{dateTime}</li>
                <Link href="/reply">Reply</Link>
            </ul>
        </div>
    );
}