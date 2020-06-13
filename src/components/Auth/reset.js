import React, { Component } from 'react'

class Reset extends Component {
    constructor(){
        super()
        this.state={
            password:'',
            confirmPassword:'',
            error:'',
            response:'',
            loading:false
        }
    }
    handlerChange = (e) =>{
        const { id,value} = e.target
        this.setState({
            [id]: value
        })
    }
    handlerSubmit = (e) =>{
        e.preventDefault()
        const { password,confirmPassword } = this.state;

        this.setState({
            loading:true
        })

        if(password !== confirmPassword){
            this.setState({
                error : 'Password Not Matching',
                response: ''
            })
        }else{
            this.setState({
                response:'Reset Success',
                error:''
            })
            setTimeout(()=>{
                this.props.history.push("/dash")
            },2000)
        }
    }

    render() {
        const { password,confirmPassword,loading,error,response } = this.state;

        return (
            <div className="container ">
                <form className="white" onSubmit={this.handlerSubmit} className="container">
                    <h5 className="grey-text text-darken-3 center">Reset Your Password</h5>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={this.handlerChange} required/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="ConfirmPasword">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            value={confirmPassword} 
                            onChange={this.handlerChange} 
                            required/>
                    </div>
                    <div className="center">
                        <span className="red-text text-darken-2 ">{error}</span>
                        <span className="green-text">{response}</span>
                    </div>
                    <div className="input-field center">
                        <button 
                            className="btn pink lighten-1 z-depth-0 waves-effect waves-light"
                            disabled={!password||!confirmPassword}
                            >{!loading ?(<span>SEND</span>):(<span>loading...</span>)}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Reset;
