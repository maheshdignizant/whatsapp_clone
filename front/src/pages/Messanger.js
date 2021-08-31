import { useContext, useEffect, useRef, useState } from "react";
import { AnnotationIcon, DotsCircleHorizontalIcon, DotsVerticalIcon, SearchIcon } from '@heroicons/react/outline'
import {  EmojiHappyIcon,  UploadIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import Conversation from '../Components/Conversation'
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Messages from "../Components/Messages";

export const Messanger = () => {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [input, setInput] = useState  ('')
    const { user } = useContext(AuthContext);
    const scrollRef = useRef();

    console.log("user", user);
    console.log("conversations", conversations);


    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/conversations/" + user._id);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/messages/" + currentChat?._id);
                setMessages(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );

        // socket.current.emit("sendMessage", {
        //     senderId: user._id,
        //     receiverId,
        //     text: newMessage,
        // });

        try {
            const res = await axios.post("http://localhost:8800/api/messages", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex h-screen overflow-hidden p-4 shadow-md">
            <div className="w-h-96 bg-white ">
                <div className="h-20 bg-green-100 flex border-r-2 border-black">
                    <div className="p-4 flex-1">
                        <img class="h-12 w-12 rounded-full" src="/IMG_5986.jpg" alt="AAA" />
                    </div>
                    <div className="p-4 flex items-center text-gray-600" >
                        <DotsCircleHorizontalIcon className="h-8 mx-3" />
                        <AnnotationIcon className="h-8 mx-3" />
                        <DotsVerticalIcon className="h-8 mx-3 pr-2" />
                    </div>
                </div>
                <div className="p-3 items-center flex">
                    <SearchIcon className="h-7 mx-2 mr-6 text-gray-500" />
                    <input className="rounded-full h-10 bg-gray-100 mx-2 p-2"
                        type="text"
                        placeholder="Search or start new chat" />
                </div>
                <div className="p-7 font-bold text-3xl">
                    <h2> Add new chat</h2>
                </div>
                {conversations.map((c) => (
                    <div onClick={() => setCurrentChat(c)}>
                        <Conversation conversation={c} currentUser={user} />
                    </div>
                ))}
            </div>
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
                        {currentChat ? (
                            <>
                                <div className="h-100 p-5">
                                    {messages.map((m) => (
                                        <div ref={scrollRef}>
                                            <Messages message={m} own={m.sender === user._id} />
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <span className="mt-2   ">
                                Open a conversation to start a chat.
                            </span>
                        )}
                </div>
                <div className="mt-3 bg-gray-400 flex">
                    <div className=" p-3 flex items-center">
                        <EmojiHappyIcon className="h-8" />
                        <form>
                            <input className="rounded-full w-96 bg-gray-100 mx-3 p-2 outline-none "
                                type="text"
                                placeholder="Search or start new chat"
                                style={{ width: "900px" }}
                                onChange={(e) => setNewMessage(e.target.value)}
                                value={newMessage}/>
                            <button className="hidden" type="submit" onClick={handleSubmit}>
                                handleSubmit
                            </button>
                        </form>
                        <MicrophoneIcon className="h-8 flex-end" />
                    </div>
                </div>
            </div>
        </div>
    )
}
