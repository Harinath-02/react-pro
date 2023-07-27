import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from 'react';
// import Cmetamask from "./cmetamask";
function Home() {
    return (
        <div>
            <div class="border border-secondary">
                <div class="col-8 mx-auto my-5">
                    <div class="row mb-3">
                        {/* <img src="" alt="" />
                        <h1>Home</h1>
                        <h1>Try Microsoft 365 for free</h1>
                        <h2>Surface Laptop 5.</h2>
                        <p>Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more. Microsoft set up its India operations in 1990. Microsoft in India offers its global cloud services from local data centers to accelerate digital transformation across Indian start-ups, businesses, and government agencies.</p>
                        <p>Surface for Business devices enable work on your team's terms with flexibility, built-in security and the power they need to succeed.</p> */}
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;