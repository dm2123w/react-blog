import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName("Luigi");
        setAge(30);
    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>
                {name} is {age} years old
            </p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;
