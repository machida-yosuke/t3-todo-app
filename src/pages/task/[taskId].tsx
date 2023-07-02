import type { NextPage } from 'next'
import React from 'react'
import { Layout } from '../../components/Layout'
import { useRouter } from 'next/router'
import { trpc } from '../../utils/trpc'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

const SingleTaskPage: NextPage = () => {
  const router = useRouter()
  const taskId = router.query.taskId as string;

  const { data, isLoading, error } = trpc.todo.getSingleTask.useQuery({ taskId })
  
   if (isLoading) {
     return <Layout title="task detail">Loading single task...</Layout>;
   }
   if (error) {
     return <Layout title="task detail">{error.message}</Layout>;
   }

  return (
    <Layout title="task detail">
      <p className=" text-x1 mb-3 font-bold text-blue-600">{data?.title}</p>
      <p>{data?.body}</p>
      <p className="my-1 text-sm">
        {data && format(new Date(data.updatedAt), "yyyy-MM-dd HH:mm:ss")}
      </p>
      <p className="my-1 text-sm">
        {data && format(new Date(data.updatedAt), "yyyy-MM-dd HH:mm:ss")}
      </p>
      <Link href={'/'}>
        <ArrowUturnLeftIcon className=' mt-3 h-6 w-6 cursor-pointer text-blue-600'></ArrowUturnLeftIcon>
      </Link>
    </Layout>
  );
}

export default SingleTaskPage;
