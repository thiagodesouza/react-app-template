import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  align-items: center;
  background-color: ${colors.secundary};
  border-radius: 3px;
  color: ${colors.light};
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 50px 0;
  width: 100%;

  small {
    font-size: 14px;
    margin-top: 20px;

    a {
      color: ${colors.primary};
    }
  }
`;
