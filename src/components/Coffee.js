import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "graphql-hooks";
// import { Image } from "react-datocms";
export default function Coffee() {
  const { id } = useParams();
  const PRODUCT_QUERY = `{
        product(filter: {id: {eq: ${id}}}) {
          productName
          productDescription
        }
      }`;

  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

  console.log(data);

  return (
    <div>
      <h1>Hello</h1>
      <p>{data.product.productName}</p>
      <p>{data.product.productDescription}</p>
      
    </div>
  );
}
