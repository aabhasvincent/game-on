import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export const Home = () => {
  return (
    <main className="bg-pdmain px-4 py-4">
      <div className="ring-1 ring-slate-800 rounded-md bg-gradient-to-r from-black to-pdmain p-2">
        <Header />
        <Outlet />
        <Footer/>
      </div>
    </main>
  );
};
