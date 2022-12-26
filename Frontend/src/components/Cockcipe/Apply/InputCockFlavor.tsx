import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface Props {
  setFlavor: React.Dispatch<React.SetStateAction<string[]>>;
  flavor: string[];
}

export const InputCockFlavor = ({ setFlavor, flavor }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [tag, setTag] = useState<string | null>('');

  const [tagList, setTagList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newTag = inputRef.current?.value;
    console.log(flavor);
    if (newTag?.length !== 0 && e.key === 'Enter') {
      setTagList((item) => [...item, newTag]);
      setFlavor((item) => [...item, newTag]);
      setTag('');
    }
  };

  // TODO : key 값 변경하고 삭제 아이템 아이디로 삭제하기
  const deleteTagItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const deleteTagItem = event.target.parentElement.firstChild.innerText;
    const filteredTagList = tagList?.filter(
      (tagItem) => tagItem !== deleteTagItem,
    );
    setTagList(filteredTagList);
  };

  return (
    <>
      <p>Flavor</p>
      <TagBox>
        {flavor
          ? flavor.map((tagItem, index) => {
              return (
                <TagItem key={index}>
                  <Text>{tagItem}</Text>
                  <Button onClick={deleteTagItem}>X</Button>
                </TagItem>
              );
            })
          : tagList.map((tagItem, index) => {
              return (
                <TagItem key={index}>
                  <Text>{tagItem}</Text>
                  <Button onClick={deleteTagItem}>X</Button>
                </TagItem>
              );
            })}
        <TagInput
          type="text"
          placeholder="Press enter to add tags"
          tabIndex={2}
          onChange={handleChange}
          ref={inputRef}
          value={tag}
          onKeyPress={handleKeyPress}
        />
      </TagBox>
    </>
  );
};

const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 50px;
  margin: 10px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  &:focus-within {
    border-color: #868e96;
  }
`;

const Text = styled.span``;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: #ddd;
`;
const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #4c6ef5;
  border-radius: 5px;
  color: white;
  font-size: 13px;
`;
const TagInput = styled.input`
  display: inline-flex;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
`;
