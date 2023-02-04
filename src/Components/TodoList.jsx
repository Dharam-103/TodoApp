
import { Box, Center } from '@chakra-ui/react';
import Task from './Task';

const TodoList = ({todos,handleDelete,handleToggleStatus}) => {
 

 return (
    <Box>
         {
           todos?.map((todo)=>(
            <Center>
              <Box key={todo.id}  w="70%" mt={5} borderRadius="10px" p={5} boxShadow='outline'mb={'10px'}>
                 <Task  todo={todo} handleDelete={handleDelete} handleToggleStatus={handleToggleStatus}/>
              </Box>
            </Center>
           ))
         }
    </Box>
  )
}

export default TodoList;
