export default function PostCompObject( {postObj} ){

    let {id, dateTime, text, photoUrl} = postObj;

    return (
        <div className="bg-blue-300 m-4 p-4 rounded-2xl">
            <img src={photoUrl} alt="image"></img>
            <ul className="list-disc pl-4 mt-4 text-center">
                <li className="text-md font-bold font-serif">{dateTime}</li>
                <li className="text-sm">{text}</li>
            </ul>
        </div>
    );
}