import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { boolean } from 'yup';
import { COCKFLOW_ID } from '../../constants/api';
import { Center } from './style';

interface btnType {
    linkto: string | boolean,
    typeBtn?: string,
    editFn?(): void,
    pageId?: number
    updateAxios?(): void
}

interface putType {
    "title": string,
    "content": string
}

export const CockflowEnrollBtns = ({ linkto = "/cockflow", typeBtn = "button", pageId, editFn, updateAxios }: btnType) => {
    const deleteFn = async () => {
        if (confirm('삭제하시겠습니까?') && pageId) {
            await axios.delete(COCKFLOW_ID(pageId))
                .then(() => {
                    alert('삭제되었습니다.');
                    window.location.replace(`/cockflow`);
                }).catch(() => alert('권한이 없습니다.'))
        }
    };

    const refresh = (): void => {
        window.location.replace(`/cockflow/detail/${pageId}`);
    }

    return (
        <Center>
            {
                (typeBtn === "submit")
                && (
                    <>
                        <Button
                            type={`${typeBtn}`}
                            variant="contained"
                        >
                            등록하기
                        </Button>
                        &nbsp;&nbsp;
                        <Link to={`${linkto}`}>
                            <Button variant="outlined">취소하기</Button>
                        </Link>
                    </>
                )
            }

            {
                typeBtn === "button"
                && (
                    <>
                        <Button
                            type={`${typeBtn}`}
                            variant="contained"
                            onClick={updateAxios}
                        >
                            수정완료
                        </Button>
                        &nbsp;&nbsp;
                        <Button type='button' variant="outlined" onClick={refresh}>취소하기</Button>
                    </>
                )
            }
            {
                (typeBtn === "edit")
                && (
                    <>
                        <Button type='button' variant="contained" onClick={editFn}>수정하기</Button>
                        &nbsp;&nbsp;
                        <Button type='button' variant="outlined" onClick={deleteFn}>삭제하기</Button>
                    </>
                )
            }
        </Center>
    );
};
