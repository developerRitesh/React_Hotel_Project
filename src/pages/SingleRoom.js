import React, { Component } from 'react'
import defaultBanner from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {RoomContext} from "../context";
export default class SingleRoom extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBanner
        };
    }
    
    static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room)
        {
            return (
                <div>
                    No room could be found with such name
                </div> 
            )

        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room; 
        return <Hero hero="roomsHero">
            <Banner title={`${name} room`} subtitle={description}>
        </Banner>    
        </Hero> 
    }
}
