import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Video_3dwave from '../../assets/videos/3Dwave.mp4';
import './homeVideo.css'
import { CarouselItem } from 'react-bootstrap';

function HomeVideo() {
    const [play, setPlay] = useState(true);
    useEffect(() => {
        if (play === false) {
            setPlay(true);
            console.log(play);
        }
    }, []);

    return (
        <div>
            {/* <Carousel>
                <CarouselItem> */}
                    <video className="video" loop autoPlay muted>
                        <source src={Video_3dwave} type="video/mp4" />
                    </video>
                {/* </CarouselItem>
            </Carousel> */}
        </div>
    )
}

export default HomeVideo