import Link from "next/link";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-navy-900 to-navy-500">
            <div className="ml-20 mt-7 ">
                <div className="flex justify-center mb-0">
                    <img
                        src="https://cdn.discordapp.com/attachments/697977914402144256/1106592337204875264/editedyayah.jpg"
                        alt="PFP image"
                        className="rounded-full w-41 h-41  "
                    />
                </div>
                <div className="flex justify-center mb-0 mt-2 mr-4">
                    <a href="https://github.com/SerjeiMikailov" target="blank">
                        <img
                            src="https://cdn.discordapp.com/attachments/697977914402144256/1106596796177854565/github.PNG"
                            alt="github image"
                            className="rounded-full w-12 h-10"
                        />
                    </a>
                </div>
                <div className="flex justify-center mt-3">
                    <h1 className="text-7xl">Serjei Mikailov</h1>
                </div>
                <div className="flex justify-center mt-12">
                    <Link href="/about">
                        <button className="text-2xl border-2 border-gray-500 hover:border-gray-200">
                            <p>Read about me</p>
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center sm:mt-5 lg:mt-7">
                    <Link href="/projects">
                        <button className="text-2xl border-2 border-gray-500 hover:border-gray-200">
                            <p>My Projects</p>
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center sm:mt-5 lg:mt-7">
                    <a href="https://discord.gg/Ukd4MJBx2M" target="blank">
                        <button className="text-2xl border-2 border-gray-500 hover:border-gray-200">
                            <p>My discord</p>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
