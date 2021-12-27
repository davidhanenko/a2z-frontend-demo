import React from 'react';
import Link from 'next/link';

import { MdOutlineFacebook } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

import { FooterSocialStyles } from './FooterStyles';

const FacebookBtn = React.forwardRef(({ href }, ref) => {
  return (
    <a href={href} ref={ref}>
      <MdOutlineFacebook />
    </a>
  );
});

const InstagramBtn = React.forwardRef(({ href }, ref) => {
  return (
    <a href={href} ref={ref}>
      <RiInstagramFill />
    </a>
  );
});

export default function FooterSocial() {
  return (
    <FooterSocialStyles>
      <Link href='/' passHref>
        <FacebookBtn />
      </Link>
      <Link href='/' passHref>
        <InstagramBtn />
      </Link>
    </FooterSocialStyles>
  );
}
