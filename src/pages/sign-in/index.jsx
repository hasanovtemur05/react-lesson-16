import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Field, Form , ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "./../../utils/notification";
import { ToastContainer } from "react-toastify";
import { signInvAalidationSchema } from './../../utils/validation';


const Index = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();



  const initialValues = {
    name: "",
    password: "",
  };

  // const handleChange = (event) =>{
  //   const {name, value} = event.target
  //   setForm ({...form, [name]:value})
  // }

  const handleSubmit = async (values) => {
    const {name, password} = values 
  
    if (name === "admin") {
      Notification({title: "succes", type: "success"})
      navigate("/admin-layout")
    }else if (name === "student") {
      navigate("/student-layout")
    }else{
      Notification({title: "Xatolik mavjud", type: "error"})
    }
    console.log(values);
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="row mt-5">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">login</h1>
            </div>
            <div className="card-body">
              {/* <form id="form" onSubmit={handleSubmit}>
                   <TextField  fullWidth label="username" name='username' onChange={handleChange} className='my-1'/>
                   <TextField type='password' fullWidth label="password" name='password' onChange={handleChange} className='my-1'/>
                </form> */}

              <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signInvAalidationSchema}>
                <Form id="form">
                  <Field
                    name="name"
                    as={TextField}
                    fullWidth
                    label="name"
                    type="text"
                    helperText={
                      <ErrorMessage
                        name="name"
                        component='p'
                        className="text-red-600 text-[15px]"
                      />
                    }
                  />
                   <Field
                    name="password"
                    as={TextField}
                    fullWidth
                    label="password"
                    type="password"
                    helperText={
                      <ErrorMessage
                        name="password"
                        component='p'
                        className="text-red-600 text-[15px]"
                      />
                    }
                  />
                  
                </Form>
              </Formik>
            </div>
            <div className="card-footer">
              <Button form="form" type="submit" variant="contained">
                save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
