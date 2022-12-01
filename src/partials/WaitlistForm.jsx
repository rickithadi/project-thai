import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function WaitlistForm() {
  const [state, handleSubmit] = useForm("mjvzqprw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="email">Email Address</label>
      <div className="mt-5 flex rounded-md shadow-sm">
        <input
          id="email"
          required
          type="email"
          placeholder="cool@user.com"
          name="email"
          className="block flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
          w-full mb-4 sm:w-auto sm:mb-0
          "
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button
          type="submit"
          disabled={state.submitting}
          className="btn text-white bg-blue-600 hover:bg-blue-700  mb-4 sm:w-auto sm:mb-0 rounded-none rounded-r-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default WaitlistForm;
