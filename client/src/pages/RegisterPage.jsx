import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-80px)] w-full">
      <SignUp signInUrl="/login" />
    </section>
  );
};

export default RegisterPage;
