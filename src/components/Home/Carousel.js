import React, { useState, useEffect } from 'react';

export default function Carousel(props) {
    const [images, setImages] = useState([]);
    const [imgIndx, setImgIndx] = useState(0)


    useEffect(() => {
        if (images.length === 0) {
            setImages(props.imgData);
        }
    }, [props.imgData, images]);

    function handlePrev() {
        setImgIndx((prevInd => prevInd - 1))
    }

    function handleNext() {
        setImgIndx((prevInd => prevInd + 1))
    }
        


    return (
        <div>
            <div id="carouselContainer">
                <button onClick={handlePrev} style={imgIndx === 0 ? { pointerEvents: 'none' } : {}}> {'<<'} </button>
                <img src={images[imgIndx]} />
                <button onClick={handleNext} style={imgIndx === images.length-1 ? { pointerEvents: 'none' } : {}}> {'>>'} </button>
            </div>

        </div>
    );
}
