import styled from 'styled-components'

export const Container = styled.aside`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);
  border-radius: 0 10px 10px 0;
  box-shadow: 0px 0px 25px -10px #000;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Item = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px 30px;
  justify-content: flex-start;
  font-size: ${props => props.selected ? '25px' : '18px'};
  color: ${props => props.disable ? 'gray' : 'var(--text_color)'};
  cursor: ${props => props.disable ? 'not-allowed' : 'pointer'};
  transition: color, background-color 0.5s;
  
  &:hover {
    color: ${props => props.disable ? 'gray' : 'var(--white)'};
    background-color: ${props => props.disable ? 'transparent' : 'var(--secondary)'};
  }
`;

export const UpperList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-even;
  margin-top: 50px;
`;

export const BottonList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-even;
  margin-bottom: 50px;
`;
