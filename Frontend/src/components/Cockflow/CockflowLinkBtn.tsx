import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Right } from './style'

type btnProps = {
    link: string,
    title: string
}

export const CockflowLinkBtn = ({link, title}:btnProps) => {
  return (
    <Right>
        <Link to={link}>
            <Button variant="contained">{title}</Button>
        </Link>
    </Right>
  );
};
