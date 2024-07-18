import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {

 Todolist: [], // Assuming todos are stored in an array
  },
  reducers: {
    addtodo: (state, action) => {
        return {
            Todolist: [
              ...state.Todolist,
              {
                id: Date.now(),
                todo: action.payload,
                date: new Date().toDateString(),
                time: new Date().toLocaleTimeString(),
                completed: false,
              },
            ],
          };
    },
    completed:(state,action)=>{
      return {
                ...state,
                Todolist: state.Todolist.map((todo) =>
                   todo.id == action.payload
                    ? {
                       ...todo,
                       completed: true,
                       completedTime: new Date().toLocaleTimeString(),
                    }
                  : todo
                 ),
              }

    },
    deletetodo:(state,action)=>{
      return {
                 ...state,
                  Todolist: state.Todolist.filter((todo) => todo.id !== action.payload),
                }

    },
    edittodo:(state,action)=>{

      return {
        ...state,  
        Todolist:state.Todolist.map((item) => {
        if (item.id === action.payload.id) {
          // This is the item we want to update
          return {
            ...item,
            todo:action.payload.itemData
          };  
        }
        // Keep the rest of the items unchanged
        return item;
      })
    }

    }
   
    



    // Define other reducers as needed
  }
  
});

export const { addtodo,completed,deletetodo ,edittodo} = todoSlice.actions;

export default todoSlice.reducer;
