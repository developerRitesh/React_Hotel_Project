import React, { Component } from 'react'
import defaultBanner from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {RoomContext} from "../context";
import StyledHero from "../components/StyledHero";
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
        return(<>
            <StyledHero img={images[0]}>
                <Banner title={`${name} room`} subtitle={description}>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {images.map((item,index)=>{
                        return <img key={index} src={item} alt={name}/>  
                    })
                    }
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : ${size}</h6>
                        <h6>max capacity : {capacity > 1 ? `${capacity} people`:"person"}</h6>
                        <h6>{pets ? "pets allowed":"No pets allowed" }</h6>
                        <h6>{breakfast && "free breakfast"}</h6>
                    </article>
                </div>
                <section className="room-extras">
                    <h6>extras</h6>
                    {extras.map((item,index)=>{
                        return <li key={index}>- {item}</li>   
                    })}
                </section>
            </section>
        </>) 
    }
}
