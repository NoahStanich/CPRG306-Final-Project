export default function Profile(){
    return(
        <main>
            <header className="mt-4 mb-4">
                <h1 className="text-3xl text-center font-bold">Profile</h1>
            </header>
            <section className="flex justify-center">
              <div>
                <img src="https://images.dog.ceo/breeds/terrier-patterdale/Patterdale.jpg" className="w-50 h-50 rounded-full" />
              </div>
            </section>
            <section>
              <div>
                <ul className="text-center mt-10 flex-col">
                  <li>Username: </li>
                  <li className="py-5">Email: </li>
                </ul>
              </div>
            </section>5
        </main>
    )
}