"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function postUserLogin(event) {
    event.preventDefault();
    // イベントのデフォルトの動作を防止する

    const FormData = {
      user:{
        email: email,
        password: password
      }
    }

    await axios.post("http://localhost:3000/api/users/login", FormData);

    router.push("/");

    console.log(FormData);
  }
  
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <a href="/register">Need an account?</a>
            </p>

            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form>
              <fieldset className="form-group">
                <input 
                  className="form-control form-control-lg"
                  type="text" 
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </fieldset>
              <fieldset className="form-group">
                <input 
                  className="form-control form-control-lg" 
                  type="password" 
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </fieldset>
              <button onClick={postUserLogin} className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}