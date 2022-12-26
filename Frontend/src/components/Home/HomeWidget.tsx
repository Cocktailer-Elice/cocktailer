import styled from 'styled-components';

interface WidgetProps {
  title: string;
}

export const HomeWidget = ({ title }: WidgetProps) => {
  return <Widget>{title}</Widget>;
};

const Widget = styled.div`
  width: 80px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.indigo4};

  color: white;
  font-size: 12px;
  font-weight: 600;

  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 500px) {
    width: 70px;
    height: 70px;
    font-size: 11px;
  }
`;
