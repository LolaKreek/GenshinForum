import styled from  'styled-components'


export const SignUpSec = styled.div`
  padding: 250px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #7293A0;
`;

export const SignUpContainer = styled.div`
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

export const Valid = styled.span`
    font-size: 12px;
    color: red;
    margin-top: 10px;
`
