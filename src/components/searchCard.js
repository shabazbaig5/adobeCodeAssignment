import React,{ Component } from 'react';
import data from './data/productData';

class SearchCard extends Component{

    render(){

        return (
            <>
                <div class="searchWrapper">
                    <input type='text' id='searchField' placeholder="Search Marketplace"/>
                    <button id="searchProducts" onClick = {
                        () => {
                            this.props.handleSearch(document.querySelector('#searchField'));
                        }
                    }>
                        search
                    </button>
                </div>
            </>
        )
    }
}


export default SearchCard;