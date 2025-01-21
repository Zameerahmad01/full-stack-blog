import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-80px)] w-full">
      <SignIn signUpUrl="/register" />
    </section>
  );
};

export default LoginPage;
