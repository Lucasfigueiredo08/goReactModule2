 import styled from 'styled-components';

 export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* flex-direction: row !important; */
  justify-content: start;

  align-items: center;
  margin-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
 `;

 export const Repository = styled.div`
  width: 250px;
  background: #FFF;
  border-radius: 3px;

  margin: 0px 10px 20px;

  display: flex;
  flex-direction: column;

    header {
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;

        img {
          width: 64px;
        }

        strong {
          font-size: 24px;
          margin-top: 10px;
        }

        small {
          font-size: 14px;
          color: #666;
        }
    }



    ul {
      list-style: none;

      li {
      font-weight: bold;
      padding: 12px 20px;

          small {
            font-weight: normal;
            font-size: 12px;
            color: #999;
            font-style: italic;
          }

          &:nth-child(2n - 1) {
            background: #f5f5f5;
          }
      }
    }

    div.buttons-container {
      padding: 10px 20px;
      display: flex;
      justify-content: space-around;

      button {
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;

        i{
          margin-right: 3px;
        }

        &:nth-children(2n) {
          border: 1px solid #c11927;
          color: #c11927;

          &:hover {
            background: #aa1622;
            color: #FFF;
          }
        }

        &:nth-children(2n - 1) {
          border: 1px solid #116088;
          color: #116088;

          &:hover {
            background: #0e5071;
            color: #FFF;
          }
        }
      }
    }
 `;


