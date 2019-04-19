import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';


const TestSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const MyForm = props => {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = props;
    return (
      <Form style={{width: '33%', margin: 'auto'}} onSubmit={handleSubmit}>
        <FormGroup>
              <Label>Name</Label>
              <Input 
                invalid={errors.name && touched.name}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
              />
              <FormFeedback>{errors.name}</FormFeedback>
          </FormGroup>
          <FormGroup>
              <Label>Email</Label>
              <Input 
                invalid={errors.email && touched.email}
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              />
              <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>
          <Button type="submit" disabled={Object.keys(errors).length > 0}>Submit</Button>
      </Form>        
    );
  };


  const TestForm = withFormik({
    mapPropsToValues: () => ({ 
        name: '',
        email: ''
    }),

    validationSchema: TestSchema,
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'BasicForm',
  })(MyForm);

  export default TestForm;