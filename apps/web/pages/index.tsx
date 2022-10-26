import { Footer, Info, Header, NewTodo, Todo, TodoList, ToggleAll } from "ui";
import Head from "next/head";

export default function Web() {
  return (
    <>
      <Head>
        <title>Template • TodoMVC</title>
      </Head>

      <section className="todoapp">
        <Header>
          <NewTodo />
        </Header>

        <section className="main">
          <ToggleAll />

          <TodoList>
            <Todo />
            <Todo />
            <Todo />
          </TodoList>
        </section>

        <Footer />
      </section>

      <Info />
    </>
  );
}
