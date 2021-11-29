import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import { SingleItemStyles } from './SingleItemStyles';

export default function SingleItem({ singleItem }) {
  const [sizePrice, setSizePrise] = useState([...singleItem.size_prices]);
  const [index, setIndex] = useState(0);

  // show price according to size of item(if apply)
  const handlePrice = e => {
    // find index of choosen size
    let sizeIndex = sizePrice.findIndex(el => el.size == e.target.value);
    // use index to display proper price
    setIndex(sizeIndex);
  };

  return (
    <SingleItemStyles>
      <Head>
        <title>{capitalizeStr(singleItem.item_title)} - A2Z</title>
      </Head>
      <div className='item-image-container'>
        <Image
          src={singleItem.image[0].url}
          width={300}
          height={300}
          layout='responsive'
        />
      </div>

      <div className='item-description-container'>
        <h5 className='single-item-title'>{singleItem.item_title}</h5>

        <hr />
        {/* show price related to size or single price */}
        <h6 className='single-item-price'>
          ${sizePrice[index]?.price || singleItem.price}
        </h6>

        <h6 className='available-sizes'>Available sizes:</h6>

        {singleItem.size_prices?.map((size, i) => (
          <input
            key={size.id}
            className={i === index ? 'size-input-btn active-size-btn' : 'size-input-btn'}
            type='button'
            onClick={handlePrice}
            value={size.size}
          />
        ))}

        <hr />

        <ReactMarkdown className='single-item-description'>
          {singleItem.description}
        </ReactMarkdown>
      </div>
    </SingleItemStyles>
  );
}
