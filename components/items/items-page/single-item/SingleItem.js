import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import { SingleItemStyles } from './SingleItemStyles';
import ImagesSlider from '../../../shared/sliders/images-slider/ImagesSlider';
import placeholderImg from '../../../../public/img/1.png';

export default function SingleItem({ singleItem }) {
  const [sizePrice, setSizePrise] = useState([
    ...singleItem.sizePrices,
  ]);
  const [index, setIndex] = useState(0);

  // sort by prices, to show list of availiable sizes of item
  sizePrice.sort((a, b) => a.price - b.price);

  // show price according to size of item(if apply)
  const handlePrice = e => {
    // find index of choosen size
    let sizeIndex = sizePrice.findIndex(
      el => el.size == e.target.value
    );
    // use index to display proper price
    setIndex(sizeIndex);
  };

  const SLIDE_COUNT = singleItem.image.length;

  const slides = Array.from(Array(SLIDE_COUNT).keys());

  const itemsByIndex = index =>
    singleItem.image[index % singleItem.image.length];

  return (
    <SingleItemStyles>
      <Head>
        <title>
          {capitalizeStr(singleItem.itemTitle)} - A2Z
        </title>
      </Head>
      <div className='item-image-container'>
        {SLIDE_COUNT > 1 ? (
          <ImagesSlider
            slides={slides}
            itemsByIndex={itemsByIndex}
            title={singleItem.itemTitle}
          />
        ) : (
          <Image
            src={singleItem.image[0].url}
            alt={singleItem.itemTitle}
            width={300}
            height={300}
            layout='responsive'
            placeholder='blur'
            blurDataURL={placeholderImg}
          />
        )}
      </div>

      <div className='item-description-container'>
        <h4 className='single-item-title'>
          {singleItem.itemTitle}
        </h4>

        <hr />
        {/* show price related to size or single price */}
        <h5 className='single-item-price'>
          ${sizePrice[index]?.price || singleItem.price}
        </h5>

        <h5 className='available-sizes'>
          Available sizes:
        </h5>

        {sizePrice.map((size, i) => (
          <input
            key={size.id}
            className={` size-input-btn ${
              i === index
                ? 'size-input-btn active-size-btn'
                : ''
            }`}
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
