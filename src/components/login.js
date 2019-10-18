import React,{Component,Fragment} from "react"
import TextField from "@material-ui/core/TextField"
import Fire from "./config/fire"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            show:false
        }
    }
    getEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    getPassword=(e)=>{
        this.setState({password:e.target.value})
    }
    putDetails(){
        if(this.state.show)
        return(<Grid container justify="center" alignItems="center">
            {this.state.email}

        </Grid>)
    }
    handleClick=()=>{
        this.setState({show:true})
    }
    render(){
        return(
            <Fragment>
                <Grid container justify="center" alignItems="center" style={{marginTop:"5%"}}>
               <TextField label="Email" type="email" onChange={this.getEmail} />
               <TextField label="Password" type="password" />

               </Grid>
               <Grid container justify="center" alignItems="center" style={{marginTop:"2%"}}>
                   <Button variant="contained" color="primary" onClick={this.handleClick}>Login</Button>
               </Grid>
               {this.putDetails()}
               
            </Fragment>    
            )
    }
}

export default Login;