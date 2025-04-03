import type { Route } from "./+types/home";
import { Layout } from "~/components/Layout";
import { Playground } from "~/components/Playground";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Test Case" },
    { name: "description", content: "Welcome to the Game!" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <Playground />
    </Layout>
  );
}
