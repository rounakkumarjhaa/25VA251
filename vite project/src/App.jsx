import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Demo from './component/Demo'
import Props from './component/Props'

function App() {
  const name = "ABESEC";

  const students = [ 
    { name: "Vinay", rollno: "250", course: "B.Tech" },
    { name: "Ravi", rollno: "251", course: "B.Tech" },
    { name: "Suman", rollno: "252", course: "B.Tech" }
  ];

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>Hello {name}</h2>
      <Demo /> 
      <Props 
        name="Vikas" 
        rollno="2503215400218" 
        course="B.Tech" 
        students={students} 
      />

      <UseState />
    </>
  );
}

export default App;