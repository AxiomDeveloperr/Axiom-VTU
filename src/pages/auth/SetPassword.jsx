import setpassword from '../../assets/setpassword.jpg';
import CustomInput from '../../components/CustomInput';
import AuthNavBar from '../../myComponents/SimpleNav';

function SetPassword() {
  return (
    <>
      <AuthNavBar />
      <div className="mx-auto w-auto max-w-5xl px-4 py-4 lg:px-0 lg:py-2 sm:px-4 gap-9 flex flex-col md:flex-row justify-center items-center min-h-screen">
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <img
            src={setpassword}
            alt="SetPassword illustration"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-lg flex flex-col items-center md:items-start order-2 md:order-2">
          <p className="text-2xl font-bold mb-4 text-tt-primary">Set Password</p>
          <h2 className="text-3xl font-bold leading-snug text-left pb-6">
            Set Password for your IOTBTECH Account
          </h2>
          <form action="">
            <CustomInput
              type="password"
              placeholder="Create new password"
              label="Create new password"
              name="password"
            />
            <CustomInput
              type="password"
              placeholder="Re-enter your password"
              label="Re-enter your password"
              name="password"
            />

            <button className="w-full p-3 bg-tt-primary text-white rounded-md hover:bg-tt-primary transition duration-300">
              Set Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SetPassword;
