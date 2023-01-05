import styled from  'styled-components'

export const NewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 30 0;
  border-radius: 50%;
`

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

