import { useRouter } from "next/router";

const Todo = () => {
  const router = useRouter();
  const { todoid } = router.query;

  return <h1>Todo {todoid}</h1>;
};

export default Todo;
