import {useHistory} from "react-router-dom";
import security from "./assets/security.png"
import { useEffect } from "react";


const Login = () => {
   
    const history = useHistory();
    
    return ( 
          < >
        <section class="login">
        <div className="form">
            <div className="image" >
                <img src={security} alt="main-image"/>
            </div>
            <div className="card" >
                 <h1>Log-in</h1>
                 <form name = "myform">
                     <input type="text" name="UserId" placeholder="UserId"  id="userid" required/>
                     <input type="email" name="Email" placeholder="Email"  id="email" required />
                     <input type="password" name="Password" placeholder="Password" id="password"  required/>
                     {/* <i className="bi bi-eye-slash" id="togglePassword"></i> */}
                     <input type="button" id="card-button" value="Let's Go"  onClick={ () =>{
                      history.push("/home")
                      }} />
                </form>
            </div>
        </div>
        </section>
        {/* <h1>Login</h1>
        <button onClick={ () =>{
               history.push("/home")
            }}>Go</button> */}
        </>
     );
}
 
export default Login;