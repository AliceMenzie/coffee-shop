import React from "react";
import { useQuery } from "graphql-hooks";

export default function About() {
  const ABOUT_QUERY = `{
        about {
          coffeeDescription
        } 
        
      }`;

  const { loading, error, data } = useQuery(ABOUT_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return "Loading...";
  if (error) return "Something Bad Happened";

    console.log(data.about);
  return (
    <div>
      <h1>Coffees</h1>
      {data.about.coffeeDescription}
    </div>
  );
}
