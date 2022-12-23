import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Center } from './style';

export const CockflowEnrollBtns = () => {
    return (
        <Center>
            {
                window.location.pathname === '/cockflow/new'
                    ?
                    <>
                        <Button type='submit' variant="contained">등록하기</Button>
                        &nbsp;&nbsp;
                        <Link to='/cockflow'>
                            <Button variant="outlined">취소하기</Button>
                        </Link>
                    </>
                    : null
            }
        </Center>
    );
};
