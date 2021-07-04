import bannerImg from './images/bannerImg2.jpeg';
import '../styles/banner.css';

function Banner(){

    return (
        <>
            <div className="bannerWrapper" style={{backgroundImage : `url(${bannerImg})`}}>
                <div className="bannerContent">

                    <h2>Adobe Code Test</h2>

                </div>
            </div>
        </>
    )
}


export default Banner;