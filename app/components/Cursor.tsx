"use client";
import { useEffect, useRef } from 'react'
import './Cursor.css';

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
        cursorRef.current.classList.remove("disabled");
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
      <div style={{top: "-80px", left:"-80px"}} className='cursor cursor-dot' ref={cursorCenterRef}></div>
      <div style={{top: "-80px", left:"-80px"}} className='cursor cursor-shadow disabled' ref={cursorRef}></div>
    </>
  )
  }