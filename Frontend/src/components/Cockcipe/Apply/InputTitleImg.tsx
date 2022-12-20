import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export const InputTitleImg = () => {
  const [files, setFiles] = useState<File | null>(null);
  const [imgSrc, setImgsrc] = useState<string>();
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
      await axios
        .post('http://localhost:8000/image-upload', {
          folder: 'seeun-test',
          formData,
        })
        .then((res) => {
          console.log(res);
          axios
            .put(`${res.data}`, {
              header: {
                'Content-Type': file.type,
              },
            })
            .then((res) => console.log(res.status));
        });
    }
  };
  return (
    <>
      <div>
        <label htmlFor="input_img">대표 사진 등록하기</label>
        <input type="file" id="input_img" onChange={onChooseImg} />
      </div>
      <PreviewImg>
        {imgSrc && <img src={imgSrc} alt="preview" width="300" height="300" />}
      </PreviewImg>
    </>
  );
};

const PreviewImg = styled.div``;
