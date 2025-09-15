import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh",
      fontFamily: "Arial"
    }}>
      <img 
        src="/minha-foto.jpg" 
        alt="Foto de Marina Durand" 
        style={{ borderRadius: "50%", width: "150px", height: "150px" }} 
      />
      <h1>Marina Durand</h1>
      <p>Meu nome é Marina Durand, sou estudante de Computação.</p>
      <p>Gosto de aprender coisas novas e tenho interesse em design.</p>
    </div>
  );
}