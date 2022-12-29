import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const BartenderBadge = styled(CheckCircleIcon)`
  margin-left: 3px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.indigo4};
`;
