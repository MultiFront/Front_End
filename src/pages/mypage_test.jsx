import React,{ useState }from 'react';
import { Container, Row } from 'reactstrap'


const MypageTest = () => {

  const MypageMenu = [
    {
      id: 1,
      text: '1번',
      name: 'first',
      },
      {
      id: 2,
      text: '2번',
      name: 'second',
      },
      {
      id: 3,
      text: '3번',
      name: 'third',
      },
      {
      id: 4,
      text: '4번',
      name: 'fourth',
      },
  ];
  const [content, setContent] = useState();

  const handleClickButton = e => {
      const { name } = e.target;
      setContent(name);
  };
  

  const selectComponent = {
    first: '1번',
    second: '2번',
    third: '3번',
    fourth: '4번',
    fifth: '5번',
  };

  return (
    <Container>
      <Row className='m40'>
      {MypageMenu.map(data => {
          return (
            <button onClick={handleClickButton} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
        <div>
        {content && <div>{selectComponent[content]}</div>}
        </div>
      </Row>
    </Container>
  );
}

export default MypageTest
