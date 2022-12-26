import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { boolean } from 'yup';
import { Center } from './style';

interface btnType {
    linkto: string | boolean,
    type?: string,
    deleteFn?(): void,
    pageId?: number
}

export const CockflowEnrollBtns = ({ linkto = "/cockflow", type = "enroll", pageId }: btnType) => {
    const deleteFn = async () => {
        await axios.delete(`/api/cockflow/${pageId}`)
            .then(() => {
                alert('삭제되었습니다.');
                window.location.replace(`/cockflow`);
            }).catch(() => alert('권한이 없습니다.'))
    };

    return (
        <Center>
            {
                type === "enroll"
                    // window.location.pathname === '/cockflow/new'
                    ?
                    <>
                        <Button type='submit' variant="contained">등록하기</Button>
                        &nbsp;&nbsp;
                        <Link to={`${linkto}`}>
                            <Button variant="outlined">취소하기</Button>
                        </Link>
                    </>
                    :
                    <>
                        <Button type='button' variant="contained">수정하기</Button>
                        &nbsp;&nbsp;
                        <Button type='button' variant="outlined" onClick={deleteFn}>삭제하기</Button>
                    </>
            }
        </Center>
    );
};
