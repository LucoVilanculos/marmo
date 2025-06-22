import { Outlet } from 'react-router-dom';
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 
        bg-slate-100
        dark:bg-[#181f3a] dark:text-white
        transition-colors duration-300"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}