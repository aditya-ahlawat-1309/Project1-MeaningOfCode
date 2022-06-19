import React from 'react'
import Banner from './Banner'
import Nav from './Nav'
import Taskbar from './Taskbar'

function Vision() {
    return (
        <div style={{backgroundColor: "#0085A0"}}>
        <Nav/>
        <Banner/>
        <Taskbar/>
        <div style={{backgroundColor:"#0085A0",height:"100%",width:"100%",color:"white"}}>
        
        <h1 style={{fontSize:"2.35rem",marginLeft:"7.5%"}}>VISION : </h1>
       

        <p style={{
           backgroundColor: "#0085A0",

 fontSize:"1.25rem",width:"75%",marginLeft:"12.5%",paddingTop:"1rem"}}>
            "We believe that we are on the face of the earth 
            to make great products and that's not changing. 
            We are constantly focusing on innovating. 
            We believe in the simple not the complex. 
            We believe that we need to own and control 
            the primary technologies behind the products 
            that we make, and participate only in markets 
            where we can make a significant contribution. 
            We believe in saying no to thousands of projects, 
            so that we can really focus on the few that are 
            truly important and meaningful to us. We believe 
            in deep collaboration and cross-pollination of our 
            groups, which allow us to innovate in a way that others 
            cannot. And frankly, we don't settle for anything less 
            than excellence in every group in the company, and we have 
            the self-honesty to admit when we're wrong and the courage 
            to change. And I think regardless of who is in what job those 
            values are so embedded in this company that Meaning OC will do 
            extremely well."<br/><br/><span style={{marginLeft:"150px"}}>- Aditya, CEO of MEANING OF CODE</span>
        </p>
        </div>
        </div>
    )
}

export default Vision
