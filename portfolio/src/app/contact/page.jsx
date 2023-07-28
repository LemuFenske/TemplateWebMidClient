'use client'
import React, { useState } from "react";
import axios from "axios";
import style from './contact.module.css'


export default function ContactPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleMail = async () => {
    try {
      const response = await axios.post("https://portfolio-server-mocha.vercel.app/mail", formData);
      console.log(response.data); // Respuesta del servidor, si es necesaria
      setEnviado(true); // Marcar el correo como enviado con éxito
      setFormData({ // Limpiar los campos del formulario después de enviar
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
      });
      setTimeout(() => {
        setEnviado(false); // Desactivar el mensaje después de 5 segundos
      }, 2000);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <div className="flex h-screen flex-col pt-20 items-center justify-center bg-zinc-900">
      <div className="flex flex-col justify-center w-4/5 sm:w-2/3">
        <h1 className="mx-auto text-4xl font-bold">Contáctame</h1>
        
        <div className="flex flex-col items-center justify-center bg-zinc-900">
          <div className="flex flex-col w-full sm:w-1/2">
            <div className="flex flex-col mb-4">
              <label className="mb-2">Nombre:</label>
              <input type="text" placeholder="Nombre" className="border rounded p-2 text-black" name="nombre" onChange={handleChange} value={formData.nombre} />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2">Email:</label>
              <input type="email" placeholder="Email" className="border rounded p-2 text-black" name="email" onChange={handleChange} value={formData.email} />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2">Asunto:</label>
              <input type="text" placeholder="Asunto" className="border rounded p-2 text-black" name="asunto" onChange={handleChange} value={formData.asunto} />
            </div>

            <div className="flex flex-col mb-4">
              <label className="mb-2">Mensaje:</label>
              <textarea rows="2" placeholder="Mensaje" className="border rounded p-2 text-black" name="mensaje" onChange={handleChange} value={formData.mensaje} />
            </div>

            <button
              className="w-full bg-zinc-500 transition hover:bg-zinc-700 text-white font-semibold py-2 px-4 rounded"
              onClick={handleMail}
            >
              Enviar
            </button>
            {enviado && <p className={style.enviadomensaje}>Correo enviado con éxito</p>}
          </div>
        </div>
      </div>
    </div>
  );
}