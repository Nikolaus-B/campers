import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import {
  Field,
  Form,
  FormContainer,
  FormHeader,
  FormText,
  FormTitle,
  SendButton,
} from "./FeedbackForm.styled";

const RentCarsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  comment: Yup.string()
    .min(2, "Too Short!")
    .max(60, "Too Long!")
    .required("Required"),
});

export const FeedbackForm = () => {
  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>Book your campervan now</FormTitle>
        <FormText>Stay connected! We are always ready to help you.</FormText>
      </FormHeader>
      <Formik
        initialValues={{
          name: "",
          email: "",
          comment: "",
        }}
        validationSchema={RentCarsSchema}
        onSubmit={async (values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        <Form>
          <label>
            <Field name="name" placeholder="Jane" />
            <ErrorMessage component={"span"} name="name" />
          </label>

          <label>
            <Field type="email" name="email" placeholder="example@mail.com" />
            <ErrorMessage component={"span"} name="email" />
          </label>

          <label>
            <Field
              className="textarea"
              component="textarea"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage component={"span"} name="comment" />
          </label>

          <SendButton type="submit">Send</SendButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};
