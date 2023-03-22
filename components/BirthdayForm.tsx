import dayjs from "dayjs";
import { Formik, Form, Field } from "formik";
import { object, date } from "yup";

const BirthdayForm = () => {
  const eighteen_years_ago = dayjs().subtract(18, "year").format("YYYY-MM-DD");

  const schema = object({
    birthdate: date().max(
      eighteen_years_ago,
      "You must be at least 18 years old to register"
    ),
  });

  return (
    <div>
      <Formik
        initialValues={{
          birthdate: eighteen_years_ago,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={schema}
      >
        {({ errors }) => {
          return (
            <Form className="flex flex-col gap-2">
              <div className="form-control w-full max-w-xs">
                <Field
                  type="date"
                  className="input input-bordered"
                  name="birthdate"
                />
                {errors.birthdate && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.birthdate}
                    </span>
                  </label>
                )}
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default BirthdayForm;
