import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { Layout } from "../components/Layout";
import { Auth } from "../components/Auth";
import {ArrowLeftOnRectangleIcon} from '@heroicons/react/24/solid'
import { TaskList } from "../components/TaskList";
import { TaskForm } from "../components/TaskForm";

const Home: NextPage = () => {
  const { data: session } = useSession()

  if (!session) { 
    return (
      <Layout title="login">
        <Auth/>
      </Layout>
    )
  }
  
  return (
    <>
      <Layout title="todo App">
        <ArrowLeftOnRectangleIcon
          className="h-6 w-6 cursor-pointer text-blue-600"
          onClick={() => signOut()}
        ></ArrowLeftOnRectangleIcon>
        <p className="my-3 text-xl text-blue-600">{session?.user?.name}</p>
        <TaskForm />
        <TaskList />
      </Layout>
    </>
  );
};

export default Home;
