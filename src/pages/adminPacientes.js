import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemLista from "../components/ItemLista";
import NavegacionLateral from "../components/NavLateral";


function PaginaAdmin() {
  const [listaPacientes, setListaPacintes] = useState([]);
  const URL = "http://localhost:4003/admPacientes/";

  useEffect(() => {
    consultaApiPacientes();
  }, []);

  const consultaApiPacientes = async () => {
    try {
      const respuesta = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dato = await respuesta.json();
      setListaPacintes(dato);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="ColorFondoAdm"> 
    <div className="ContenedorAdmin ">
    <div className="moverBarraLateral" >
      <NavegacionLateral />
    </div>
    <div className="moverLista">
    <div className=" table-responsive Listado" >
    <Link
    to="/agregarPaciente"
    className="btn btn-success d-flex m-5 justify-content-center">
    Agregar Paciente
  </Link>
  <Table className="table table-striped">
      
      <thead>
        <tr>
          <th>Nombre del dueño</th>
          <th>Email</th>
          <th>Telefono</th>
          <th>Mascota</th>
          <th>Nombre mascota</th>
          <th>Opciones</th>
        </tr>
      </thead>
      {listaPacientes.map((items) => (
        <ItemLista
          consultaApiPacientes={consultaApiPacientes}
          items={items}
          key={items._id}
        />
      ))}
    </Table>

    </div>
    </div>
    
    </div>

    
    </div>
  </>
    
  );
}
export default PaginaAdmin;
