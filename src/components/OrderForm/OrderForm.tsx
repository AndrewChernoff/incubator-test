import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  useFormik,
} from 'formik';
import s from './OrderForm.module.scss'
import { useAppSelector } from '../../common/hooks/reduxHooks';
import { CartState } from '../../store/slices/cartSlice';
import Button from '@mui/material/Button';


interface MyFormValues {
  firstName: string
  surname: string
    address: string
    phone: string
    productsInfo: CartState
}


const validate = (values: MyFormValues) => {
  const errors : Partial<MyFormValues> = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.surname) {
    errors.surname = 'Required';
  } else if (values.surname.length > 15) {
    errors.surname = 'Must be 20 characters or less';
  }

  if (!values.address) {
    errors.address = 'Required';
  } else if (values.surname.length > 20) {
    errors.address = 'Must be 20 characters or less';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (values.phone.length > 11) {
    errors.phone = 'Must be 12 characters or less';
  }

  return errors;
};

export const OrderFrom: React.FC<{}> = () => {

  const products = useAppSelector(state => state.cart)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      surname: '',
      address: '',
      phone: '',
      productsInfo: products
    },
    validate,
     onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
     },
  });
  return (
    <>
    <h2>Order</h2>
    <form onSubmit={formik.handleSubmit} className={s.form}>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.firstName}
        placeholder='FirstName'
      />
      {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      
      <input
        id="surname"
        name="surname"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.surname}
        placeholder='Surname'
      />
      {formik.touched.surname && formik.errors.surname  ? <div>{formik.errors.surname}</div> : null}

      
      <input
        id="address"
        name="address"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.address}
        placeholder='Address'
      />
      {formik.touched.address && formik.errors.address  ? <div>{formik.errors.address}</div> : null}

      
      <input
        id="phone"
        name="phone"
        type="text"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.phone}
        placeholder='Phone'
      />
      {formik.errors.phone && formik.touched.phone ? <div>{formik.errors.phone}</div> : null}
      <Button variant="contained">Submit</Button>
{/*       <button type="submit">Submit</button> */}
    </form>
    </>
  );


/*   const initialValues: MyFormValues = { 
    firstName: '',
    surname: '',
    address: '',
    phone: '',
    productsInfo: products
  };
  return (
    <div className={s.form}>
      <Formik
        initialValues={initialValues}
        validate
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div>
          
          <Field id="firstName" name="firstName" placeholder="First Name" />
          {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

          </div>
            <Field id="surname" name="surname" placeholder="Surname" />
            <Field id="address" name="address" placeholder="address" />
            <Field id="phone" name="phone" placeholder="phone" />
          <button type="submit">Order</button>
        </Form>
      </Formik>
    </div>
  ); */
};