import styled from 'styled-components';

export const AvatarPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  padding: 0.5rem;
`;

export const AvatarPreview = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.colors.indigo6}`};
`;
