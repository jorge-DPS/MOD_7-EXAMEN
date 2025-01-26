import React, { useRef } from 'react';
import FormLoginWithMotion from "../Components/Forms/FormLoginWithMotion.jsx";

const Login = ({ formRef }) => {
  return (
    <>
      <FormLoginWithMotion ref={formRef} titleForm="Welcome to FullStack program" />
    </>
  );
};

export default Login;