import React from 'react'
import '../styles/registration.css';

function Registration() {
  return (
    <div className='regWrap'>
      <div className='regMain'>
        <div className='regBanner'>매칭을 직접 만들어 보세요!</div>
        <div className='regTitle'>
          <h3>매칭 제목을 등록해 주세요</h3>
          <input type="text" placeholder='제목을 입력하시오.'/>
        </div>
        <div className='regSelector'>
          <select name="" id="">
            <option value="">종목</option>
            <option value="">풋살</option>
            <option value="">수영</option>
            <option value="">테니스</option>
            <option value="">배드민턴</option>
            <option value="">탁구</option>
          </select>
          <select name="" id="">
            <option value="">레벨</option>
            <option value="">초급</option>
            <option value="">중급</option>
            <option value="">상급</option>
          </select>
        </div>

      </div>
    </div>
  )
}

export default Registration
