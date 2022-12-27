import styled from 'styled-components';

export const Heading = styled.h3`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 10px;
`;

export const HeadingGrid = styled.div`
  border: none;
  margin-bottom: 1rem;
`;

export const HeadingLeft = styled(HeadingGrid)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 0.3rem;
  svg {
    transform: scale(1.2);
  }
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
  border: ${({ theme }) => `${theme.colors.indigo6} 1px solid`};
`;

export const AvatarText = styled.span`
  font-size: 0.7rem;
  font-weight: bold;
`;

export const SectionContainer = styled.div`
  width: 100%;
  min-height: 15vh;
  max-height: 25vh;
  margin-bottom: 0.25rem;
  padding: 0.5rem;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 0.3rem;
`;
