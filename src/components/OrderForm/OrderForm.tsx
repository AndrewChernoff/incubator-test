import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import s from './OrderForm.module.scss'
import { useAppSelector } from '../../common/hooks/reduxHooks';
import { CartState, ProductType } from '../../store/slices/cartSlice';


interface MyFormValues {
  firstName: string
  surname: string
    address: string
    phone: string
    productsInfo: CartState
}

export const OrderFrom: React.FC<{}> = () => {

  const products = useAppSelector(state => state.cart)

  const initialValues: MyFormValues = { 
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
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div>
          
          <Field id="firstName" name="firstName" placeholder="First Name" />
          </div>
            <Field id="surname" name="surname" placeholder="Surname" />
            <Field id="address" name="address" placeholder="address" />
            <Field id="phone" name="phone" placeholder="phone" />
          <button type="submit">Order</button>
        </Form>
      </Formik>
    </div>
  );
};