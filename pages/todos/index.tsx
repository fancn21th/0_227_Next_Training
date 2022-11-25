import type { GetStaticProps } from "next";

type Props = {
  todos: Array<{
    id: number;
    title: string;
  }>;
};

const Todos = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ title, id }) => (
        <li key={id}>
          {id} : {title}
        </li>
      ))}
    </ul>
  );
};

export default Todos;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("http://localhost:3000/todos.json");

  const todos = await res.json();

  return {
    props: {
      todos,
    },
  };
};
