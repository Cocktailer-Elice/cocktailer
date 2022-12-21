import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';

export const InputCockFlavor = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [tag, setTag] = useState<string | null>('');
  const [tagList, setTagList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(inputRef.current);
    setTag(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newTag = inputRef.current?.value;
    if (newTag?.length !== 0 && e.key === 'Enter') {
      setTagList((item) => [...item, newTag]);
      setTag('');
    }
  };

  const deleteTagItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event.target.parentElement.firstChild.innerText);
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
        {tagList?.map((tagItem, index) => {
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
