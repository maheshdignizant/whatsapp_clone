import axios from "axios";
import { useEffect, useState } from "react";

export default function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);

        const getUser = async () => {
            try {
                const res = await axios("http://localhost:8800/api/users?userId=" + friendId);
                setUser(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);

    return (
        <>
            {/* <div className="conversation">
                <img
                    className="conversationImg"
                    src={
                        user?.profilePicture
                            ? PF + user.profilePicture
                            : PF + "person/noAvatar.png"
                    }
                    alt=""
                />
                <span className="conversationName">{user?.username}</span>
            </div> */}
            <div className="flex mt-1 items-center p-4">
                <div className="">
                    <img class="h-12 w-12 rounded-full" src="/abc.jpg" alt="AAA" />
                </div>
                <div className="mx-5 block">
                    <h2 className="font-bold text-xl">{user?.username}</h2>
                </div>
            </div>
        </>
    );
}