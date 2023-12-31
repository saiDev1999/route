
import React from 'react'
import { useNavigate } from 'react-router-dom'

function RegisterScreen() {
    const navigate=useNavigate()


    const handleredirect =()=>{
        navigate("/")

    }
  return (
    <form className="form-horizontal" action="/action_page.php">
    <div className="form-group">
      <label className="control-label col-sm-2" for="email">Email:</label>
      <div className="col-sm-10">
        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" for="pwd">Password:</label>
      <div className="col-sm-10">          
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
      </div>
    </div>
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <div className="checkbox">
          <label><input type="checkbox" name="remember"/> Remember me</label>
        </div>
      </div>
    </div>
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>

      <div className="col-sm-offset-2 col-sm-10">
        <h4   onClick={handleredirect} >redirect to login page</h4>
      </div>
    </div>
  </form>
  )
}

export default RegisterScreen