import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free coctails",
                info:"lorem impum lorem impumlorem impumlorem impumlorem impumlorem impumlorem impum "
            },
            {
                icon: <FaHiking />,
                title: "free coctails",
                info: "lorem impum lorem impumlorem impumlorem impumlorem impumlorem impumlorem impum "
            },
            {
                icon: <FaShuttleVan />,
                title: "free coctails",
                info: "lorem impum lorem impumlorem impumlorem impumlorem impumlorem impumlorem impum "
            },
            {
                icon: <FaBeer />,
                title: "free coctails",
                info: "lorem impum lorem impumlorem impumlorem impumlorem impumlorem impumlorem impum "
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                {this.state.services.map((item,index)=> {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>        
                })}
                </div>
            </section>
        )
    }
}
