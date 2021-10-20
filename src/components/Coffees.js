import React from 'react'
import { useQuery } from "graphql-hooks";
import { Image } from "react-datocms";
import { Link } from "react-router-dom"

export default function Coffees() {
    const PRODUCTS_QUERY = `{
        allProducts {
          id
          productName
          productDescription
          mainImage {
            responsiveImage {
                alt
                base64
                bgColor
                title
                src
                srcSet
                sizes
                height
                webpSrcSet
                width
                aspectRatio
            }
          }
          
        }
      }`

      const { loading, error, data } = useQuery(PRODUCTS_QUERY, {
        variables: {
          limit: 10,
        },
      });
    
      if (loading) return "Loading...";
      if (error) return "Something Bad Happened";
    
      console.log(data.allProducts);
      
    return (
        <div>
            <h1>Coffees</h1>
            <div>
            
            {data.allProducts.map((product) => (
        
        <div key={product.id}>
            <Image className='product-img' data={product.mainImage.responsiveImage} />
          <Link  to={`product/${product.id}`}>

            <h4> {product.productName} </h4>
          </Link>

         
          
        </div>
      ))}
            </div>
        </div>
    )
}
