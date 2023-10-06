import axios from 'axios'
import React, { useEffect, useState } from 'react'
import line from './images/Line.png'

const Products = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("https://fakestoreapi.com/products");
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="products">
        <h1 className='main-Product-Heading'>New Products</h1>
        <img src={line} alt="" className='lineinPd' />
        <tr className='contentWrapper'>
          {data && data.map((element, index) => (
            <td key={index} >
              <img src={element.image} alt="" className='dataImg' />
              <h3 className='dataTitle'>{element.category}</h3>
              <p className='dataDesc'>{element.description}</p>
              <h3 className='dataTitle'>${element.price}</h3>
            </td>
          ))}
        </tr>
      </div>
    </>
  )
}

export default Products
