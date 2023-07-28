import React from 'react'
// import MainNavigation from './MainNavigation'
import MainNavi from './MainNavi'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout(props) {
  return (
    <div>
    {/* <MainNavigation /> */}
    <MainNavi />
    <main className='wrapper'>
      {props.children}
    </main>
    <Footer/>
    </div>
  )
}

export default Layout