import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const QuizWrapper = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  line-height: 18px;
  letter-spacing: 0.02em;
  font-size: 19px;
  font-weight: 900;
  margin-left: 500px;
  margin-right: 12px;
  background-color: rgba(244, 128, 35, 1);
  color: #fff;
  border-radius: 15px;
`;
export const CustomNextButton = styled(SubmitButton)`
    width: 250px;
    height: 52px;
    border: none;
    line-height: 18px;
    letter-spacing: 0.02em;
    font-size: 19px;
    font-weight: 900;
    
    margin-right: 12px;
    color: #fff;
    border-radius: 15px;
    margin-left: 0px;
    margin-top: 25px;
    background-color: rgba(96, 102, 208, 1);
    box-shadow: 20px 10px 20px 0px rgb(0 0 0 / 25%);
}
 
  margin-left: 0px;
  margin-top: 25px;
  background-color: rgba(41, 47, 54, 1);
  box-shadow: 20px 10px 20px 0px rgba(192, 192, 192, 0.35);
`;

export const Title = styled.div`
  text-shadow: -2px -1px 5px rgba(108, 99, 255, 0.47);
  font-family: Inter;
  font-size: 35px;
  color: rgba(96, 102, 208, 1);
  font-weight: 900;
  line-height: 60px;
  letter-spacing: 0.02em;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Label = styled.div`
  margin-bottom: 40px;
  font-size: 25px;
  font-weight: 610;
  color: rgba(96, 102, 208, 1);
  text-shadow: -2px -1px 5px rgba(108, 99, 255, 0.47);
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const Quiz = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-weight: 100;
  color: black;
  text-shadow: 0 0 black;
`;

export const Option = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
  gap: 3px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 25px;
  width: 240px;
  border-radius: 30px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.23);

  flex-direction: column;
  align-content: center;
  align-items: center;
  border-color: black;
  background-color: white;
  color: black;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  font-size: 30px;
  font-weight: 700;
  width: 20px;
  height: 20px;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  margin-top: 50px;
`;

export const MaskContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #eee;
  margin-bottom: 10px;
  box-shadow: 1px 1px 7px 2px darkgray;
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(252, 168, 47, 1);
  border-radius: 100% 0 0 100% / 50% 0 0 50%;
  transform-origin: 100% 50%;
  transition: transform 1s linear;
`;

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SolvedQuestions = styled.div`
  width: 20%;
  padding: 20px;
`;

export const QuizArea = styled.div`
  width: 60%;
  padding: 20px;
`;

export const TimerArea = styled.div`
  width: 20%;
  padding: 20px;
`;

export const SolvedContainer = styled.div`
  margin-right: "20px";
`;

export const Barbox = styled.div`
  margin-top: 10px;
  width: 150px;
  height: 15px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 4px darkgray;
`;

export const TimerCircle = styled.div`
  width: ${(props) => props.progress * 100}%;
  height: 100%;
  background-color: rgba(252, 168, 47, 1);
  border-radius: 5px;
`;

export const TimerWrapper = styled.div`
  margin-left: 30px;
`;

export const CardBox = styled.div`
  margin: 3rem 0;
  text-align: left;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 30%;
  padding: 1.5rem;
  border: 0.5px solid #eaeaea;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const CardHeader = styled.h4`
  border-bottom: 1px solid #eaeaea;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
`;

export const CardList = styled.ul`
  line-height: 1.5rem;
  color: #006fc0;
  margin: 1rem 0 0 1.5rem;
  list-style: disc;

  & li + li {
    margin-top: 1rem;
  }
`;

export const Br = styled.span`
  display: inline-block;
`;

export const Blue = styled.span`
  color: #006fc0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  padding-top: 80px;
  justify-content: space-between;
  padding-top: 10px;
`;

export const InputWrapper = styled.div`
  padding-top: 10px;
`;
