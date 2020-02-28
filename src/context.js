import React, { Component } from 'react';
import items from './data';
const RoomContext = React.createContext();
class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[], 
        loading:true
    };
    
    componentDidMount(){
        let rooms = this.format(items);
        let featuredRooms = rooms.filter(room=>room.featured===true);    
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading:false
        });
    }

    getRoom=slug=> {
        let temprooms = [...this.state.rooms];
        const room = temprooms.find(room=>room.slug===slug);
        return room;
    }

    format(items){ 
        let tempItems = items.map(item=>{
            let id = item.sys.id;
            let images = item.fields.images.map(a=>{
                return a.fields.file.url;
            });
            return { ...item.fields,images,id};
        }); 
        return tempItems;
    }


    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom}}>
            {this.props.children}
            </RoomContext.Provider>          
        )
    }
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component)
{
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props}  context={value} />}
        </RoomConsumer>
    }
}


export {RoomProvider,RoomConsumer,RoomContext}