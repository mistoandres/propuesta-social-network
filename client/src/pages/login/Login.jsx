import { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import Logo from '../../components/img/cropped-logo_positivo.png';
import { faBars, faMagnifyingGlass, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  //const navigate = useNavigate();
  //const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { currentUser, login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(inputs);
      //navigate("/");
    } catch (err) { }
  };

  // if (currentUser) {
  //   return <Navigate to="/" />;
  // }
  return (
    <main role="main" className="flex-shrink-0 mt-5 mb-5">

      <section className="logi">
        <div className="container h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={Logo} className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center mb-4">
                  <h3 className="">Inicio de sesión</h3>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label fw-bolder d-flex justify-content-start" for="email">Correo electrónico</label>
                  <input type="text" name="username" onChange={handleChange} className="form-control form-control-lg fs-6 bg-light"
                    placeholder="Introduzca una dirección de correo electrónico válida." />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label fw-bolder d-flex justify-content-start" for="password">Contraseña</label>
                  <input type="password" name="password" onChange={handleChange} className="form-control form-control-lg fs-6 bg-light"
                    placeholder="Introduzca la contraseña." />
                </div>

                <div className="d-flex justify-content-between align-items-center">

                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" for="form2Example3">
                      Recordar contraseña
                    </label>
                  </div>

                </div>
                {err && err}
                <div className="text-center text-lg-center mt-4 pt-2">
                  <button type="button" className="btn-lg color-button" onClick={handleLogin}
                  ><FontAwesomeIcon icon={faRightToBracket} /> Iniciar sesión</button>

                  <div className="form-outline mb-3">
                    <a href="#!" className="text-body">¿Olvidó la contraseña?</a>
                  </div>
                  <p className="small fw-bold mt-2 pt-1 mb-0">¿No tiene una cuenta?</p>
                  <Link to="/register">
                    <button type="button" className="btn-lg color-button"
                    ><FontAwesomeIcon icon={faUserPlus} /> Registrarse</button>
                  </Link>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Login;
