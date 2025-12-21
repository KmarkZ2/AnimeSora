import Button from "@/ui/Button";

export default function AuthButton() {
  const onLogin = async () => {};
  const onRegister = async () => {};

  return (
    <div className="flex gap-2.5">
      <Button onClick={onLogin} variant="neon-blue">
        <span>Login</span>
      </Button>
      <Button onClick={onRegister} variant="neon-pink">
        <span>Register</span>
      </Button>
    </div>
  );
}
