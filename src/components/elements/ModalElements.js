import styled from 'styled-components';
import { orange } from '../../utilities';

export const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalInner = styled.div`
  max-width: 450px;
  width: 450px;
  min-height: 250px;
  border-radius: 6px;
  background-color: #fff;
  padding-bottom: 30px;
`;

export const Header = styled.div`
  font-size: 2.2rem;
  width: 100%;
  background-color: orange;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const SocialLoginWrapper = styled.div`
  font-size: 1.7rem;
  margin: 0 auto;
  height: 60px;
  width: 90%;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const SocialIcon = styled.img`
  display: inline-block;
  margin-right: 50px;
  width: 30px;
  height: 30px;
`;

export const StyledForm = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const SubmissionError = styled.span`
  color: red;
  font-size: 1.4rem;
  margin-bottom: 20px;
`;
