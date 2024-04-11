import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { INITIAL_CONTACT } from '../../auxiliary/constants';
import { Feedback } from '../../auxiliary/feedback';

import {
  LABEL_NAME,
  LABEL_PHONE,
  CAPTION_ADD,
} from '../../auxiliary/constants';

import { CustomButton } from '../CustomButton/CustomButton';
import styles from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_CONTACT}
      onSubmit={handleSubmit}
      validationSchema={Feedback}
    >
      <Form className={styles.contactForm}>
        <div className={styles.info}>
          <div>
            <label className={styles.label} htmlFor={nameId}>
              {LABEL_NAME}
            </label>
            <Field
              className={styles.input}
              id={nameId}
              type="text"
              name="name"
            />
            <span className={styles.error}>
              <ErrorMessage name="name" as="span" />
            </span>
          </div>
          <div>
            <label className={styles.label} htmlFor={phoneId}>
              {LABEL_PHONE}
            </label>
            <Field
              className={styles.input}
              id={phoneId}
              type="tel"
              name="number"
            />
            <span className={styles.error}>
              <ErrorMessage name="number" as="span" />
            </span>
          </div>
        </div>
        <CustomButton typeBtn="submit">{CAPTION_ADD}</CustomButton>
      </Form>
    </Formik>
  );
};
