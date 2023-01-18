import React from 'react'
import SmallBtn from '../components/UI/SmallBtn'
import '../styles/Personal.css'

function PersonalMain(props) {
  return (
    <div className='Bundle'>
      <span className='titleSection'>
      <span className='FirstSection'>
      <SmallBtn color={props.color} text={props.text}/>
        <span className='TitleQs'><button type='button'>{props.TitleQs}</button></span>
        <span className="material-symbols-outlined">lock</span>
        </span>
        <span className='SecondSection'>
        <span className='nickName'>{props.NickName}</span>
        <span>{props.date}</span>
        </span>
      </span>
    </div>
  )
}

export default PersonalMain
