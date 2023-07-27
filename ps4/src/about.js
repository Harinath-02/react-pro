// import React from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
// import Example from "./cm2";
function About() {
    // let {software }= useParams();
    // console.log(useParams());
    // console.log(id);
    let count = 0;
    let [count1, setcount] = useState(0);
    const [myObject, setMyObject] = useState({});
    const [myArray, setMyArray] = useState([]);

    const handleAdd = () => {
        const newKey = document.getElementById("key").value;
        const newValue = document.getElementById("value").value;
        const newValue2 = document.getElementById("sal").value;
        const newObject = { name: newKey, age: newValue, sal: newValue2 };
        setMyArray([...myArray, newObject]);
        // setMyObject({ ...myObject, ...newObject });
        // document.getElementById("id").innerHTML = myObject.name + " " + myObject.age + " " + myObject.sal;
        // console.log(myObject)
    };
    //     const handleClick = () => {
    //     count=count+count1;
    //     setcount(count1+1);
    //     // count1++;
    //     console.log(count+1);
    //     console.log(count1);
    //   };
    return (
        <>
            <div>
                <div class="border border-secondary">
                    <div class="col-8 mx-auto my-5">
                        <div class="row mb-3">
                            <h1>About</h1>
                            <h1>We believe in what people make possible</h1>
                            {/* <Example/> */}
                            <h2>Our mission is to empower every person and every organization on the planet to achieve more.</h2>
                            <p>Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more. Microsoft set up its India operations in 1990. Microsoft in India offers its global cloud services from local data centers to accelerate digital transformation across Indian start-ups, businesses, and government agencies.</p>
                            {/* <p>{software}</p> */}
                            {/* <div>
                                <p>You clicked {count} times</p>
                                <p>You clicked {count1} times</p>
                                <button onClick={handleClick}>
                                    Click me
                                </button>
                            </div> */}
                            <div>
                                {/* <form onChange={handleAdd}> */}

                                <input type="text" id="key" placeholder="key" name="name"/>
                                <input type="text" id="value" placeholder="age" name="age" />
                                <input type="text" id="sal" placeholder="salary" name="sal"/>
                                {/* </form> */}
                                <ul>
                                    {myArray.map((object, index) => (
                                        <li key={index}>{`${object.name} (${object.age}) (${object.sal})`}</li>
                                    ))}
                                </ul>
                                <button onClick={handleAdd}>Add Object</button>
                                {/* <p id="id"></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;