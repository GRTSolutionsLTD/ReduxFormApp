import * as React from 'react'
import {Component} from 'react'
import { reduxForm, Field } from 'redux-form' // imported Field
import { SubmissionError } from 'redux-form';

// Type specified below in <Field> 4 line 2 inside the function 
const renderInput = ({htmlFor,type,label,input,meta:{touched,error}}) =>   // Define stateless component to render input and errors
<div className="col-lg-6">
  <div className="form-group">
    <label htmlFor={htmlFor}>{label}</label>
    <input {...input} type="text" className="form-control"  placeholder="Enter text..."  />  
    {touched && error && <span className="error">{error}</span> }
  </div>
</div>


class TryForm extends Component {
    mySubmit = ({username='',password=''})=>{
                let error={};
                let isError = false;
                if(username.trim()===""){
                    error.username="Required";
                    isError=true;
                }

                if(password.trim()===""){
                    error.password="Required";
                    isError=true;
                }
                if(isError)
                {
                    throw new SubmissionError(error);
                }
    }
    
    render() {

        const { handleSubmit } = this.props       // No fields prop

        return (
        <form onSubmit={handleSubmit(this.mySubmit)}>
             {/* <div className="col-lg-6">
                <label htmlFor="addres">addres</label>
                <Field name="addres" component={input} type="text" />
            </div> */}
            <div className="row">
                <Field
                htmlFor="username"
                label="User name:"
                name="username"                  
                component={renderInput}           
                 />    

                <Field
                htmlFor="password"
                label="Password:"
                name="password" 
                component={renderInput}                  
                type="password" />
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-warning">Submit</button>
            </div> 
        </form>
        )
    }
}

export default reduxForm({
  form: 'tryForm'
                                              // no fields array given
})(TryForm)