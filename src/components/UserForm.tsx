import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import TodoContext from "../context/TodoContext";
import { useContext } from "react";

const Tag = styled.button`
cursor: pointer;
border: 2px solid ${(props) => props.theme.colors.primary};
background-color: ${(props) => props.theme.colors.secondary};
color: ${(props) => props.theme.colors.primary};
padding: 0.5rem 1rem;`

function UserForm({ formType }: { formType: string }) {
  const { isLogged, setIsLogged } = useContext(TodoContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formTyped, setFormType] = useState(formType);

  const logout = () => {
    setIsLogged(false);
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value as string,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (formTyped === "signup") {
      try {
        console.log("signup");
        e.preventDefault();
        const auth = getAuth();
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = await userCredentials.user;
        updateProfile(
          auth.currentUser as any,
          {
            displayName: user.displayName,
          } as any
        );
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("login");
      try {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            // navigate('/');
            setIsLogged(true);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const { name, email, password } = formData;


  return (
    <>
      {isLogged ? (
        <>
          <h1>Seja bem vindo!</h1>
          <Tag className="btn" onClick={() => navigate("/app")}>
            Vá para o Task Hero
          </Tag>
          <Tag className="btn" onClick={logout}>
            Sair
          </Tag>
        </>
      ) : (
        <>
          {formTyped === "login" ? (
            <div>
              <h1>Faça login</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  title="LoginEmail"
                  value={email}
                  onChange={handleChange}
                />
                <label htmlFor="password">Senha</label>
                <input
                  type={showPassword ? "text" : "password"}
                  title="loginPassword"
                  placeholder="Senha"
                  id="password"
                  value={password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
                <button type="submit">Entrar</button>
              </form>
              <button type="button" onClick={() => setFormType("signup")}>
                Criar conta
              </button>
            </div>
          ) : (
            <div>
              <h1>Cadastre-se</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Name"
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  title="signUpEmail"
                  onChange={handleChange}
                />
                <label htmlFor="password">Senha</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  title="signUpPassword"
                  placeholder="Senha"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
                <button type="submit" onClick={() => handleSubmit}>Cadastrar</button>
                <button
                  type="button"
                  className="btn-check"
                  onClick={() => setFormType("login")}
                >
                  Fazer login
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default UserForm;
