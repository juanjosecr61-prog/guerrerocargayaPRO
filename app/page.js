'use client'

export default function Page() {
  const phoneNumber = "59897951458";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hola,%20necesito%20un%20flete`;

  return (
    <div style={{fontFamily:"Arial", background:"#111", color:"white", textAlign:"center", padding:"40px"}}>
      <img src="/logo.png" style={{maxWidth:"350px"}}/>
      <h1>GuerreroCargaYa</h1>
      <p>Fletes en Ciudad de la Costa y todo Uruguay</p>

      <a href={whatsappLink} target="_blank">
        <button style={{background:"red", color:"white", padding:"15px 25px", fontSize:"18px"}}>
          WhatsApp
        </button>
      </a>

      <h2>Servicios</h2>
      <p>✔ Fletes ✔ Paquetería ✔ Logística</p>

      <h3>Contacto</h3>
      <p>+598 97 951 458</p>
    </div>
  );
}
