import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  flex-direction: column;
  max-height: 300px;
  overflow-y: scroll;
  margin: 30px 0;
`;

export const Row = styled.div`
  width: 100%;
  justify-content: space-between;
  background-color: ${props => props.disclaimer ? 'var(--secondary)' : 'red'};
  margin: 5px 0;
  border-radius: 5px;
`;

export const Text = styled.div`
  width: 25%;
  max-width: 22%;
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  padding: 5px 8px;
  color: var(--white);
  span {
    color: var(--primary);
    font-size: 11px;
  }
`;
