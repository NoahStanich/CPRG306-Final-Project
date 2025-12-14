"use client"

import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";


export default function MainPage(){

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


  let navBarStyle = "mt-200 bg-gray-800 pb-5 text-center divide-x";

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return(
      <main className="p-4">
        <header className="mb-4 text-center">
            <h1 className="text-3xl font-bold">Welcome to Redsky!</h1>
        </header>
          { user ? (
            <div>
              <section>
                <button type="button" onClick={handleSignOut}>Sign Out</button>
              </section>
              <section>
                <div className={navBarStyle}>
                  <Link href="profile" className="px-4">Profile</Link>
                  <Link href="post-list" className="px-4">List of posts</Link>
                  <Link href="reply" className="px-4">Reply</Link>
                  <Link href="write-posts" className="px-4">Write a post</Link>
                </div>
              </section>
            </div>
        ) : (
          <div>
            <section>
              <div>
                <p>Welcome!</p>
              </div>
            </section>
            <section>
              <button type="button" onClick={handleSignIn}>Sign In with Github</button>
            </section>
          </div>
        )}
    </main>
  )
}