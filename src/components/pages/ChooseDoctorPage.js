import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyCard from '../Mycard'
import surg from '../../resources/surgeon.jpg'
import '../Mycard.css'
import '../../utils/App.css'

import firebase from './../../firebase'
import { StylesProvider } from '@material-ui/core'

import ScrollArea from 'react-scrollbar'


export default class DoctorsPage extends React.Component {

    constructor() {
        super()
        this.state = {cardInfo: []}
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();


        // dbRef.child("cards").child(0).get().then((card) => {
        //     console.log(card.val())
        // })

        dbRef.child("doctor_types").get().then((doctors) => {
            this.setState({cardInfo: doctors.val()});
            console.log(this.state.cardInfo)
        })
        
        // dbRef.child("cards").get().then((cards) => {
        //     if (cards.exists()) {
        //         this.state.cardInfo = cards.val()
                
        //         console.log(cards.val());
        //     } else {
        //         console.log("No data available");
        //     }
        // }).catch((error) => {
        //     console.error(error);
        // });
    }

    render() {
        console.log(this.state.cardInfo)
        return (
            // <div>{this.cardInfo}</div>

                <div className="grid page">

            { this.state.cardInfo.map( (card, index) => 
                <MyCard type={card.type} image_id={card.image_id}></MyCard>)}
            
             </div>
            
        ) 
    }
}