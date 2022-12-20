import styled from 'styled-components';

export const Heading = styled.h3`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10px;
`;

export const HeadingGrid = styled.div`
  border: 1px solid #ddd;
`;

export const HeadingLeft = styled(HeadingGrid)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 0.3rem;
`;

export const HeadingRight = styled(HeadingGrid)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 0.3rem;
`;

export const Avatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
`;

export const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0.5rem;
`;

export const AvatarText = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;

const SectionWrapper = styled.section`
  border: 1px solid #ddd;
  width: 100%;
  height: 100%;
`;
export const Carousel = styled(SectionWrapper)``;
export const Board = styled(SectionWrapper)``;
