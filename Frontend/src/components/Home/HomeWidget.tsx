import styled from 'styled-components';

interface WidgetProps {
  title: string;
}

export const HomeWidget = ({ title }: WidgetProps) => {
  return <Widget>{title}</Widget>;
};

const Widget = styled.div`
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.indigo2};

  color: white;
  font-size: 11px;
  font-weight: 600;

  :hover {
    opacity: 0.5;
  }
`;
