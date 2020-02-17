import React from 'react';
import Navbar from './component/Navbar';
import Table from './component/Table';
import Form from './component/Form'
import Swal from 'sweetalert2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from "uuid";

class App extends React.Component {
  state = {
    record:[
      {id:1, name:"Roshan", contact:9868786197},
      {id:2, name:"Anjan", contact:9852158745},
      {id:3, name:"Shrabin", contact:9878547812}
    ]
  };
  delete=(id)=>{
      console.log("Id aayo");
      console.log(id);
      let filterData = this.state.record.filter(function(record){
        return record.id !== id;
      })
      // console.log(filterData)
      

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.setState({record: filterData});
          toast.success("Successfully Deleted")
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
  }
  submitData=(formData)=>{
    // console.log("Parent call");
    // console.log(formData);
    this.setState({record:[formData,...this.state.record]})
    toast.success("Form Submitted")
  }
  editForm=(edittedData)=>{
    console.log(edittedData)
    let editRecord= this.state.record.map(record=>{
      if (record.id===edittedData.id){
        return edittedData;
      }
      return record;
    })
    // console.log(editRecord)
      this.setState({record: editRecord})
      toast.success("Editted Successfully!")
  };
  
  render() { 
    return ( 
      <div>
        <Navbar title={"Record Managent System"}/>
        <Form formData={this.submitData}/>
        <Table 
        record={this.state.record}
        delete={this.delete}
        edit={this.editForm}
        />
        <ToastContainer />
      </div>
     );
  }
}
 
export default App;