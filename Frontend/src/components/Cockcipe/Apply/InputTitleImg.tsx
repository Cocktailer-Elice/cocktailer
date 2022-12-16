import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const InputTitleImg = () => {
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

export default InputTitleImg;

const PreviewImg = styled.div``;
