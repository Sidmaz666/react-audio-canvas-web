"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import {FaSun, FaMoon} from 'react-icons/fa'

export default function ThemeChanger({...props}){
  const [_theme,_setTheme] = useState("")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const checkTheme = () => {
      if(theme){
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if(theme === "system"){
	setTheme(prefersDark ? 'dark' : 'light');
	}
      }
    };
    checkTheme(); 
  }, []);

  useEffect(() => {
	if(theme){
	  _setTheme(theme)
	}
  },[theme])

  const toggleTheme = () => {
    if(_theme == "light"){
	setTheme('dark')
    }
    if(_theme == "dark"){
	setTheme('light')
     }
  }

  return (
    <button onClick={toggleTheme} {...props}>
	{_theme === "light" ? <FaMoon/> : <FaSun/>  }
    </button>
  )
}
