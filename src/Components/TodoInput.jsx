import React, { useRef, useState } from 'react'
import { Box,Center,Input,Button } from '@chakra-ui/react';
const TodoInput = ({addTodo}) => {
   const[text,setText]=useState("");
   const inputRef=useRef(null);
   
   const handleAddClick=()=>{
    inputRef.current.focus();
     if(!text) return
      addTodo(text);
      setText("");
   }
  return (

    <Box mt={10}>
      <Center>
         <Input ref={inputRef} value={text} placeholder="Add Todo" type="text" onChange={(e)=> setText(e.target.value)} size="lg" w="50%" p={8}/>
         <Button colorScheme='teal' size='lg' onClick={handleAddClick} ml={3}>ADD</Button>
      </Center>
        
    </Box>
  )
}

export default TodoInput;
