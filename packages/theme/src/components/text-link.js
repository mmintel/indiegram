import styled from '@emotion/styled';
import { Display } from '@mmintel/gatsby-theme-indiegram';

export default styled(Display)`
  cursor: pointer;
  color: ${(props) => props.theme.color.link};

  &:hover {
    color: ${(props) => props.theme.color.linkHover};
    text-decoration: underline;
  }
`;
