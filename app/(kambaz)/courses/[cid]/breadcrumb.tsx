"use client";
import { usePathname } from "next/navigation";
export default function Breadcrumb({ course }: { course: { name: string } | undefined; }) {
  const pathname = usePathname();
  const path = pathname.split("/").pop() || ""; 
  const formattedPath = path.charAt(0).toUpperCase() + path.slice(1);
  return (
    <span>
    {course?.name} &gt; {formattedPath}
    </span>
);}