export default function PostCardComp({postObj}){

    let {id, dateTime, text, photoUrl} = postObj;

    return(
        <div className="bg-blue-300 rounded-2xl p-4 mb-4 text-center sm:text-left">
            <div className="h-30 flex items-center block sm:inline-block sm:justify-start sm:align-middle">
                <img className="h-full rounded block" src={photoUrl} />
            </div>
            <div className="block sm:inline-block sm:align-middle">
                <p>Date: {dateTime}</p>
                <p>Text: {text}</p>
            </div>
        </div>
    );
}