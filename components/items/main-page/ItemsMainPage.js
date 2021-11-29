import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import ItemsSlider from '../../shared/sliders/items-slider/ItemsSlider';
import { ItemsMainPageStyles } from './ItemsMainPageStyles';

 const PRODUCTS_MAIN_PAGE_QUERY = gql`
   query PRODUCTS_MAIN_PAGE_QUERY($service: String) {
     services(where: { service: $service }) {
       items {
         id
         title
         category: items_categories(limit: 1) {
           single_item: single_items(limit: 1) {
             image {
               url
             }
           }
         }
       }
     }
   }
 `;

export default function ItemsMainPage({}) {
  
  const { data, error, loading } = useQuery(PRODUCTS_MAIN_PAGE_QUERY, {
    variables: {
      service: 'products',
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
 

  const SLIDE_COUNT = data?.services[0].items?.length;

  const slides = Array.from(Array(SLIDE_COUNT).keys());
  // func from Embla Carousel docs
  const itemsByIndex = index => data?.services[0]?.items[index % data?.services[0]?.items?.length];

  return (
    <ItemsMainPageStyles>
      <h2>Products</h2>
      {data && <ItemsSlider slides={slides} itemsByIndex={itemsByIndex} />}
    </ItemsMainPageStyles>
  );
}
