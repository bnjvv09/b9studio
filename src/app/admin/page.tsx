import type { Metadata } from "next";
import { checkAdminAuth, getPricingPlans } from "@/actions/pricing";
import AdminClient from "./AdminClient";

export const metadata: Metadata = {
  title: "Panel de Administración — B9 Studio",
  description: "Gestión interna y edición de precios en tiempo real.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const isAuth = await checkAdminAuth();
  const { plans, isFromDb } = await getPricingPlans();

  return (
    <AdminClient
      initialAuth={isAuth}
      initialPlans={plans}
      isFromDb={isFromDb}
    />
  );
}
