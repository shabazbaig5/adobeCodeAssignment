import React,{ Component } from 'react';
import data from './data/productData';
import {MdSearch} from "react-icons/md"
class SearchCard extends Component{


    keyPress = (e) => {

        if(e.keyCode == 13){
   
            this.props.handleSearch(document.querySelector('#searchField'));

        }
     }
    render(){


        return (
            <>
                <div className="searchWrapper">
                    
                    <input type='text' onKeyDown={this.keyPress} id='searchField' placeholder="Search Marketplace" />
                    <button id="searchProducts" onClick = {
                        () => {
                            this.props.handleSearch(document.querySelector('#searchField'));
                        }
                    }>
                        <MdSearch/>
                    </button>
                </div>
            </>
        )
    }
}


export default SearchCard;