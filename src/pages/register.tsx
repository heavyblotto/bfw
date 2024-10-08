import Head from 'next/head'
import RegisterForm from '@/components/Register'

export default function RegisterPage() {
  return (
    <>
      <Head>
        <title>Register - Bigfoot War</title>
        <meta name="description" content="Create your Bigfoot War account" />
      </Head>
      <RegisterForm />
    </>
  )
}
