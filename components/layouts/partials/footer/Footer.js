import FooterSocial from './FooterSocial';
import FooterCategories from './FooterCategories';
import FooterLinks from './FooterLinks';
import FooterContacts from './FooterContacts';
import { FooterStyles } from './FooterStyles';



export default function Footer() {
  return (
    <FooterStyles>
      <div className='footer-container'>
        <FooterCategories />
        <FooterLinks />
        <FooterContacts />
      </div>
      <FooterSocial />
    </FooterStyles>
  );
}
