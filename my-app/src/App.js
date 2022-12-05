import './App.css';
import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile:'',
    password: '',
    confirmpassword: '',
    gender: '',
    atac: [],
  })

  const [formError, setFormError] = useState({})

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'atac') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.atac.push(event.target.value)
      } else {
        copy.atac = copy.atac.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const validateForm = () => {
    let err = {}

    if (formData.username === '') {
      err.username = 'Username feild is required!'
    }

    if (formData.email === '') 
    {
      err.email = 'Email feild is required!'
    } else 
    {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!regex.test(formData.email)) {
        err.email = 'Email format is not valid!'
      }
    }


    if (formData.mobile === '') 
    {
      err.mobile = "Mobile feild is required";
    } else 
    {
      if (!formData.mobile === [0-9]) 
      {
      err.mobile = "This is not a valid mobile format!";
      }
    
    else 
    {
      if(formData.mobile.length > 10)
       {
      err.mobile = "Mobile length must not greter than 10";
    }
  }
}


    if (formData.password === '' ) 
    {
      err.password = 'Password feild is required!'
    } else 
    {
        if (formData.password.length < 6) 
        {
          err.password = 'Password should greater than 6 characters!'
        }
      }
    
    if ( formData.confirmpassword === '') {
      err.confirmpassword = ' Confirm Password feild is required!'
    } else {
      if (formData.password !== formData.confirmpassword) {
        err.confirmpassword = 'Password and confirm password not matched!'
      } else {
        if (formData.confirmpassword.length < 6) {
          err.confirmpassword = 'Confirm Password should greater than 6 characters!'
        }
      }
    }
    if (formData.gender === '') {
      err.gender = 'Gender feild is required!'
    }
    if (formData.atac.length < 1) {
      err.atac = 'please accept terms and conditions'
    }

    setFormError({ ...err })

    return Object.keys(err).length < 1;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log("Form Data:", formData)
    let isValid = validateForm()

    if (isValid) {
      alert('Data Submitted Successfully....')
    } 
    console.log(isValid)
  }
  return (
    <div className="App">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">User Name</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
          <span className='non-valid'>{formError.username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
          <span className='non-valid'>{formError.email}</span>
        </div>

        <div className="form-group">
          <label htmlFor="mobile" className="form-label">Mobile</label>
          <input type="number" className="form-control" name="mobile" onChange={onChangeHandler} value={formData.mobile} />
          <span className='non-valid'>{formError.mobile}</span>
        </div>

        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <span className='non-valid'>{formError.gender}</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" onChange={onChangeHandler} value={formData.password} />
          <span className='non-valid'>{formError.password}</span>
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="confirmpassword" onChange={onChangeHandler} value={formData.confirmpassword} />
          <span className='non-valid'>{formError.confirmpassword}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="gender" className="form-label"></label>
          <div>
            <div>
              <input type="checkbox" name="atac" value="atc" onChange={onChangeHandler} checked={formData.atac.indexOf('atc') !== -1} />
              <label htmlFor="html">Accept terms and conditions</label>
            </div>
  
          </div>
          <span className='non-valid'>{formError.atac}</span>
        </div>
        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}
export default App;