import styled from 'styled-components'

export const Container = styled.button`
  width: ${props => props.width ? props.width : '180px'};
  height: ${props => props.height ? props.height : '50px'};
  background-color: ${props => props.color ? props.color : 'var(--secondary)'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '6px'};
  margin: ${props => props.margin ? props.margin : '0'};
  padding: ${props => props.padding ? props.padding : '0'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const Text = styled.h3`
  font-size: ${props => props.fontSize ? props.fontSize : '16px'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
  color: ${props => props.textColor ? props.textColor : '#FFFFFF'};
`;