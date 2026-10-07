import { FeaturePage } from "@/components/marketing/FeaturePage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Staff & HR",
  description:
    "Attendance from fingerprint or face devices and POS log-ins feeds the month's register. Lates, absences, unpaid leave, overtime and loan instalments flow into payroll, which the owner approves before anyone is paid.",
  path: "/features/staff-permissions",
});

export default function Page() {
  return <FeaturePage slug="staff-permissions" />;
}
