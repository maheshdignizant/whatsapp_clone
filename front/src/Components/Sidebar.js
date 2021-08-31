import { DotsVerticalIcon, EmojiHappyIcon, SearchIcon, UploadIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import axios from '../axios'

const Sidebar = () => {
    const [input, setInput] = useState('')

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     await axios.post("/message/new", {
    //         message : input,
    //         name: "mack",
    //         timestamp : "....",
    //         received : true
    //     })

    //     setInput('')
    // }

    return (
        <div className="container-fluid w-full h-full">
            <div className="h-24 bg-green-100 flex items-center">
                <div className="p-4">
                    <img class="h-14 w-14 rounded-full" src="/IMG_5986.jpg" alt="AAA" />
                </div>
                <div className="flex-1 p-3 block">
                    <h2 className="font-bold text-xl">Hello Friends</h2>
                    <h2 className="text-sm">Last senn</h2>
                    <h2 className="text-sm ">GMT</h2>
                </div>
                <div className="p-1 flex">
                    <SearchIcon className="h-10 mx-3" />
                    <UploadIcon className="h-10 mx-3" />
                    <DotsVerticalIcon className="h-10 mx-3 mr-4" />
                </div>
            </div>
            <div className="bg-gray-200 w-full  overflow-scroll " style={{ height: "80vh" }}>
                    <div className=" pl-3 m-3">
                        <h1 className="pl-3 text-sm">name</h1>
                        <p className="text-xl position-relative p-3 mt-1 bg-gray-50 rounded-full" style={{ width: "fit-content" }}>
                            hello
                            <span className="ml-3 text-sm">
                                timeStamp
                            </span>
                        </p>
                    </div>
            </div>
            <div className="mt-3 bg-gray-400 flex">
                <div className=" p-3 flex items-center">
                    <EmojiHappyIcon className="h-8" />
                    <form>
                        <input className="rounded-full w-96 bg-gray-100 mx-3 p-2 outline-none "
                            type="text"
                            placeholder="Search or start new chat"
                            style={{ width: "900px" }}
                            onChange={e => setInput(e.target.value)} />
                        <button className="hidden" type="submit" >
                            handleSubmit
                        </button>
                    </form>
                    <MicrophoneIcon className="h-8 flex-end" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
