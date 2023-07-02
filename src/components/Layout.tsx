import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import React from 'react'

type Props = {
  title: string
  children: ReactNode
}

export const Layout: FC<Props> = ({ children, title = 't3 stack'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generate by t3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container mx-auto flex min-h-screen flex-col items-center justify-center p-4'>{children}</main>
    </>
  );
}
