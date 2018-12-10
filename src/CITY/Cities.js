import React, { Component } from 'react';

import City from './City';


const Cities=(props)=>{
props.list.map((c)=>{
	
	console.log(c.city, c.country);
return <City name={c.city} country={c.country}/>;
}

);

}
export default Cities;



