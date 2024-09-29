import Head from 'next/head'
import LoginForm from '@/components/login'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Bigfoot War</title>
        <meta name="description" content="Login to your Bigfoot War account" />
      </Head>
      <LoginForm />
    </>
  )
}
