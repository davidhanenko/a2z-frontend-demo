import { MdOutlineFacebook } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

import { FooterSocialStyles } from './FooterStyles';

export default function FooterSocial() {
  return (
  <FooterSocialStyles>
    <MdOutlineFacebook fill={'orange'} />
    <RiInstagramFill fill={'orange'} />
  </FooterSocialStyles>
  )
}