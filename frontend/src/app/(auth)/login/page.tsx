import { getHello } from "@/features/(auth)/api";

export default async function LoginPage() {
  const message = await getHello();
  return <main>
    <h1>Login</h1>
      <p>{message}</p>
  </main>
}