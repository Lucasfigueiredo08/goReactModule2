import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 500px;
  height: 400px;
  align-content: space-between;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #FFF;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
 /* mudança na caixa de pesquisa, caso tenha um error altera para '2px solid #f00 */
    border: ${props => props.withError ? '2px solid #F00' : 0};
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color:#FFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52D89f;
    }
  }
`;
