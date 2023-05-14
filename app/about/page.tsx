import Link from "next/link";

export default function About() {
    return (
        <>
            <div className="flex justify-center mt-8 mb-4">
                <h1 className="text-7xl">About me</h1>
            </div>

            <div className="flex justify-center">
                <h3>(Boring text below)</h3>
            </div>

            <div className="flex justify-start ml-20 mt-24">
                <div>
                    <h4 className="font-bold mb-4 mr-24">
                        Let's talk about me with some asks
                    </h4>

                    <li>I'm human?</li>
                    <li>Why my nickname is Serjei Mikailov?</li>
                    <li>My objectives?</li>

                    <p className="mt-4 w-10/12">
                        Off course I'm human (i think...) My nickname is Serjei
                        Mikailov inspired by a russian mobster, for no
                        particular reason. I'm very attracted to study Computer
                        Enginnering, hardware and low level programming. I'm a
                        descentralized systems enjoyer and intending to live in
                        USA or some european east country, maybe Poland. About
                        hobbies i like to play competitive games as LOL, CSGO,
                        and survival games as ARK and RUST, i also like
                        philosophy and economy. Currently i'm studying Rust, C++
                        and a little bit about OpenGL. And yes, i'm studying
                        English, so i don't speak fluently as you see...
                    </p>
                </div>
            </div>

            <div className="flex justify-start ml-20 mt-10">
                <div className="mr-5">
                    <h4 className="mb-3 font-bold">
                        My steam if you want to add me
                    </h4>

                    <img
                        src="https://cdn.discordapp.com/attachments/697977914402144256/1106999183027753011/image.png"
                        alt="steam image"
                        className="mb-5"
                    />
                    <a
                        href="https://steamcommunity.com/id/serjeimikailov/"
                        className="mt-8 underline"
                        target="blank"
                    >
                        <p className="text-white transition-colors hover:text-blue-200">
                            My steam profile
                        </p>
                    </a>
                </div>
            </div>

            <div className="flex justify-start ml-20 mt-8 mb-5">
                <div>
                    <Link href="/">
                        <button className="text-2xl rounded-full bg-blue-500 text-white px-4 py-2 hover:border-gray-200">
                            <p>Back to main page</p>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
