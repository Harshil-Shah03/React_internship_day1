import React,{useState} from "react";


function App()
{
    
    const userData = [
        { id:1,name: "John", age:25, gender: "Male" },
        { id:2,name: "Jane", age:30, gender: "Female" },
        { id:3,name: "Bob", age:22, gender: "Male" },
        { id:4,name: "Alice", age:28, gender: "Female" },
    ];
    const [state] = useState(userData)
    console.log(state)
    // assignment 2: example to display usertable using props in functional component
    function Display(props){
        return(
        
            <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.gender}</td>
            </tr>
        
        );
    
    }
    
    function mapper(data){
        return (<Display 
                key ={data.id}
                id = {data.id}
                name={data.name}   
                age={data.age}  
                gender={data.gender}/>);
    }

    const root = document.getElementById('root');
    return(<table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
    </thead>
      <tbody>
        {state.map(mapper)}
        {/* <Display 
            name={userData[0].name}   
            age={userData[0].age}  
            gender={userData[0].gender}/>

        <Display 
            name={userData[1].name}   
            age={userData[1].age}  
            gender={userData[1].gender}/>

        <Display 
            name={userData[2].name}   
            age={userData[2].age}  
            gender={userData[2].gender}/>

        <Display 
            name={userData[3].name}   
            age={userData[3].age}  
            gender={userData[3].gender}/> */}
      </tbody>
    </table>);
}


export default App;