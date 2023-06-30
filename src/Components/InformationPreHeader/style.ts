import styled from "styled-components";

export const StyledInformationPreHeader = styled.div`
  background-color: var(--color-primary);
  color: var(--color-grey-0);

  padding: 10px;

  display: flex;
  justify-content: space-around;

  width: 100%;

  div {
    display: flex;
    gap: 20px;
  }

  @media (max-width: 1023px) {
    .container__only-desktop {
      display: none;
    }
  }
`;
