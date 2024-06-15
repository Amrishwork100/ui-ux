import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       email: "",
  //       password: "",
  //       token: "",
  //       otp: "",
  //       message: "",
  //     };

  //   }
  let [email, setEmail] = useState("test@test.com");
  let [password, setPassword] = useState("@abc1234");
  let [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function onLoginClick(event) {
    var user = {
      email: email,
      password: password,
    };

    //console.log("I am going to call login service...");
    event.preventDefault();
    var response = await fetch("http://localhost:9090/user/v1/api/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
        Accept: "*/*",
      },
    });
    //console.log("Wating for response ...");
    var body = await response.json();
    //console.log("Finally got the response....");
    console.log(body);
    if (body != null) {
      console.log("inside if block... " + body.email);
      console.log(props);
      props.updateLoginStatus(true);
      setMessage(<span className="text-primary"> Succesfully login</span>);
      // console.log(this.props);

      //console.log(this.state.message);
      navigate("/customers");
    } else {
      setMessage(
        <span className="text-danger"> Invalid login! please try again</span>
      );
      console.log("inside else block... " + body.token);
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <p className="align-center text-primary">{message}</p>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-warning "
              onClick={onLoginClick}
            >
              Submit
            </button>
          </div>
          <div className="set-password-register">
            <p className="text-right-p1">
              Forgot <a href="#">password?</a>
            </p>
            {/* <p className="text-right-p2">New User? <a href="#">Registration</a></p> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
