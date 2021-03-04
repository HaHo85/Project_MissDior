import React, { useState } from 'react';
//import PropTypes from 'prop-types';
//import  './Image.scss';
HinhAnh.propTypes = {
    
};
function getRandomColor() {
    const Color_list=["https://portomontenegro.com/wp-content/uploads/2020/06/FT_dior-fashion-brand-box.jpg", "https://www.pngkit.com/png/full/194-1944124_miss-dior-blooming-bouquet-miss-dior-cherie-logo.png"];
    const randomIndex=Math.trunc(Math.random()*2);
    return Color_list[randomIndex];
}


function HinhAnh() {
 
    const[hinhanh, setImage]= useState(()=>{
        const initImage=localStorage.getItem('box_color') || "https://www.pngkit.com/png/full/194-1944124_miss-dior-blooming-bouquet-miss-dior-cherie-logo.png";
        console.log(initImage);
        return initImage;
    });
    function handleBoxClick() {
        const newImage=getRandomColor();
        setImage(newImage);
        localStorage.setItem('box_color',newImage);
    }
    return (
        <div className="image">
        <img src={hinhanh} onClick={handleBoxClick}/>
  </div>
    );
}
export default HinhAnh;