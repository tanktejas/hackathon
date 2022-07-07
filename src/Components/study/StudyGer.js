import React from "react";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import TourIcon from "@mui/icons-material/Tour";
import "./studyGer.css";
import "../main.css";
function StudyGer(props) {
  return (
    <div>
      <div class=" ccc">
        <div class="  uniqq">
          <div class="siz25 itemm ">
            <LiveHelpIcon />
            <div class="fleep">
              <h4>Why {props.title} ?</h4>
            </div>
          </div>
          <div class="siz25 itemm">
            <TourIcon />
            <div class="fleep">
              <h4>Plan Your Visit</h4>
            </div>
          </div>
          <div class="siz25 itemm">
            <AssignmentReturnedIcon />
            <div class="fleep">
              <h4>Living in {props.title} </h4>
            </div>
          </div>
          <div class="siz25 itemm">
            <TravelExploreIcon />
            <div class="fleep">
              <h4>Explore more</h4>
            </div>
          </div>
        </div>
      </div>

      <section
        class="py-5 cta-wrapper bg-cover"
        style={{ background: `url("img/pattern-bg.jpg")` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mb-100">
              <h1 class="page-header text-center font-w-800 text-uppercase">
                Why {props.title} ?
              </h1>
            </div>

            <div class="col-lg-12 text-center">
              <p class="lead">
                What makes Germany the best place to study at? You can get an
                outstanding education that will pave the way to your future
                career. Here, you can completely focus on your goals and realize
                your potential. Four reasons to pick Germany.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 mt-40">
              <div class="icon-box text-center bg-white p-3">
                <img
                  src="img/ic7.png"
                  alt="brand"
                  class="img-icon-cs m-auto my-2"
                />
                <h5 class="mb-2">1</h5>
                <p>FIRST-CLASS EDUCATION</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-40">
              <div class="icon-box text-center bg-white p-3">
                <img
                  src="img/ic9.png"
                  alt="brand"
                  class="img-icon-cs m-auto my-2"
                />
                <h5 class="mb-2">2</h5>
                <p>PRACTICAL APPROACH</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-40">
              <div class="icon-box text-center bg-white p-3">
                <img
                  src="img/ic5.png"
                  alt="brand"
                  class="img-icon-cs m-auto my-2"
                />
                <h5 class="mb-2">3</h5>
                <p>SAFE ENVIRONMENT</p>
              </div>
            </div>
          </div>
          <div class="row">
            
          </div>
          <div class="row">

          
          <div class="col-lg-4 col-md-6 mt-40">
          <div class="icon-box text-center bg-white p-3">
            <img
              src="img/ic6.png"
              alt="brand"
              class="img-icon-cs m-auto my-2"
            />
            <h5 class="mb-2">4</h5>
            <p>OPEN SOCIETY</p>
          </div>
        </div>

            <div class="col-lg-4 col-md-6 mt-40">
              <div class="icon-box text-center bg-white p-3">
                <img
                  src="img/ic1.png"
                  alt="brand"
                  class="img-icon-cs m-auto my-2"
                />
                <h5 class="mb-2">5</h5>
                <p>YOUR WAY</p>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-40">
              <div class="icon-box text-center bg-white p-3">
                <img
                  src="img/ic10.png"
                  alt="brand"
                  class="img-icon-cs m-auto my-2"
                />
                <h5 class="mb-2">6</h5>
                <p>GREAT CAREER AT GERMONEY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container bg-purple m-auto my-4">
      <div className='row'>
      <div className='col-md-12 text-center '>
      <div className='yel h1'><h2 >
      4 STEPS TO {props.title}</h2></div>
      
     <div className='subb'> <p>Would you like to live in Germany for a period of time? You should consider what your goals are for your stay and whether you meet all the requirements. Your daily life should also run as smoothly as possible. To those ends, there are four steps that will get you to Germany.</p> 

    </div> </div></div></div>

    <div class="container bg-purple m-auto my-4" style={{backgroundColor:"#c91349"}}>
      <div className='row'>
      <div className='col-md-12 text-center '>
      <div className='yel h1'><h2 style={{color:"lime"}} >
      1. TYPE OF STAY</h2></div>
      
     <div className='subb'> <p>Every course leads to a certain type of degree. This allows you to start your career.</p> 
     <p>----</p>
     <p>So when you choose your course, you’re also choosing your degree.</p>
     <p>----</p>
     <p>German universities offer many courses of study and suitable degrees.</p>
    </div> </div></div></div>

    <div class="container bg-purple m-auto my-4">
    <div className='row'>
    <div className='col-md-12 text-center '>
    <div className='yel h1'><h2 >
    2. STUDY OPTIONS</h2></div>
    
   <div className='subb'> <p>GET TO KNOW THE HIGHER EDUCATION SYSTEM</p> 
   <p>----</p>
   <p>FIND A COURSE OF STUDY</p>
   <p>----</p>
   <p>DISCOVER UNIVERSITY CITIES</p>
  </div> </div></div></div>


  <div class="container bg-purple m-auto my-4" style={{backgroundColor:"#c91349"}}>
  <div className='row'>
  <div className='col-md-12 text-center '>
  <div className='yel h1'><h2 style={{color:"lime"}} >
  3. CHECK THE REQUIREMENTS</h2></div>
  
 <div className='subb'> <p>UNIVERSITY ENTRANCE EXAM -- APATITUDE TEST</p> 
 <p>----</p>
 <p>PREPS AND FOUNDATION COURSES</p>
 <p>----</p>
 <p>German Laungauge Skills</p>
 <p>----</p>
 <p>Visa - Insurance - Proof of Finance</p>
</div> </div></div></div>

<div class="container bg-purple m-auto my-4">
  <div className='row'>
  <div className='col-md-12 text-center '>
  <div className='yel h1'><h2 >
  4. Start to prepare</h2></div>
  
 <div className='subb'> <p>Funding -- Application</p> 
 <p>----</p>
 <p>Germon Courses -- Find the Accomdation</p>
</div> </div></div></div>

<div class="container bg-purple m-auto my-4" style={{backgroundColor:"#c91349"}}>
<div className='row'>
<div className='col-md-12 text-center '>
<div className='yel h1'><h2 style={{color:"lime"}} >
Living In Germany</h2></div>

<div className='subb'> <p>Gain insights into life in Germany. Discover German cities and landscapes, learn something special from different regions and find out about exciting leisure activities.</p> 

</div> </div></div></div>

<div class="container bg-purple m-auto my-4">
  <div className='row'>
  <div className='col-md-12 text-center '>
  <div className='yel h1'><h2 >
  Upon Arrivals</h2></div>
  
 <div className='subb'> <p>All international students must register at the local Residents‘ Registration Office – usually within one week.
 </p> 
 <p>----</p>
 <p>Whether you need a residence permit depends on your country of origin.</p>
 <p>----</p>
 <p>A German current account is worthwhile if you are staying in Germany for more than a few weeks. You will also receive EC card.</p>
</div> </div></div></div>

<div class="container bg-purple m-auto my-4" style={{backgroundColor:"#c91349"}}>
<div className='row'>
<div className='col-md-12 text-center '>
<div className='yel h1'><h2 style={{color:"lime"}} >
Tips For Everyday's Life</h2></div>

<div className='subb'> <p>Good time management and the right study habits bring many advantages. These include more success with exams or course work, and confidence about your studies. The student advisory service at your university can help you.</p> 
<p>----</p>
<p>There are a variety ways to earn money while in Germany. Popular jobs include waiters, academic assistants, or tutors.</p>
<p>----</p>
<p>ublic transport services, banks and mobile phone providers offer student discounts, as do cafés, libraries, museums and cinemas.</p>
</div> </div></div></div>


<div class="container bg-purple m-auto my-4">
  <div className='row'>
  <div className='col-md-12 text-center '>
  <div className='yel h1'><h2 >
  SCHOLAR'S </h2></div>
  
 <div className='subb'> <p>This Page is created to help the students who wish to go abroad for their study. this is abstract view learn more at officials website. Source -- https://www.study-in-germany.de/en/</p> 
 
</div> </div></div></div>
    </div>
  );
}

export default StudyGer;
