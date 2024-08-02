import { HomePage } from "@/packages/home";

export const revalidate = 3600;
export const runtime = 'edge';

async function Page() {
  return <HomePage />;
}

export default Page;
