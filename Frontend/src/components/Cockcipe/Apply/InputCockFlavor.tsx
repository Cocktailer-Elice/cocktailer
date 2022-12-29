import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

interface Props {
  setFlavor: React.Dispatch<React.SetStateAction<string[]>>;
  flavor: string[];
}

export const InputCockFlavor = ({ setFlavor, flavor }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [tag, setTag] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newTag = inputRef.current?.value.trim();
    if (tagList.length > 9) {
      alert('태그 그만.. 살려주세요');
      return;
    }
    if (newTag?.length !== 0 && e.key === 'Enter') {
      setTagList((item: any) => [...item, newTag]);
      setFlavor((item: any) => [...item, newTag]);
      setTag('');
    }
  };

  const deleteTagItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLElement;
    const textNode = target.parentElement as HTMLElement;
    const firstNode = textNode.firstChild as HTMLElement;
    const deleteTagItem = firstNode.innerText;
    const filteredTagList = tagList?.filter(
      (tagItem) => tagItem !== deleteTagItem,
    );
    setFlavor(filteredTagList);
    setTagList(filteredTagList);
  };

  return (
    <FlavorWrapper>
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
          placeholder="칵테일 맛을 적어주세요"
          tabIndex={2}
          onChange={handleChange}
          ref={inputRef}
          value={tag}
          required
          onKeyPress={handleKeyPress}
        />
      </TagBox>
      {tagList.length || flavor.length ? (
        ''
      ) : (
        <Error>칵테일 태그를 달아주세요!</Error>
      )}
    </FlavorWrapper>
  );
};

const FlavorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;
`;
const Error = styled.div`
  color: #f03e3e;
  font-size: 12px;
  font-weight: 800;
`;
const TagBox = styled.div`
  display: flex;
  width: 440px;
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
  width: 20px;
  height: 20px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: #868e96;
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
  font-size: 15px;
`;
const TagInput = styled.input`
  display: inline-flex;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  font-size: 15px;
`;
