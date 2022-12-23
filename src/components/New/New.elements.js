import styled from  'styled-components'

export const NewTitle = styled.h1`
    margin-left: 38%;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 600;
  color:'#f7f8fa' ;
`

export const NewImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;

`

export const NewSec = styled.div`
  padding: 250px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #7293A0;
`;

export const NewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 820px) {
    
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  &::placeholder {
    color: #242424;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

