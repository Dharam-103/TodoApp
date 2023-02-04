import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Badge, Box, Center,Heading, Stack } from '@chakra-ui/react';
const initialData=JSON.parse(localStorage.getItem("todos")) || []
const Todo = () => {
  const[todos,setTodos]=useState(initialData);
  console.log(todos)
 
  const completedTask=todos?.filter((todo)=> todo.status===true);

  console.log(completedTask);

  const addTodo=(text)=>{
       let newTodo={
          id:Date.now(),
          title:text,
          status:false
       }
       setTodos([...todos,newTodo]);
       
  }
  localStorage.setItem("todos",JSON.stringify(todos))
 const handleDelete=(id)=>{
     const todosAfterDeletion=todos.filter((todo)=> {
          return todo.id!==id
     })
     setTodos(todosAfterDeletion);
    
 }

 const handleToggleStatus=(updateTodo)=>{
    const todosAfterToggle=todos.map((todo)=> {
       return todo.id===updateTodo.id ? updateTodo :todo
    })
    setTodos(todosAfterToggle);
 }
  return (
    <Center>
    <Box boxShadow={'dark-lg'} mt={20} w="50%" borderRadius={'10px'}>
         <Box bg='tomato' w='100%' p={4} color='white' borderRadius={'10px'} >
          <Center><Heading>TodoApp</Heading></Center>
         </Box>
         <Center>
            <Stack direction={'row'} mt={5} spacing="40px" fontSize={"30px"}>
              <Badge colorScheme={'green'} p={5} fontSize="20px" borderRadius={'10px'}>Total task :{todos.length}</Badge>
               <Badge colorScheme={'green'} p={5} fontSize="20px" borderRadius={'10px'}>Completed Task : {completedTask.length}</Badge>
             </Stack>
         </Center>
        <TodoInput addTodo={addTodo}/>
        <TodoList todos={todos} handleDelete={handleDelete} handleToggleStatus={handleToggleStatus}/>
    </Box>
    </Center>
  )
}

export default Todo;
