/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import './Reviews.css';

export default function Reviews() {
  return (
    <div className="screen-container">
      <div className='Skin'>
        <h1 className='ReviewTag'>Reviews</h1> 
        <h2 className='SecondTag'>I try to make all my clients satisfied with my work</h2> 
        <a href='https://www.instagram.com/gameovershop.almaty/'><div className='Rev1'></div></a>
        <a href='https://www.instagram.com/p/CcCctBuNFaf/'><div className='Rev2'></div></a>
        <a href='https://www.instagram.com/p/CcCctBuNFaf/'><div className='Rev3'></div></a>
        <a href='https://www.instagram.com/sabina_sanber/'><div className='Rev4'></div></a>
        <a href='https://api.whatsapp.com/send/?phone=77777060077&text&app_absent=0'><button className='Whatsapp'>Whatsapp</button></a>
        <a href='https://gazetaingush.ru/sites/default/files/styles/juicebox_small/public/pubs/obshchestvo/20170111-bytovye-zametki-ili-priglashenie-k-razmyshleniyu/spasibooo.jpg?itok=xjt_Cv9h'><button className='Call'>Call</button></a>
      </div>
    </div>
  );
}
