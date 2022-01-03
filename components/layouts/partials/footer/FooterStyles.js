import styled from 'styled-components';

const FooterStyles = styled.footer`
  background: var(--lightGray);
  color: var(--darkBlue);
  padding: 1rem;

  /* position: relative;
  top: calc(100vh - 20rem - var(--navHeight));
  margin: 0;
  padding: 0; */

  .footer-container {
    margin: 2rem auto;
    width: 100%;
    max-width: var(--maxWidth);
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(
      auto-fit,
      minmax(300px, 1fr)
    );
  }

  h4 {
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.3rem;
    margin: 0;
  }
`;

const LinkStyles = styled.li`
  list-style-type: none;
  text-transform: capitalize;
  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
    &:hover {
      color: var(--blue);
    }
  }
`;

const FooterCategoriesStyles = styled.section`
  padding-left: 2rem;
  ul {
    padding: 0;
  }
`;

const FooterContactsStyles = styled.section`
  padding-left: 2rem;
  hr {
    margin: 2rem 0;
    height: 1px;
    border: none;
    background-color: #ccc;
    width: 60%;
  }

  .hours {
    margin-top: 2rem;
  }
`;

const FooterLinksStyles = styled.section`
  padding-left: 2rem;
  ul {
    padding: 0;
  }
`;

const FooterSocialStyles = styled.section`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  padding: 2rem;

  a {
    color: var(--darkBlue);
    cursor: pointer;
    margin: 0 1rem;
    transition: color 0.3s;
    &:hover {
      color: var(--darkBlueHover);
    }
  }
`;

export {
  FooterStyles,
  LinkStyles,
  FooterContactsStyles,
  FooterSocialStyles,
  FooterLinksStyles,
  FooterCategoriesStyles,
};
