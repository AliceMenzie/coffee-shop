import React from 'react'
import { useQuery } from "graphql-hooks";
import { Image } from "react-datocms";

export default function Main() {
    const HOMEPAGE_QUERY = `{
        homePage {
          mainHeading
          mainContent
          mainHeroImage {
            width
            alt
            title
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
    
      const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
        variables: {
          limit: 10,
        },
      });
    
      if (loading) return "Loading...";
      if (error) return "Something Bad Happened";
    
      console.log(data);
    
      return (
        <main className="main">
          <h1>{data.homePage.mainHeading}</h1>
    
          <Image className='hero-img' data={data.homePage.mainHeroImage.responsiveImage} />
    
          <p>{data.homePage.mainContent}</p>
        </main>
      );
}
