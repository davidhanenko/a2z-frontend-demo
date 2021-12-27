import Link from 'next/link';
import { FooterLinksStyles, LinkStyles } from './FooterStyles';

export default function FooterLinks() {
  return (
    <FooterLinksStyles>
      <h4>Links</h4>
      <ul>
        <LinkStyles>
          <Link href={'/about'}>about</Link>
        </LinkStyles>
        <LinkStyles>
          <Link href={'/contacts'}>contacts</Link>
        </LinkStyles>
        <LinkStyles>
          <Link href={'/gallery'}>gallery</Link>
        </LinkStyles>
      </ul>
    </FooterLinksStyles>
  );
}
