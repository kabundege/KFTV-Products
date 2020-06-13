import React, { Component } from 'react';

class forgotPass extends Component {
    state={
        email:'',
        error:'',
        loading:false,
        response:''
    }
    handlerChange = (e) =>{
        const { id,value} = e.target
        this.setState({
            [id]: value
        })
    }
    handlerSubmit = (e) =>{
        e.preventDefault()
        const { email } = this.state;
        this.setState({
            loading:true
        })
        if(email !== 'Admin@gmail.com'){
            this.setState({
                error : 'User NotFound',
                response: ''
            })
        }else{
            this.setState({
                response:'Check Your Email',
                error:''
            })
            setTimeout(()=>{
                this.props.history.push("/reset")
            },2000)
        }
    }
    render() {
        const { email,error,response,loading } = this.state;
        return (
            <div className="container Home">
                <form onSubmit={this.handlerSubmit} className="container">
                    <h5 className="grey-text text-darken-3 center">Enter Your Email</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={this.handlerChange} 
                            required/>
                    </div>
                    <div className="center">
                        <span className="red-text text-darken-2 ">{error}</span>
                        <span className="green-text">{response}</span>
                    </div>
                    <div className="input-field center">
                        <button 
                            className="btn pink lighten-1 z-depth-0"
                            disabled={!email}
                            >{!loading ?(<span>SEND</span>):(<span>loading...</span>)}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default forgotPass;
