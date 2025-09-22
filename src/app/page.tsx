import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login"); // 👈 always redirect to login
}
