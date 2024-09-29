// import { Component } from "react";
// import { useState } from 'react';
import Card  from '../card/card.component'
import './cardList.style.css';

const CardList = ({monsters})=>(
    <div className='card-list'>
        {
            monsters.map((monster)=>(
                <Card monster = {monster} key={monster.id}></Card>
            ))
        }
    </div>
);
export default CardList;


// class CardList extends Component{
//     render(){
//         // console.log('render in cardList')
//         // console.log(this.props.monsters)
//         const {monsters} = this.props;
//         return(
//             <div className="card-list">
//                 {
//                     monsters.map((monster)=>{
//                         return(
//                             <Card monster={monster}></Card>
//                         );
//                     })
//                 }
//             </div>
//         )
//     }
// }

// export default CardList;