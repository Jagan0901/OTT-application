import { useFormik } from 'formik';
import * as yup from 'yup'
// import { useState } from 'react';

const formValidationSchema = yup.object({
  email : yup
    .string()
    .min(5,'Need a longer email')
    .required('Why not fill this email'),
   password : yup
    .string()
    .min(8,'Need a longer password')
    .required('Why not fill this password')
})

export function BasicForm() {
  
  const formik = useFormik({
    initialValues     : {email : '', password : ''},
     validationSchema : formValidationSchema,
      onSubmit        : (values)=> {
      console.log("onSubmit", values)
    }
  })

  // const [email,setEmail] = useState('email')
  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
      type="email" 
      name="email"
      id="email"
      placeholder='Email'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur} 
      value={formik.values.email}/>

       <br/>
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br/>

      <input 
      type="password" 
      name="password"
      id="password"
      placeholder='Password'
      onChange={formik.handleChange}
      onBlur={formik.handleBlur} 
      value={formik.values.password}/>

      <br/>
      {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
      <br/>
      <button type="submit">Submit</button>      
      
    </form>
  );
}
