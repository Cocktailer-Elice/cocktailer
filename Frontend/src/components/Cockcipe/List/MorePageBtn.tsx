import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  category: string;
}
export const MorePageBtn = ({ category }: Props) => {
  return <Link to={`/cockcipe/category/${category}`}>더보기</Link>;
};
