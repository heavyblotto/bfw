import Head from 'next/head'
import SignIn from '@/components/SignIn'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Bigfoot War</title>
        <meta name="description" content="Login to your Bigfoot War account" />
      </Head>
      <SignIn />
    </>
  )
}
