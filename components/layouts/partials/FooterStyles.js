import styled from 'styled-components';

const FooterStyles = styled.section`
  background: var(--gray);
  color: var(--darkBlue);
  padding: 1rem;

  /* position: relative;
  top: calc(100vh - 20rem - var(--navHeight));
  margin: 0;
  padding: 0; */

  .footer-container {
    margin: 0 auto;

    width: 100%;
    max-width: var(--maxWidth);

    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .footer-categories,
  .footer-links,
  .footer-contacts {
    padding-left: 2rem;

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
  }

  .footer-container {
    p {
      text-transform: capitalize;
    }
  }
  
  .footer-contacts {
    hr {
      height: 1px;
      border: none;
      background-color: #ccc;
    }
  }
  .footer-social {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    padding: 2rem;
  }
`;

export { FooterStyles };
