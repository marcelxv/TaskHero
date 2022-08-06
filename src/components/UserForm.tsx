import React from 'react'
import styled from 'styled-components';

function UserForm() {
    const LoginForm = styled.form`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background-color: ${(props) => props.theme.colors.secondary};
    `;

  return (
    <>
    <h1>Faça login</h1>
    <LoginForm>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />
        <button type="submit">Entrar</button>
    </LoginForm>
    </>
  )
}

export default UserForm