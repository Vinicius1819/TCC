import React from "react";
import { Link } from "react-router-dom";
import '../css/style.css'

function Login() {


    return (
        <div className="app-container">
            <div className="main-content">
                <p>Login</p>
            </div>

            <form>
                <label>Email </label>
                <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} ></input> 
               
                <label>Senha</label>
                <input type="password" placeholder="Password" onChange={(e)=>setSenha(e.target.value)}></input> 
                                             
                <div className="form-group">
                    <br />
                    <button>Login</button>
                </div>

               <div className="register-link">
                    <p>Não tem uma conta? <a href="/usuario">Cadastre-se</a></p>
               </div>  

            </form>
        </div>
    )

}
export default Login;   