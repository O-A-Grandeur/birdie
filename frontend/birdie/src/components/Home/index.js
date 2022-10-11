import React, { useEffect, useState } from "react";
import CardContainer from "../global/CardContainer";
import useUserContext from "../../contexts/UserContext";

const Home = () => {
    const { axiosInstance } = useUserContext();
    const [data, setPosts] = useState({
        next: null,
        posts: [],
    });
    useEffect(() => {
        axiosInstance.get("/post/all").then((response) => {
            setPosts({
                next: response.data.next,
                posts: response.data.results,
            });
        });
    }, [axiosInstance]);
    return (
        <div className="flex flex-col items-center w-full">
            <CardContainer posts={data.posts} />
        </div>
    );
};

export default Home;
