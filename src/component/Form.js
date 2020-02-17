import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state={
            id:"",
            name:"",
            contact:"",
            error:{

            }
        }
    }
    handleChange=(e)=>{
        // console.log("hello");
        // console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // console.log("submitted");
        const {id, name, contact} = this.state;
        if (id===""){
            return this.setState({error:{id:"Please Enter Your ID!"}})
        }else if(name===""){
            return this.setState({error:{name:"Please Enter Your Name!"}})
        }else if(contact===""){
           return this.setState({error:{contact:"Please Enter Your Contact"}})
        }
        this.props.formData(this.state);
        this.setState({id:"", name:"", contact:"", error:{}})
    }
     render() { 
         return ( 
             <div>
                 <div className="card w-50 mx-auto">
                     <div className="card-header" style={{backgroundColor:"blue", color:"white"}}>Record Form</div>
                     <div className="card-body">
                         <form onSubmit={this.handleSubmit}>
                             <div className="form-group">
                                <label htmlFor="id">Id:</label>
                                <input type="number" id="id" 
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.id}
                                name="id"
                                />
                                <span style={{color:"red"}}>{this.state.error.id}</span>
                             </div>
                             
                             <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" 
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.name}
                                name="name"
                                />
                                <span style={{color:"red"}}>{this.state.error.name}</span>
                             </div>

                             <div className="form-group">
                                <label htmlFor="contact">Contact Number:</label>
                                <input type="number" id="contact" 
                                className="form-control"
                                onChange={this.handleChange}
                                value={this.state.contact}
                                name="contact"
                                />
                                <span style={{color:"red"}}>{this.state.error.contact}</span>
                             </div>

                             <button type="submit" className="btn btn-block btn-primary">Submit</button>
                         </form>
                     </div>
                 </div>
             </div>
          );
     }
 }
  
 export default Form;

