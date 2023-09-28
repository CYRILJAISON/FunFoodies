import React from 'react'
import Nav from '../Nav/Nav'
import style from '../About/About.module.css'

export const About = () => {
  return (
    <div>
      <Nav />
      <section style={{ backgroundColor: '#ffcc00', width: '100%', minHeight: '100vh' }}>
      <h2 className={style.text}>ABOUT FUN FOODIES</h2>
      <br />

      <ol>We are a dedicated team working for the satisfaction of our investors and customers</ol>
      <ol>We are equipped with highly talented employees to cater the needs of our customers and bring profit to the investment partners</ol>
      <ol>We are hardworking , smart thinking team using advanced technology to achieve the highest level </ol>
      <ol>Our goal is to provide the best food at affordable price with no compromise in QUALITY</ol>
      <div>
        <span>
          <h1 className={style.heading}>EXECUTIVE TEAM AND BOARD MEMBERS</h1>
          <br />
          <h3>FOUNDERS : Mr. KARTHIKEYAN & Mr. SELVAM</h3>
          <br />
          <h3>CEO : Ms. RAJATHILAGAM </h3>
          <br />
          <h3>ADMIN OFFICER : Mrs. YUVAMANI </h3>
          <br />
          <h3>MANAGER   :  Mrs. SUMAYA</h3>
        </span>
      </div>
    </section>
    </div>
  )
}
