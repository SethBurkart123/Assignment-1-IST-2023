"use client";
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const cursorCenterRef = useRef(null)
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null)
      return;
    const moveCursor = (e: any) => {
      requestAnimationFrame(() => {
        cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
        cursorCenterRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
      });
    };
    document.addEventListener('mousemove', moveCursor);

    document.addEventListener('mousedown', () => {
      cursorRef.current.classList.add("expand");
    })
    document.addEventListener('mouseup', () => {
      cursorRef.current.classList.remove("expand");
    })
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
    }, [])
  return (
    <>
      <div className='cursor cursor-dot' ref={cursorCenterRef}></div>
      <div className='cursor cursor-shadow' ref={cursorRef}></div>
    </>
  )
  }