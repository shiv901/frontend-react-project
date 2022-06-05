import { useState } from "react";

const Form = () => {
  function signupUser() {
    return new Promise(resolve => {
      // setTimeout(states =[name, email, dob, address, ccode, phone], 1000);
      // states =[name, email, dob, address, ccode, phone]
    });
  }
  
  const initialState = {
    name: "",
    email: "",
    dob: "",
    address: "",
    ccode: "+91",
    phone:""
  };

  const [{ name, email, dob, address, ccode, phone }, setState ] = useState(initialState);

  const clearState = () => {
    setState({ ...initialState });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    signupUser().then(clearState());
  };

  return (
    <form onSubmit={handleSubmit} id='form' className='w-50 mx-auto'>
      <div className="row">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" placeholder="John Smith..." id="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" id="email" placeholder="John@test.com..." value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" className="form-control" name="dob" id="dob" value={dob} onChange={onChange} />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea className="form-control" id="address" name="address" value={address} onChange={onChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <div className="row form-control ms-0">
            <input type="text" className="p-1 border-0 col-2 text-end" placeholder="+91" maxLength='3' name="ccode" id="country-code" value={ccode} onChange={onChange} />|
            <input type="tel" maxLength='10' className="p-1 border-0 col-9" placeholder="999 999 9999" name="phone" id="phone" value={phone} onChange={onChange} />
          </div>
        </div>
      </div>
      <div className="form-group d-flex justify-content-center gap-3 mt-4">
          <button type="submit" className="btn btn-primary">Sign in</button>
          <button type="reset" className="btn btn-warning" onClick={clearState}>Reset</button>
      </div>
    </form>
  );
}

export default Form;
