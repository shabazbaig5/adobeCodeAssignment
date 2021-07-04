import React,{ Component } from 'react';
import Card from './Card';
import '../styles/card.css';
import data from './data/productData.js';
import SearchCard from './searchCard';

class CardsGrid extends Component{

    constructor(props){

        super(props);

        this.state = {
            cardData : data.cardData
        }
    }

    handleSearch = (e) => {

        console.log(e.value);
        if(e.value == ""){

            this.setState({
                cardData : data.cardData
            })

        }else{

            let filteredData = data.cardData.filter((item) => {

                if(item.company){
                    
                    return item.company.toLowerCase() == e.value.toLowerCase();
    
                }
    
            });
            console.log(filteredData);
            this.setState({
                cardData : filteredData
            });

        }
       

    }
    render() {


        return(

            <div className="appDisplayWrapper">
        
                <SearchCard handleSearch = {this.handleSearch}/>

                <div className="appHeader">
                    <h2>Featured Apps</h2>
                </div>
                <div className="cardsGridwrapper">
                    {
                        this.state.cardData.map((item,index) => {
                            // console.log(item);
                            console.log(index);
                            return <Card key={index} cardData = {item}/>
                        })
                    }
                </div>
            </div>

        )    
        
    }
}

export default CardsGrid;