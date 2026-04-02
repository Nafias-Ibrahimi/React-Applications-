// import React from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// function Card({ title, children }) {
//   return (
//     <div className="card">
//       <h1>{title}</h1>
//       {children}
//     </div>
//   );
// }

// function PageLayout({ header, content, footer }) {
//   return (
//     <>
//       <header>{header}</header>
//       <main>{content}</main>
//       <footer>{footer}</footer>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       {/* <Header/>
//     <Card title={'profile'} >
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nihil magnam quod saepe sed! Reprehenderit consequatur dolorum maiores quisquam aliquid necessitatibus suscipit odio? Eius incidunt impedit distinctio illum harum magni.</p>

//     </Card>

//       <Footer/>  */}
//       <PageLayout
//         header={<h1>Dashboard</h1>}
//         content={
//           <p>
//             {" "}
//             <Card title={"profile"}>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
//                 nihil magnam quod saepe sed! Reprehenderit consequatur dolorum
//                 maiores quisquam aliquid necessitatibus suscipit odio? Eius
//                 incidunt impedit distinctio illum harum magni.
//               </p>
//             </Card>
//           </p>
//         }
//         footer={<small>Copy@2026</small>}
//       ></PageLayout>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// import Button from "./components/Button";
// import Counter from "./components/Counter";
// import BookSearch from './components/BookSearch.jsx'

// import LoginForm from './components/LoginForm';

// function App() {
//   return (
//     <>
//   {/* <Button/> */}
//       {/* <Counter />  */}
//   <BookSearch/>
//       {/* <LoginForm/> */}

//     </>
//   );
// }

// export default App;
// import React from "react";
// import Welcome from "./components/Welcome";
// import Students from "./components/Students";
// import TodoList from "./components/TodoList";
// import UserProfile from './components/UserProfile'
// import Form from './components/Form'
// import Toggle from './components/Toggle'
// import Timer from './components/Timer'

// function App() {
//   return (
//     <div>
//       {/* <Welcome/> */}
//       <Timer/>
// {/*    

//       <Students name="ali" age={24} />
//       <TodoList />
//       <UserProfile/>
//       <Form/> */}
//       {/* <Toggle/> */}
//     </div>
//   );
// }

// export default App;
// import {BrowserRouter, Routes, Route } from 'react-dom'
// function Home(){

// }
// import React from 'react'
// import {BrowserRouter, Routes, Route } from 'react-dom'
// function Home(){
// return <h1>About</h1>
// }
// function About(){
//   return <h1>About</h1>
// }

// function App() {
//   return (
//   <BrowserRouter>
//   <Routes>
//         < Route path='/' element={<About/>}/>
//     < Route path='/About' element={<About/>}/>
//   </Routes>
  
//   </BrowserRouter>
//   )
// }

// export default App

import React from 'react'
import UseRef from './components/UseRef'
import RenderCount from "./components/Routing/RenderCounter";
import UseMemo from './components/Routing/UseMemo';
import UserList from './components/Routing/UserList'
import SortedNumber from './components/Routing/SortNumber'
import Callback from './components/Routing/CallBack'
import ControlledForm from './components/Routing/ControlledForm'
function App() {

  return (
    <div>
        <UseMemo/>
        <UserList/>
        {/* <SortedNumber/> */}
        <Callback/>
        <ControlledForm/>

{/*       
      <UseRef/>
      <RenderCount/> */}
    
    </div>
  )
}

export default App