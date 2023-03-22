import BirthdayForm from "components/BirthdayForm";
import MuiForm from "components/MuiForm";
import SchedulePostForm from "components/SimpleForm";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl my-8 text-center">Yup Date Validation</h1>
          <div>Min Date Validation</div>

          <SchedulePostForm />
          <div>Max Date</div>
          <BirthdayForm />
          <div>MUI Date Picker Validation</div>
          <MuiForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
