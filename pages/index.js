import Layout from "../components/Layout"
import Link from 'next/link'

export default function Home() {
  return  (
    <Layout>
      <h1>My next app</h1>
      <Link href = '/about'>About page</Link>
    </Layout>
  )
}
