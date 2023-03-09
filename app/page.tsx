import Cursor from './components/Cursor'
import Title from './components/Title'

export default function Home() {
  return (
    <>
    <Cursor />
    <div className="grid place-items-center h-screen">
      <Title />
    </div>
    </>
    )
}