import React, { useState } from "react";
import api from "../../services/api";

const Usuario = () => {

    const [vnome, setNome] = useState('')
    const [vemail, setEmail] = useState('')
  
    const handleSubmit = async () =>{
      try{
        const response = await api.post("usuario",
        {nome: vnome, email: vemail})
        console.log(response.data)
      }catch(error){
        console.log(error)
      }
    };

    return (
        <div className="app-container">
            <div className="main-content">
                <p>Usuário</p>
            </div>

            <form>
                <label>Nome {vnome}</label>
                <input type="text" placeholder="Nome" onChange={(e)=>setNome(e.target.value)} ></input> 
               
                <label>Email {vemail}</label>
                <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input> 
                                             
                <div className="form-group">
                    <br />
                    <button onClick={handleSubmit}>Cadastrar Usuário</button>
                </div>

            </form>
        </div>
    )

}
export default Usuario;