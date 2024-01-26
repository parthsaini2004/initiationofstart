import React from 'react';
import '../details/details.css';


const College = () => {
    return (
        <>
      
<div className="page-content">
<div className="form-v10-content">
<form className="form-detail" action="#" method="post" id="myform">
<div className="form-left">
<h2>General Infomation</h2>
<div className="form-row">
{/* <select name="title">
<option className="option" value="title">Title</option>
<option className="option" value="businessman">Businessman</option>
<option className="option" value="reporter">Reporter</option>
<option className="option" value="secretary">Secretary</option>
</select> */}
<span className="select-btn">
<i className="zmdi zmdi-chevron-down"></i>
</span>
</div>
<div className="form-group">
<div className="form-row form-row-1">
<input type="text" name="first_name" id="first_name" className="input-text" placeholder="First Name" required="" />
</div>
<div className="form-row form-row-2">
<input type="text" name="last_name" id="last_name" className="input-text" placeholder="Last Name" required="" />
</div>
</div>
<div className="form-row">
<select name="position">
<option value="position">Gender</option>
<option value="director">Male</option>
<option value="manager">Female</option>
<option value="employee">Others</option>
</select>


<span className="select-btn">
<i className="zmdi zmdi-chevron-down"></i>
</span>
</div>

<div className="form-row">
<input type="text" name="company" className="company" id="company" placeholder="E-mail" required="" />
</div>

<div className="form-row form-row-2">
<input type="text" name="phone" className="phone" id="phone" placeholder="Phone Number" required="" />
</div>

<div className="form-row">

<select name="employees">
<option value="employees">Type</option>
<option value="trainee">College Student</option>
<option value="colleague">Working Professional</option>
<option value="associate">Fresher</option>
<option value="associate">School Student</option>
</select>


<span className="select-btn">
<i className="zmdi zmdi-chevron-down"></i>
</span>
</div>

<div className="form-row ">
<input type="text" name="phone" className="phone" id="place" placeholder="Current Location" required="" />
</div>



{/* <div className="form-group">
<div className="form-row form-row-3">
<input type="text" name="business" className="business" id="business" placeholder="Business Arena" required="" />
</div>
<div className="form-row form-row-4">
<select name="employees">
<option value="employees">Type</option>
<option value="trainee">College Student</option>
<option value="colleague">Working Professional</option>
<option value="associate">Fresher</option>
<option value="associate">School Student</option>
</select>
<span className="select-btn">
<i className="zmdi zmdi-chevron-down"></i>
</span>
</div>
</div> */}
</div>
{/* <div className="form-right">
<h2>Contact Details</h2>
<div className="form-row">
<input type="text" name="street" className="street" id="street" placeholder="Street + Nr" required="" />
</div>
<div className="form-row">
<input type="text" name="additional" className="additional" id="additional" placeholder="Additional Information" required="" />
</div>
<div className="form-group">
<div className="form-row form-row-1">
<input type="text" name="zip" className="zip" id="zip" placeholder="Zip Code" required="" />
</div>
<div className="form-row form-row-2">
<select name="place">
<option value="place">Place</option>
<option value="Street">Street</option>
<option value="District">District</option>
<option value="City">City</option>
</select>
<span className="select-btn">
<i className="zmdi zmdi-chevron-down"></i>
</span>
</div>
</div>
<div className="form-row">
<select name="country">
<option value="country">Country</option>
<option value="Vietnam">Vietnam</option>
<option value="Malaysia">Malaysia</option>
<option value="India">India</option>
</select>
<span className="select-btn">
<i className="zmdi zmdi-chevron-down"></i>
</span>
</div>
<div className="form-group">
<div className="form-row form-row-1">
<input type="text" name="code" className="code" id="code" placeholder="Code +" required="" />
</div>
<div className="form-row form-row-2">
<input type="text" name="phone" className="phone" id="phone" placeholder="Phone Number" required="" />
</div>
</div>
<div className="form-row">
<input type="text" name="your_email" id="your_email" className="input-text" required="" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Your Email" />
</div>
<div className="form-checkbox">
<label className="container"><p>I do accept the <a href="#" className="text">Terms and Conditions</a> of your site.</p>
<input type="checkbox" name="checkbox" />
<span className="checkmark"></span>
</label>
</div>
<div className="form-row-last">
<input type="submit" name="register" className="register" value="Register Badge" />
</div>
</div> */}
</form>
</div>
</div>
{/* 
<script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-23581568-13');
</script>
<script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon="{&quot;rayId&quot;:&quot;84ba5a0cdd1b33ba&quot;,&quot;version&quot;:&quot;2024.1.0&quot;,&quot;token&quot;:&quot;cd0b4b3a733644fc843ef0b185f98241&quot;}" crossorigin="anonymous"></script> */}


      </>
    )
}

export default College












