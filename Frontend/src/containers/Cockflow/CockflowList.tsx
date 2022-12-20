
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowItemBox } from '../../components/Cockflow/CockflowItemBox';
import { P5 } from '../../components/Cockflow/style';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3,129px);
  -webkit-column-gap: 29px;
  column-gap: 20px;
`;

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28.9px;
`;

const mockData1 = [
    {
      id: '1',
      title: 'string1',
    }, {
      id: '2',
      title: 'string2',
    }, {
      id: '3',
      title: 'string3',
    }, {
      id: '4',
      title: 'string4',
    },{
      id: '5',
      title: 'string4',
    },{
      id: '6',
      title: 'string4',
    },{
      id: '7',
      title: 'string4',
    },{
      id: '8',
      title: 'string4',
    },{
      id: '9',
      title: 'string4',
    },{
      id: '10',
      title: 'string4',
    },{
      id: '11',
      title: 'string4',
    },{
      id: '12',
      title: 'string4',
    }
]

const imgArr = [
  'https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg',
  'https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/01/02/04/58/martini-1117932_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/11/29/01/38/ice-1068233_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/04/08/13/17/glass-3301200_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/03/06/07/01/drink-3202709__340.jpg',
  'https://cdn.pixabay.com/photo/2015/07/23/19/23/cocktail-857393__340.jpg',
  'https://cdn.pixabay.com/photo/2018/03/18/18/54/drink-3237895__340.jpg'
];

export const CockflowList = () => {
  const [data, setData] = useState([{
    id: '0',
    title: '',
  }]);

  useEffect(() => {
    //axios.get 호출
    // axios.get(`http://localhost:8000/cockflow/?q=1`)
    //   .then(res => setData(res.data.data));
    setData(mockData1)
  }, []);

  return (
    <P5>
      <CockflowHeader />
      <CockflowLinkBtn link="/cockflow/new" title="질문하기" />
      <List>
        {data.map((item, index) => {return (
              <Item>
                <CockflowItemBox key={item.id} id={item.id} title={item.title}
                  content={imgArr[Math.round(Math.random()*(imgArr.length-1))]}/>
              </Item>
            )
          }
        )}
      </List>
      <List>
        {data.map((item, index) => {return (
              <Item>
                <CockflowItemBox key={item.id} id={item.id} title={item.title}
                  content={imgArr[Math.round(Math.random()*(imgArr.length-1))]}
                />
              </Item>
            )
          }
        )}
      </List>
    </P5>
  );
};