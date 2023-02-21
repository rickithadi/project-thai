import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function WaitlistForm() {
  const [state, handleSubmit] = useForm("mjvzqprw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 flex rounded-md place-content-center ">
        <input
          id="email"
          required
          type="email"
          placeholder="cool@user.com"
          name="email"
          className="rounded-none rounded-l-md border-gray-300 focus:border-[#5AA568] focus:ring-[#5AA568] sm:text-sm
           sm:w-full sm:mb-0 w-full
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
