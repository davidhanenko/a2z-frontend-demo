import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import Header from './partials/Header';

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
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
};
