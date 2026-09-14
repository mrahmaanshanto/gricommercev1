import { Signup } from "@/components/marketing/pages/Signup";
import { buildMetadata } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: "Start free",
    description: "Create your GridCommerce workspace.",
    path: "/signup",
  }),
  robots: { index: false, follow: false },
};

export default function SignupPage() {
  return <Signup />;
}
