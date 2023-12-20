import React, { useState, useEffect } from 'react';

export default function Carousel(props) {
    const [images, setImages] = useState([]);
    const [imgIndx, setImgIndx] = useState(0)

    useEffect(() => {
        if (images.length === 0) {
            setImages(props.imgData);
        }
    }, [props.imgData, images]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImgIndx((prevInd) => (prevInd === images.length - 1 ? 0 : prevInd + 1));
        }, 2000);
    
        // Clear the interval when the component is unmounted or when the images array changes
        return () => clearInterval(intervalId);
    }, [images]);

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
