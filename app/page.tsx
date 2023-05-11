import Link from "next/link";

export default function Home() {
    return (
        <div className="bg-gradient-to-b from-navy-900 to-navy-500">
            <div className="ml-20 mt-7 ">
                <h1 className="text-7xl flex justify-center sm:mt-20 lg:mt-27">SerjRoom</h1>

                <div className="flex justify-center sm:mt-20 lg:mt-27">
                    <Link href="/about">
                        <button className="text-2xl border-2 border-gray-500 hover:border-gray-200">
                            <p>Read about me</p>
                        </button>
                    </Link>
                </div>

                <div className="flex justify-center sm:mt-5 lg:mt-7">
                    <Link href="/works">
                        <button className="text-2xl border-2 border-gray-500 hover:border-gray-200">
                            <p>My Workshop</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
