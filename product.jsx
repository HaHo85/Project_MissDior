//import React,{ Compoent } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import App from 'src./App';

import { useState } from "react";


function Product(props){

 function OnAddCart(text){
	 alert(text);
	 console.log(text);

 }
 function OnCart(text){
	alert(text);
	console.log(text);

}

  return (
    <div>
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
    	<div className="thumbnail">
    		<img alt="" src={props.image}/>
    		<div className="caption">
    			<h3>
				{props.children}

    			</h3>
				<p>
				<a className="btn btn-default" > 50ml</a>
				<a className="btn btn-default" > 100ml</a>
				<a className="btn btn-default" > 150ml</a>
				</p>
    			<p>
    				{props.price} VNĐ
    			</p>
				
    			<p>
    				<a className="btn btn-primary" onClick={ ()=>{OnAddCart(' Xin chúc mừng bạn đã mua '+props.children+' thành công')}}>Mua ngay</a>
    				<a className="btn btn-default" onClick ={ ()=>{OnCart('Bạn đã thêm '+props.children +' thành công')}}> Thêm vào giỏ hàng</a>
    			</p>
    		</div>
    	</div>
    </div>
          </div>
  );
}
export default Product;
