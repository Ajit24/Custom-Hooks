import { useEffect, useState } from "react";

const Home = () => {
    const [title, updatetitle] = useState("React")
    useEffect(() => {
        updatetitle("React")
    },[]);
    return (
        <div>
            <h2>Welcome to {title}</h2>
        </div>
    );
}

export default Home;