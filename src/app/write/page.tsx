import { auth } from "@/auth";
import { notFound } from "next/navigation";
import WritePage from "./components/WritePage";

const Write = async () => {
  const session = await auth();

  if (!session?.user) return notFound();

  return <WritePage />;
};

export default Write;
