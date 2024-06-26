import React, { Component } from 'react';
import { Link } from "react-router-dom";



class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { id: 1, img: "./images/main1.jpg" },
                { id: 2, img: "./images/slide2.jpg" },
                { id: 3, img: "./images/slide3.jpg" },
                { id: 4, img: "./images/slide4.jpg" }],
        };
    }

    render() {
        return (
            <div>

                <div className='image-slider'></div>

                <div className="box-products">

                    <div className='items'>
                        <h4>Starting ₹99 | Start your fitness journey</h4>
                        <div className="box">
                            <Link to="/pro1">
                                <img className='myImage' src={require('./images/main1.jpg')} alt='pic1'></img>
                            </Link>
                        </div>

                    </div>
                    {/* apply NavLink tag to higligt the link  */}
                    <div className='items'>
                        <h4>Bestsellers in Women's Indian Clothing</h4>
                        <Link to="/pro">
                            <div className="box2 box"></div>
                        </Link>
                    </div>

                    <div className='items'>
                        <h4>Customers’ Most-Loved Fashion for you</h4>
                        <Link to="/pro">
                            <div className="box3 box"></div>
                        </Link>
                    </div>
                    <div className='items'>
                        <h4>Up to 60% off | Car, bike parts & accessories</h4>
                        <Link to="/pro">
                            <div className="box4 box"></div>
                        </Link>
                    </div>
                    <div className='items'>
                        <h4>Love adhura | Watch only on miniTV</h4>
                        <Link to="/pro">
                            <div className="box5 box"></div>
                        </Link>
                    </div>
                    <div className='items'>
                        <h4>Only at ₹585 | Wearable portable fan</h4>
                        <Link to="/pro">
                            <div className="box6 box"></div>
                        </Link>
                    </div>
                    <div className='items'>
                        <h4>Up to 50% off | Diabetes care devices</h4>
                        <Link to="/pro">
                            <div className="box7 box"></div>
                        </Link>
                    </div>
                    <div className='items'>
                        <h4>Under ₹699 | Combo packs | Amazon brands &</h4>
                        <Link to="/pro">
                            <div className="box8 box"></div>
                        </Link>
                    </div>
                </div>
            </div>

        );

    }

    retrieveImage(image) {
        return (<span><img key={image.id} src={image.img} alt=""></img></span>)
    }

}



export default MainContent;