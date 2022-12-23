import styled from 'styled-components';

export const Left = styled.div`
    text-align: left;
    padding: 20px 0;
`;

export const Center = styled.div`
    text-align: center;
    padding: 20px 0;
`;

export const Right = styled.div`
    text-align: right;
    padding: 20px 0;
`;

export const Container = styled.div`
    padding: 25px;
`;

export const CommentStyle = styled.textarea`
    position: relative;
    width: 100%;
    padding: 15px;
    line-height: 1.8;
    border: none;
    resize: none;

`;

export const P5 = styled.div`
    padding: 5px;
`;

export const P15B1 = styled.div`
    padding: 15px 20px;
    border-bottom: 1px solid #ddd;
`;

export const P50B1 = styled.div`
    position: relative;
    padding: 0 50px;
    border-top: 1px solid #ddd; 
    margin-top: 15px;
    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 27px;
        left: 40px;
        width: 18px;
        height: 1px;
        background: #ddd;
        z-index: 1;
    }
    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 9px;
        left: 40px;
        width: 1px;
        height: 19px;
        background: #ddd;
        z-index: 2;
    }
`;

export const Middle = styled.div`
    display: flex;
    align-items: center;
`;

export const FlexMiddle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;