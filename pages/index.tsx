import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <h1>Home</h1>
      <h3>
        static file <a href="/todos.json">todos.json</a>
      </h3>
    </>
  );
};

export default Home;
