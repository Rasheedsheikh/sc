import styled from "styled-components";

export const StyledButton = styled.button`
border-radius: ${({ radius }) => radius};
padding: ${({ padding }) => padding};

background-color: ${({ bgColor }) => bgColor};
border: ${({ border }) => `1px ${border} #111`};
color: ${({ color }) => color};
`;