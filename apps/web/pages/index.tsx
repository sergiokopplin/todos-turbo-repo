import { Footer, Info, Header, NewTodo, Todo, TodoList, ToggleAll } from "ui";
import Head from "next/head";

export default function Web() {
  const hasTodos = true;

  return (
    <>
      <Head>
        <title>Template • TodoMVC</title>
      </Head>

      <section className="todoapp">
        <Header>
          <NewTodo />
        </Header>

        {hasTodos && (
          <>
            <section className="main">
              <>
                <ToggleAll />
                <TodoList>
                  <Todo completed />
                  <Todo completed={false} />
                  <Todo completed />
                </TodoList>
              </>
            </section>

            <Footer />
          </>
        )}
      </section>

      <Info />
    </>
  );
}
