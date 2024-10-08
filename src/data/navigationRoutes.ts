import { NavbarRoutes } from "@/layout/navbar";
const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK || "";

export const routes: NavbarRoutes = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  {
    title: "Resume",
    href: `${RESUME_LINK}`,
  },
];
