import { Login } from "@/components/marketing/pages/Login";
import { buildMetadata } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: "Login",
    description: "Sign in to your GridCommerce workspace.",
    path: "/login",
  }),
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <Login />;
}
