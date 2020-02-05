import styled from '@emotion/styled';
import { css } from '@emotion/core';

export default styled.div`
  display: inline-block;
  border-radius: 100%;
  overflow: hidden;
  max-width: 150px;
  max-height: 150px;
  flex-shrink: 0;

  ${(props) => props.size === 'small' && css`
    max-width: 42px;
    max-height: 42px;
  `}
`;
