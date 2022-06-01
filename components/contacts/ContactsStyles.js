import styled from 'styled-components';

const ContactsStyles = styled.div`
  padding-top: calc(
    var(--navHeight) + var(--searchHeight) + 5rem
  );
  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: 576px) {
    padding-left: 0;
    padding-right: 0;
  }

  .container {
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 992px) {
      flex-direction: column;
    }

    margin: 8rem 0;
  }
`;

export { ContactsStyles };
