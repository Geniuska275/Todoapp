import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
 Todolist: []
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
    Uncompleted:(state,action)=>{
      return {
                ...state,
                Todolist: state.Todolist.map((todo) =>
                   todo.id == action.payload
                    ? {
                       ...todo,
                       completed: false,
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
    settodos:(state,action)=>{
     
      return {
                 ...state,
                  Todolist: action.payload,
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
            todo:action.payload.itemData,
            completed: item.completed,
            completedTime: item.completedTime,
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString(),
 
          };  
        }
        // Keep the rest of the items unchanged
        return item;
      })
    }

    },
   
    saveItem: (state, action) => {
      const item = action.payload;
      state.Todolist.push(item);
    },
    loadItems: (state, action) => {
      const items = JSON.parse(action.payload);
      state.Todolist = items;
    },

    // Define other reducers as needed
  }
  
});

export const { addtodo,
  completed,
  saveItem,
  loadItems,
  edittodo,
  settodos,
  deletetodo,
  Uncompleted
} = todoSlice.actions;

export default todoSlice.reducer;
