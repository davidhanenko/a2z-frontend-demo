import Image from 'next/image';
import placeholderImg from '../../../../public/img/img.svg';
import { FoundItemStyles } from './FoundItemStyles';

export default function FoundItem({ item }) {
  return (
    <FoundItemStyles key={item?.id}>
      <Image
        src={item?.image[0]?.url}
        alt={item?.itemTitle}
        width={200}
        height={200}
        placeholder='blur'
        blurDataURL={placeholderImg}
      />
      <h3>{item?.itemTitle}</h3>
      <p>from...</p>
    </FoundItemStyles>
  );
}
