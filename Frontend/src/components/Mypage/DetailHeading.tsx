import styled from 'styled-components';

interface DetailHeadingProps {
  title: string;
}

export const DetailHeading = ({ title }: DetailHeadingProps) => {
  return <Heading>{title}</Heading>;
};

const Heading = styled.h3`
  font-size: 1.5rem;
  padding: 1rem;
  text-align: center;
`;
