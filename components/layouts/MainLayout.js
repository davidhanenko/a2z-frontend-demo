import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import Header from './partials/Header';
import Footer from './partials/Footer';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export default function MainLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer/>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
};
