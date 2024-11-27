import React from 'react'
import HeaderFunction from './components/HeaderFunction'
import FooterFunction from './components/FooterFunction'
import MainFunction from './components/MainFunction';

//Router
import {Navigate, Route, Routes, RouterProvider} from 'react-router-dom';

function RouterBlog() {
  return (
    <React.Fragment>


        <HeaderFunction name = "Merve" />

        <div className='container'>
            <Routes>
                <Route path={"/"} elementName={<MainFunction/>} />        //Ana sayfam bu olsun diyorum
                <Route path={"/index"} elementName={<MainFunction/>} />   
                <Route path={"/*"} elementName={<Navigate to={"/"} />} />          //Ne gelirse gelsin burada göster diyorum
            </Routes>
        </div>


        <MainFunction/>

        <FooterFunction/>


    </React.Fragment>
  )
}


export default RouterBlog