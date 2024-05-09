import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        {/* <img src="https://picsum.photos/id/2/600/400" class="d-block w-100" alt="..." /> */}
                        <img src="https://picsum.photos/id/249/5000/3333" class="d-block w-100" alt="/pic1" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://picsum.photos/id/249/600/400" class="d-block w-100" alt="/pic2" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/id/250/600/400" class="d-block w-100" alt="/pic3" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Home;