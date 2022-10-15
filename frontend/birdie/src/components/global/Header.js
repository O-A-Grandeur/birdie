import Avatar from "@mui/material/Avatar";
import React from "react";
import useUserContext from "../../contexts/UserContext";
import { useLocation } from "react-router-dom";

const Header = (props) => {
    const {
        user,
        profileData: { username, profile_pic },
    } = useUserContext();
    const { isError } = props;
    const location = useLocation();
    let cur = location.pathname.split("/").at(1);
    if (cur === "") cur = "home";
    return (
        <header className="flex items-center justify-center  p-2 h-14 absolute w-full bg-gray-100 border-0 text-gray-900 sm:px-8">
            <div className="max max-w-6xl w-full flex justify-between">
                <div
                    className={`flex gap-1 text-2xl text-purple-400 items-center`}
                    aria-hidden={true}
                >
                    <span className="text-4xl">
                        <iconify-icon icon="game-icons:hummingbird">birdie logo</iconify-icon>
                    </span>
                    <h1 className="font-bold italic inline-block capitalize">
                        {isError ? "birdie" : cur}
                    </h1>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <button className="bg-purple-400 text-purple-50  flex items-center gap-1 justify-center px-2 h-8 xm:rounded-full rounded-lg xm:w-24">
                        <span className="fixed -top-[1000px] xm:static">Create</span>
                        <iconify-icon icon="ant-design:plus-outlined">create</iconify-icon>
                    </button>
                    <Avatar src={user && profile_pic} alt={user && username}>
                        {username && username.at(0).toUpperCase()}
                    </Avatar>
                    <p className="text-purple-400 text-lg xm:static fixed -top-36 capitalize">
                        {user && username}
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
