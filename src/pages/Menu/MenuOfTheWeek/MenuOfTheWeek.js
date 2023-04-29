import React from 'react'
import ListItem from '../../../Component/ListItem/ListItem';
import './MenuOfTheWeek.css'


import image1 from '../../../assests/Chicken Briyani.jpg'
import image2 from '../../../assests/Raita.jpg'
import image3 from '../../../assests/Seafood Laksa.jpeg'

const menuData = [
{
    title: "Chicken Briyani",
    description: "",
    price: "14.99",
    img: image1,
},
{
    title:"Raita",
    description: "cucumber,onion,yogurt and pepper",
    price: "5.50",
    img: image2,

},
{
    title:"Seafood Laksa",
    description: " ",
    price: "15.99",
    img: image3,
},
];

const MenuOfTheWeek = () => {
  return <div className="section">
     <div className="container menu-of-the-week">
        <h1 className="heading-secondary">
          <span>menu </span> of the week

        </h1>
        {menuData.map((data, i) => (
          <ListItem title={data.title} description={data.description} price={data.price} itemImage={data.img} />
        ))}

  </div>
   
        
  </div>
  
};

export default MenuOfTheWeek