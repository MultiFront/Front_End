import React,{ useState }from 'react';
import { Container, Row } from 'reactstrap'
import '../styles/mypage.css'
import Profile from './Mypage/Profile';
import MatchedList from './Mypage/matchedlist';
import BookedList from './Mypage/BookedList';
import Resignmember from './Mypage/resignmember';
import Inqury from './Mypage/inqury';
import Favoritelist from './Mypage/favoritelist';
import { motion } from 'framer-motion';


const Mypage = () => {

  const MypageMenu = [
    {
      id: 1,
      text: '프로필',
      name: 'MyProfile',
      },
      {
      id: 2,
      text: '매치내역',
      name: 'MatchedList',
      },
      {
      id: 3,
      text: '예약내역',
      name: 'BookedList',
      },
      {
      id: 4,
      text: '내가찜한목록',
      name: 'FavoriteList',
      },
      {
      id: 5,
      text: '1:1문의 내역',
      name: 'Inqury',
      },
      {
      id: 6,
      text: '회원탈퇴',
      name: 'ResignMember',
      },
  ];


  function Hi(){
    return(
      <Profile />
    )
  }

  const [content, setContent] = useState(() => Hi());

  const handleClickButton = e => {
      const { name } = e.target;
      setContent(name);
  };
  

  const selectComponent = {
    MyProfile: <Profile />,
    MatchedList: <MatchedList/>,
    BookedList: <BookedList />,
    FavoriteList: <Favoritelist />,
    Inqury: <Inqury />,
    ResignMember:  <Resignmember />,
  };

  return (
    <Container>
      <Row className='m40'>
        <div className='mypage__list'>
        {MypageMenu.map(data => {
            return (
              <motion.button whileTap={{scale:1.1}} onClick={handleClickButton} name={data.name} key={data.id}>
                {data.text}
              </motion.button>
            );
          })}
        </div>


         {content || <div>{selectComponent[content]}</div>}

      </Row>
    </Container>
  );
}

export default Mypage
