import React,{ Component } from 'react';
import Banner from './Banner';
import CardsGrid from './CardsGrid';
import SearchCard from './searchCard';
class Main extends Component{

    render(){

        return(
            <>
                <section className="bannerSection">
                    <Banner />
                </section>

                {/* <section className="searchSection">
                    <SearchCard /> 
                </section> */}

                <section className="cards">
                    <CardsGrid />
                </section>
            </>
        )

    }

}

export default Main;