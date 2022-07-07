import React, { useEffect ,useState} from 'react'
import Footer from '../footer/footer';
import "./dataform.css"
function Dataform() {
    const [email, setEmail] = useState("");
   
    const [user,setUser]=useState("");
 
   
    const [date,setDate] = useState("");


  return (
    <div>

  
   
    <div class="memberformcontainer">


    <div class="form">
        <h1 id="form-title">End sem Exam dataform For Student</h1>
        <h3 class="form-below">Fields marked with an <span class="redd">*</span> are required</h3>
        <form action="#" method="post">
            

            <div class="box">
                <label for="lname" class="form-below labell">Your Name <span class="redd">*</span></label>
                <br/>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)} name="lname" class="form-input" placeholder="Enter Your Data provider Name" required/>
            </div>

            <div class="box">
                <label for="State" class="form-below labell">Enrolled In Year <span class="redd">*</span> </label>
                <br/>
                <select name="State" id="State" class="form-input" required>
                    <option value="Select State">Select Year</option>
                    <option value="Ahmedabad">Regular - 2020</option>
                    <option value="Anand">D2D - 2021</option>
                    <option value="Gandhinagar">Diploma - 2020</option>
              
                </select>
            </div>
          
            <div class="box">
                <label for="con-email" class="form-below labell">Confirm Email <span class="redd">*</span></label>
                <br/>
                <input type="text" name="con-email" class="form-input" value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder="Confirm Your Organization Email ID" required/>
            </div>


            

       
     

 

 

    

            

            <div class="box">
                <label for="joiningDate" class="form-below labell">Date of Birth <span
                        class="redd">*</span></label>
                <br/>
                <input type="date" value={date}
                onChange={(e) => setDate(e.target.value)} name="date" class="form-input" required/>
            </div>

          

           

           



            <div class="box">
                <label for="time" class="form-below labell"> Your Branch <span
                        class="redd">*</span> </label>
                <br/>
                <select name="time" id="stime" class="form-input" required>
                    <option value="Select time">Select Branch</option>
                    <option value="1 hour">CS/IT</option>
                    <option value="2 hour">ME</option>
                    <option value="3 hour">CE</option>
                    <option value="3 hour">EC</option>
                    <option value="4 hour">EL</option>
                </select>
            </div>

           
            <div class="box">
                <input type="submit" value="Download Now" class="  button2 ml-3" />
            </div>
        </form>
        <h3 class="form-below"> <span class="redd"> Please correct errors before submitting this form.</span></h3>

    </div>
</div>

<Footer/>

    </div>
  )
}

export default Dataform