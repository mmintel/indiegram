import styled from '@emotion/styled';

export default styled.div`
  max-width: ${(props) => (props.small ? '815px' : '935px')};
  padding-left: 20px;
  padding-right: 20px;
  width: calc(100% - 40px);
  margin: 0 auto;
`;
