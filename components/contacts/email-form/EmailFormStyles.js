import styled from 'styled-components';

const EmailFormStyles = styled.form`
  color: var(--dark);
  flex: 1 1 400px;

  display: flex;
  justify-content: center;

  margin: 2rem;

  box-shadow: 2px -1px 10px 0px rgba(0, 0, 0, 0.2);

  h2 {
    text-align: center;
    font-size: 3rem;
    padding-bottom: 2rem;
    color: var(--darkBlue);
    font-weight: 400;
    text-transform: uppercase;
    background: transparent;
  }

  .form {
    background: var(--white);

    padding: 2rem;
    width: 100%;
    max-width: 600px;

    .input-field {
      border: 1px solid transparent;
      outline: none;
      position: relative;
      margin-bottom: 3rem;
      padding: 0;

      &:focus-within label {
        color: var(--blue);
        opacity: 1;
        background: var(--lightGray);
        width: 7rem;
        max-height: 12rem;
      }

      input,
      textarea {
        border: 1px solid var(--darkBlue);
        color: var(--dark);
        outline: none;
        background: transparent;
        padding: 0.9rem 0.5rem;
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        font-weight: 100;
        transition: all 0.3s ease;

        &:focus {
          border: 1px solid var(--blue);
          margin-left: 7rem;
          width: calc(100% - 7rem);
        }
      }

      label {
        opacity: 0.5;
        position: absolute;
        padding-left: 0.5rem;
        padding-top: 0.3rem;
        height: 100%;
        max-height: 100%;
        transition: all 0.3s ease;
        font-size: 1.5rem;
      }

      .input-dirty {
        margin-left: 7rem;
        width: calc(100% - 7rem);
      }

      .label-dirty {
        color: var(--blue);
        opacity: 1;
        background: var(--lightGray);
        width: 7rem;
        max-height: 12rem;
      }

      .input-error {
        position: absolute;
        color: #ae310b;
        font-size: 1.3rem;
        right: 0;
        top: -2.5rem;
      }
    }
  }
`;

const EmailSendBtn = styled.button`
  display: inline-block;
  padding: 1.5rem 2.5rem;
  border: none;
  color: var(--blue);
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 0.15rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--lightGray);
    z-index: -2;
  }
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--lightBlue);
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    color: var(--white);
    &:before {
      width: 100%;
    }
  }
`;

export { EmailFormStyles, EmailSendBtn };
