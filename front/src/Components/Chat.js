import React from 'react'
import { AnnotationIcon, DotsCircleHorizontalIcon, DotsVerticalIcon, SearchIcon } from '@heroicons/react/outline'

const Chat = () => {
  return (
    <div className="w-h-96 bg-white ">
      <div className="h-20 bg-green-100 flex border-r-2 border-black">
        <div className="p-4 flex-1">
          <img class="h-12 w-12 rounded-full" src="/IMG_5986.jpg" alt="AAA" />
        </div>
        <div className="p-4 flex items-center text-gray-600" >
          <DotsCircleHorizontalIcon className="h-8 mx-3" />
          <AnnotationIcon className="h-8 mx-3" />
          <DotsVerticalIcon className="h-8 mx-3 pr-2"/>
        </div>
      </div>
      <div className="p-3 items-center flex">
        <SearchIcon className="h-7 mx-2 mr-6 text-gray-500"/>
        <input className="rounded-full h-10 bg-gray-100 mx-2 p-2"
          type="text"
          placeholder="Search or start new chat"/>
      </div>
      <div className="p-7 font-bold text-3xl">
        <h2> Add new chat</h2>
      </div>
      <div className="flex mt-1 items-center p-4">
        <div className="">
          <img class="h-12 w-12 rounded-full" src="/abc.jpg" alt="AAA"/>
        </div>
        <div className="mx-5 block">
          <h2 className="font-bold text-xl">Hello Friends</h2>
          <h5>This is real time</h5>
        </div>
      </div>
      <div className="flex mt-1 items-center p-4">
        <div className="">
          <img class="h-12 w-12 rounded-full" src="/abc.jpg" alt="AAA"/>
        </div>
        <div className="mx-5 block">
          <h2 className="font-bold text-xl">Hello Friends</h2>
          <h5>This is real time</h5>
        </div>
      </div>
    </div>
  )
}

export default Chat