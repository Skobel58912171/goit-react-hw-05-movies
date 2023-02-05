import styled from 'styled-components';

const Thumb = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background-color: #3377ff;
`;
const Form = styled.form`
  display: flex;
  width: 450px;
`;

const Input = styled.input`
  display: block;
  outline: none;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 20px;
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-left: 0;
  border-radius: 0.25rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    border: 2px solid #0000ff;
    outline: none;
  }
`;
const Btn = styled.button`
  display: inline-block;
  position: relative;
  color: #a9a9a9;
  text-align: center;
  vertical-align: baseline;
  cursor: pointer;
  user-select: none;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus,
  &:hover {
    color: #0000ff;
  }
`;

export { Thumb, Form, Input, Btn };
