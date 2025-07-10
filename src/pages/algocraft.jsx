import React from 'react'
import '../style/algocraft.css'
import event from '../assets/imgs/event.png';
import ecommerce from '../assets/imgs/ecommerce.png';
import portfolio from '../assets/imgs/portfolio.png';
import bakery from '../assets/imgs/bakery.png';
import hero from '../assets/imgs/hero.png';
import features from '../assets/imgs/features.png';
import steps from '../assets/imgs/steps.png';
import about from '../assets/imgs/about.png';
import footer from '../assets/imgs/footer.png';
import dsa from '../assets/imgs/dsa.png';
import array from '../assets/imgs/array.png';
import arrayvis from '../assets/imgs/arrayvis.png';
import graph from '../assets/imgs/graph.png';
import gpt from '../assets/imgs/gpt.png';
const images = [
  hero,features,steps,about,footer,dsa,array,arrayvis,graph,gpt];

const algocraft = () => {
  return (
    <div className='bg-dark'>
      <div className="container pt-5 mt-5 ">
        <h1 className='heading '>Algocraft</h1>
        <p className='detail textalign-center text-light'>algocraft</p>
        <div className="masonry">
          <div className="box yellow wide"><img src={images[0]} alt="" /></div>
          <div className="box"><img src={images[1]} alt="" /></div>
          {/* <div className="box yellow tall"><img src={images[2]} alt="" /></div> */}
                  <div className="box yellow"><img src={images[2]} alt="" /></div>

          <div className="box big"><img src={images[3]} alt="" /></div>
          <div className="box"><img src={images[5]} alt="" /></div>
                    <div className="box big"><img src={images[4]} alt="" /></div>
          <div className="box"><img src={images[6]} alt="" /></div>
                    <div className=" box"><img src={images[7]} alt="" /></div>
                    <div className=" box three"><img src={images[8]} alt="" /></div>
                    <div className=" box gpt"><img src={images[9]} alt="" /></div>

          {/* <div className="box"><img src={images[8]} alt="" /></div> */}
        </div>
      </div>
    </div>
  )
}

export default algocraft
