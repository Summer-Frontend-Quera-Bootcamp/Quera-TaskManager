// ========== import needed packages ==========
import { Link } from 'react-router-dom'


const Index = () => {
  return (
    <section className="relative">
      <div className="h-screen bg-center bg-no-repeat bg-not-found" style={{backgroundSize: "contain"}}></div>
      <Link to={'/main'}><button className="absolute top-0 ml-3 mt-3 border px-5 py-2 rounded-md bg-[#208D8E]">بازگشت</button></Link>
    </section>
  )
}

export default Index
