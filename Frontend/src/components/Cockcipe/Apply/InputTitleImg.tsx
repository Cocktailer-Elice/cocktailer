import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

// TODO aws 업로드 후 반환 이미지 url 받아오기
export const InputTitleImg = ({ setImg, img }: any) => {
  const [imgSrc, setImgsrc] = useState<string>(img ? img : '');
  const onChooseImg = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // 미리보기
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (e) => {
        const res = e?.target?.result as string;
        setImgsrc(res);
      };
      // 업로드
      const formData = new FormData();
      formData.append('image', file);
      axios
        .post('http://localhost:8000/api/image-upload', {
          folder: 'seeun-test',
        })
        .then((res) => {
          console.log(new URL(res.data).pathname.split('/')[2]);
          setImg(new URL(res.data).pathname.split('/')[2]);
          axios
            .put(`${res.data}`, file, {
              headers: {
                'Content-Type': file.type,
              },
              withCredentials: false,
            })
            .then((res) => console.log(res.status));
        });
    }
  };
  return (
    <ImgContainer>
      <>
        <label htmlFor="input_img">
          <InsertImg>대표 사진 등록</InsertImg>
        </label>
        <input
          type="file"
          id="input_img"
          style={{ display: 'none' }}
          onChange={onChooseImg}
        />
      </>
      <PreviewImg>
        {imgSrc && <img src={imgSrc} alt="preview" width="300" height="300" />}
      </PreviewImg>
    </ImgContainer>
  );
};

const PreviewImg = styled.div``;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const InsertImg = styled.div`
  border: #087f5b solid 5px;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;

  &:hover {
    color: white;
    border: #38d9a9 solid 5px;
    background-color: #38d9a9;
  }
`;
