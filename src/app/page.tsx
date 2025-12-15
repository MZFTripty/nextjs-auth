import LoginForm from "@/components/LoginForm";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline my-5">Sign In</h1>
      <LoginForm />
    </div>
  );
}
