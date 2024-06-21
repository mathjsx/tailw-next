// pages/index.tsx
import Head from 'next/head'
import Card from '../components/Card'

const Home: React.FC = () => {
  const colors = ['bg-red-200', 'bg-green-200', 'bg-blue-200', 'bg-yellow-200', 'bg-purple-200'];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <Head>
        <title>Home</title>
      </Head>
      {colors.map((color, index) => (
        <Card key={index} color={color} />
      ))}
    </div>
  )
}

export default Home;