import Link from "next/link";

export default function MainPage(){

  let navBarStyle = "mt-200 bg-gray-800 pb-5 text-center divide-x";

    return(
        <main className="p-4">
            <header className="mb-4 text-center">
                <h1 className="text-3xl font-bold">Welcome to Redsky!</h1>
            </header>
            <section>
              <div className={navBarStyle}>
                <Link href="profile" className="px-4">Profile</Link>
                <Link href="post-list" className="px-4">List of posts</Link>
                <Link href="reply" className="px-4">Reply</Link>
                <Link href="write-posts" className="px-4">Write a post</Link>
              </div>
            </section>
        </main>
    )
}