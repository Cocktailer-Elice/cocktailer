import styled from 'styled-components';

interface WidgetProps {
  title: string;
  emoji: string;
}

export const HomeWidget = ({ title, emoji }: WidgetProps) => {
  return (
    <Widget>
      <Emoji>{emoji}</Emoji>
      <Title>{title}</Title>
    </Widget>
  );
};

const Widget = styled.div`
  width: 80px;
  height: 80px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.indigo4};

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 500px) {
    width: 70px;
    height: 70px;
    font-size: 11px;
  }
`;

const Emoji = styled.div`
  width: 50px;
  height: 30px;

  font-size: 20px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
`;

const Title = styled.div`
  width: 50px;
  height: 30px;

  color: white;
  font-size: 12px;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 45px;
    height: 45px;
    font-size: 11px;
  }
`;
