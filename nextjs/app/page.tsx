"use client";
import Cursor from './components/Cursor'
import Title from './components/Title'
import { useEffect, useRef } from 'react';
import './locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';

export default function Home() {
  const container = useRef(null);
  const scroll = new LocomotiveScroll();
  useEffect(() => {
    const smooth = new LocomotiveScroll({
      el: document.querySelector('#test'),
      smooth: true
    });
  }, []);
  return (
    <>
    <Cursor />
    <div id="test">
      <div className="place-items-center grid h-screen">
        <Title />
      </div>
      <div className="place-items-center grid h-screen">
        <h1 className="text-8xl font-extrabold text-white">EPIC TEST</h1>
      </div>
    </div>
    </>
    )
}