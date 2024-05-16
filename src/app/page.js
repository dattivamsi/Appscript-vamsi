import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
    <Header />
    <Products />
    <Footer />
    </>
  );
}
