import dayjs from "dayjs";
import { Formik, Form, Field } from "formik";
import { object, date } from "yup";

const SchedulePostForm = () => {
  //1. Define the min date. we format the date to YYYY-MM-DD to exclude the time.
  const minPublishDate = dayjs().add(2, "day").format("YYYY-MM-DD");

  // 2. we create the yup schema inside the component so that the values are accurate.
  const schema = object({
    // 2.1 use the date().min() function to specify the minimum date
    minPublishDate: date().min(
      minPublishDate,
      "Min date must be 2 days from today"
    ),
  });

  return (
    <div>
      {/* 3. use Formik provider */}
      <Formik
        initialValues={{
          // 3.1 set the initial date to two days from now as well
          minPublishDate: minPublishDate,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        // 4. integrate the yup schema to this form
        validationSchema={schema}
      >
        {/*  */}
        {({ errors }) => {
          return (
            // 5. Implement the form
            <Form className="flex flex-col gap-2">
              <div className="form-control w-full max-w-xs">
                <Field
                  type="date"
                  className="input input-bordered"
                  name="minPublishDate"
                />
                {errors.minPublishDate && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.minPublishDate}
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
export default SchedulePostForm;
