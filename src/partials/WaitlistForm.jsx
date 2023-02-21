import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function WaitlistForm() {
  const [state, handleSubmit] = useForm("mjvzqprw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} >
      <div className="mt-5 flex rounded-md place-content-center ">
        <input
          id="email"
          required
          type="email"
          placeholder="cool@user.com"
          name="email"
          className="block  rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
           sm:w-auto sm:mb-0 w-1/2
          "
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button
          type="submit"
          disabled={state.submitting}
          className="btn text-white bg-[#5AA568] hover:bg-[#35613d]   sm:w-auto sm:mb-0 rounded-none rounded-r-md"
        >
          submit
        </button>
      </div>
    </form>
  );
}

export default WaitlistForm;
