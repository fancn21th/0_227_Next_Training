import type { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  todoid: string;
};

const Todo = ({ todoid }) => {
  return <h1>Todo {todoid}</h1>;
};

export default Todo;

const todo_url = "https://jsonplaceholder.typicode.com/users/1/todos";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(todo_url);

  const todos = await res.json();

  return {
    paths: todos.map((todo) => ({
      params: {
        todoid: todo.id + "",
      },
    })),
    fallback: true, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const todoid = context.params?.todoid as string;

  console.log(`GetStaticProps is running`);

  if (!todoid) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      todoid,
    },
    // open ISG
    revalidate: 5,
  };
};
