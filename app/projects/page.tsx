import React from "react";
import Link from "next/link";

export default function Works() {
    return (
        <>
            <div className="flex justify-center mt-8 mb-4">
                <h1 className="text-7xl">Projects</h1>
            </div>

            <div className="flex justify-center">
                <h3>Only personal projects</h3>
            </div>

            <div className="flex justify-start mb-10">
                <div className="ml-20 rounded border border-white border-r-2 border-r-1/4 p-4">
                    <h4 className="font-bold text-2xl">Soph bot</h4>

                    <p className="mb-2 mt-1">
                        My personal discord bot, configured to meet the needs of
                        my server
                    </p>
                    <img
                        src="https://cdn.discordapp.com/attachments/697977914402144256/1106618192119472189/soph.PNG"
                        alt="soph image"
                        className="mb-1"
                    />
                    <a
                        href="https://github.com/SerjeiMikailov/soph_bot"
                        className="mt-8"
                        target="blank"
                    >
                        <p className="text-white transition-colors hover:text-blue-200">
                            Github Repository
                        </p>
                    </a>
                </div>
            </div>
            {/*
            <div className="flex justify-start mb-10 mr-3">
                <div className="ml-20 rounded border border-white border-r-2 border-r-1/4 p-4">
                    <h4 className="font-bold text-2xl">GPT Fanfic machine</h4>
                    <p className="mb-2 mt-1">
                        Chat GPT Api test but with voice commands
                    </p>
                    <img
                        src="https://cdn.discordapp.com/attachments/1099395583585816746/1099395627055595574/image.png"
                        alt="soph image"
                        className="mb-1"
                    />
                    <a
                        href="https://github.com/SerjeiMikailov/gPT"
                        className="mt-8"
                        target="blank"
                    >
                        <p className="text-white transition-colors hover:text-blue-200">
                            Github Repository
                        </p>
                    </a>
                </div>
            </div>

            <div className="flex justify-start items-start mt-10 mb-10">
                <div className="ml-20 rounded border border-white border-r-2 border-r-1/4 p-4">
                    <h4 className="font-bold text-2xl">IMC Calculator</h4>
                    <p className="mb-2 mt-1">
                        IMC Calculator website (Currently outdated)
                    </p>
                    <img
                        src="https://cdn.discordapp.com/attachments/697977914402144256/1106628833739804712/image.png"
                        alt="soph image"
                        className="mb-1"
                    />
                    <a
                        href="https://github.com/SerjeiMikailov/calc-imc"
                        className="mt-8"
                        target="blank"
                    >
                        <p className="text-white transition-colors hover:text-blue-200">
                            Github Repository
                        </p>
                    </a>
                </div>
            </div>
            */}
            <div className="flex justify-start">
                <div className="ml-20">
                    <h2 className="text-4xl mb-2">More coming soon...</h2>
                    <p>(to view my other projects go to my github)</p>
                </div>
            </div>
            <div>
                <div className="flex justify-start mt-7 mb-5">
                    <div className="ml-20">
                        <Link href="/">
                            <button className="text-2xl rounded-full bg-blue-500 text-white px-4 py-2 hover:border-gray-200">
                                <p>Back to main page</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
