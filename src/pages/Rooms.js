import React from 'react';
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

export default function Rooms() {
    return <Hero>
        <Banner title="our rooms">
            <Link to="/" className="btn-primary">return home</Link>
        </Banner>
    </Hero>;
}
