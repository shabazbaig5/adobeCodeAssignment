import React,{ Component } from 'react';
import data from './data/productData';
import {MdSearch} from "react-icons/md"
class SearchCard extends Component{


    keyPress = (e) => {

        if(e.keyCode == 13){
           console.log('value', e.target.value);
           // put the login here
           console.log(this.props.handleSearch(document.querySelector('#searchField')));
        }
     }
    render(){


        return (
            <>
                <div class="searchWrapper">
                    
                    <input type='text' className={MdSearch} onKeyDown={this.keyPress} id='searchField' placeholder="Search Marketplace" />
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