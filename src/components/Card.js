import React,{ Component } from 'react';
import '../styles/card.css';

class Card extends Component{

    render(){

        return(
            <div className="card">

                <h4>
                    {
                        this.props.cardData.title
                    }
                </h4>

                <h5>
                    {
                        this.props.cardData.titleLite
                    }
                </h5>
                <p>
                    {
                        this.props.cardData.product
                    }
                </p>
                <p>
                    {
                        this.props.cardData.summary
                    }
                </p>
             
            </div>
        )
    }
}


export default Card;