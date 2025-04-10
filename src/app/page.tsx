import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      hello from the index page
      <Link href="/dashboard" className="text-blue-300">dashboard</Link>
    </div>
  );
}
