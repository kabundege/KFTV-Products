import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            loading : false,
            error : ''
        }
    }
    handlerChange(e){
        const { id,value } = e.target;
        this.setState({
            [id]:value
        })
    }
    handlerSubmit(e){
        e.preventDefault()
        const { email,password } = this.state;
        this.setState({loading:true})
        if(email === "admin@gmail.com"&&password === "admin"){
            this.props.history.push('/dash')
            localStorage.setItem("token","ProvidedAdminToken")
        }else{
            this.setState({
                error : 'User NotFound'
            })
        }
    }
    componentDidMount(){
        if(!localStorage.getItem("token")) return  <Redirect to='/login'/>
    }
    render() {
        const { email,password,error,loading } = this.state;
        return (
            <div className="container Home">
                <h3 className="center black-text text-lighten-3">KFTV Auth</h3>
                <form onSubmit={this.handlerSubmit} className="container">
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={email}
                            onChange={this.handlerChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="Password" 
                            id="Password" 
                            value={password}
                            onChange={this.handlerChange}/>
                        <Link to='/forgot' className="right">Forgot Password ?</Link>
                    </div>
                    <div className="center">
                        <p className="red-text text-darken-2">{ error }</p>
                    </div>
                    <div className="center">
                        <button 
                            className="btn large blue darken-5 waves-effect waves-light"
                            disabled={!email||!password}
                            >{ loading ? (<span>Signin...</span>):(<span> Login </span>)}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
