import React from "react";
import { useQuery } from "graphql-hooks";
import { Image } from "react-datocms";
import { Link } from "react-router-dom";
import About from './About'

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
      }`;

  const { loading, error, data } = useQuery(PRODUCTS_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  console.log(data.allProducts);

  return (
    <div className="products-container">
      <div>
        < About />
      </div>

      <div className="coffees-container">
        {data.allProducts.map((product) => (
          <div className="coffee-card"  key={product.id}>
            <div>
            <Image
              className="product-img"
              data={product.mainImage.responsiveImage}
            />
            </div>   
            <div className="coffee-name">
            {product.productName}
            </div>
            <div>
            <Link className="product-link" to={`product/${product.id}`}>
               Learn More 
            </Link>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
}
