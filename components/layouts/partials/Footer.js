import { MdOutlineFacebook } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

import { FooterStyles } from './FooterStyles';

export default function Footer() {
  return (
    <FooterStyles>
      <div className='footer-container'>
        <div className='footer-categories'>
          <h4>Categories</h4>
          <p>Products</p>
          <p>Tools</p>
          <p>Sinks</p>
        </div>
        <div className='footer-links'>
          <h4>Links</h4>
          <p>link1</p>
          <p>link2</p>
          <p>link3</p>
        </div>
        <div className='footer-contacts'>
          <h4>Contacts</h4>
          <p>+1 999-123-4567</p>
          <p>a2z.gmail.com</p>
          <hr />
          <p>1234 Some street, New York, NY, US, 111111</p>
        </div>
      </div>
      <div className='footer-social'>
        <MdOutlineFacebook fill={'orange'} />
        <RiInstagramFill fill={'orange'} />
      </div>
    </FooterStyles>
  );
}
