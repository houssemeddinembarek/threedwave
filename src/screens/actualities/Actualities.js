import React from 'react'
// import news from '../../assets/images/news.jpg';
import news from '../../assets/images/news2.png';
import './Actualities.css'

function Actualities() {
    return (
        <div className='no_highlights'>
            <img src={news} alt="" className='highImage' />
        </div>
    );
}

export default Actualities