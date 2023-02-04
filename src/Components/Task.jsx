import React, { useState } from 'react';
import { Button,Checkbox,Badge,Box, Center,Input} from '@chakra-ui/react';

const Task = ({todo,handleToggleStatus,handleDelete}) => {
   
    const[isEditing ,setIsEditing]=useState(false);
   
    let todoContent;
     if(isEditing){ 
        todoContent=(
           <>
              <Input w={'50%'} value={todo.title} type="text" placeholder="Edit Todo"   onChange={(e)=> handleToggleStatus({...todo,title:e.target.value})}/>
              <Button colorScheme={'blue'} onClick={()=> setIsEditing(false)}>Save</Button>
           </>
        )
  
     }else{
         todoContent=(
          <>
             {todo.title}
          </>
         )
     }

  return (
    <>  
           <Box   display="flex" justifyContent={'space-between'} alignItems="center">
              <Box>
                <Center>
                 <Checkbox borderRadius={'5px'} border={'1px solid blue'} colorScheme={'red'} checked={todo.status} type="checkbox" onChange={(e)=> handleToggleStatus({...todo,status:e.target.checked})} size="lg"></Checkbox>
                 </Center>
              </Box>
             <Box>
                 <Badge colorScheme={'green'} p={3} borderRadius={'10px'} fontSize="20px">{todoContent}</Badge>
                 <Badge colorScheme={'green'} ml={5} p={3} borderRadius={'10px'} fontSize="20px">{todo.status ? "Done" :"Pending"}</Badge>
            </Box>
              <Box>
                <Button colorScheme='red' size='lg' onClick={()=> setIsEditing(true)} mr={3}>Edit</Button>
                <Button colorScheme='teal' size='lg' onClick={()=> handleDelete(todo.id)}>Delete</Button>
              </Box>
              
               
            </Box>    
    </>
  )
}

export default Task;
