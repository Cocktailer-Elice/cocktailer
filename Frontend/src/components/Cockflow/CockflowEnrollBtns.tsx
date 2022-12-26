import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Center } from './style';

export const CockflowEnrollBtns = ({ linkto = "/cockflow", type = "enroll" }) => {

    return (
        <Center>
            {
                type === "enroll"
                    // window.location.pathname === '/cockflow/new'
                    ?
                    <>
                        <Button type='submit' variant="contained">등록하기</Button>
                        &nbsp;&nbsp;
                        <Link to={linkto}>
                            <Button variant="outlined">취소하기</Button>
                        </Link>
                    </>
                    :
                    <>
                        <Button type='button' variant="contained">수정하기</Button>
                        &nbsp;&nbsp;
                        <Button type='button' variant="outlined">삭제하기</Button>
                    </>
            }
        </Center>
    );
};
