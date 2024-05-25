import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0;
  background-color: transparent;
  width: 332px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`;

export const Primary = styled.div`
  flex: 1;
  border-radius: 8px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px;
  box-sizing: border-box;
  max-width: 100%;
  white-space: nowrap;
`

export const Text = styled.div`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  font-family: 16px;
  color: #fff;
  text-align: left;
`