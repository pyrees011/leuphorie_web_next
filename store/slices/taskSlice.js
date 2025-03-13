import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: {
        Personal: [
            { id: 1, title: "Task 1", description: "Description 1", status: "To Do" },
            { id: 2, title: "Task 2", description: "Description 2", status: "In Progress" },
            { id: 3, title: "Task 3", description: "Description 3", status: "Done" }
        ],
        Work: [
            { id: 4, title: "Task 4", description: "Description 4", status: "To Do" }
        ],
        Home: [
            { id: 5, title: "Task 5", description: "Description 5", status: "To Do" }
        ]
    }
};

export const taskSlice = createSlice({
    // TODO: clean up the code (probably not needed) not using redux for task
    name: "tasks",
    initialState,
    reducers: {
        setTasks: (state, action) => {
            state.categories = action.payload;
        },
        addTask: (state, action) => {
            const { category, task } = action.payload;
            if (!state.categories[category]) {
                state.categories[category] = [];
            }
            state.categories[category].push(task);
        },
        updateTask: (state, action) => {
            const { category, taskId, updates } = action.payload;
            if (state.categories[category]) {
                const taskIndex = state.categories[category].findIndex(task => task.id === taskId);
                if (taskIndex !== -1) {
                    state.categories[category][taskIndex] = { ...state.categories[category][taskIndex], ...updates };
                }
            }
        },
        deleteTask: (state, action) => {
            const { category, taskId } = action.payload;
            if (state.categories[category]) {
                state.categories[category] = state.categories[category].filter(task => task.id !== taskId);
            }
        }
    }
});

export const getAllTasks = () => async (dispatch) => {
    // const response = await axios.get('/api/tasks'); // TODO: add api call maybe with rtx query
    dispatch(setTasks(response.data));
}


// export const selectTasks = (state) => state.tasks.categories;
export const selectTasksByCategory = (state, category) => state.tasks.categories[category];
export const selectTasksByCategoryStatus = (state, category, status) => state.tasks.categories[category].filter(task => task.status === status);
export const selectTasksByCategoryStatusAndPriority = (state, category, status, priority) => state.tasks.categories[category].filter(task => task.status === status && task.priority === priority);
// export const selectTasksByCategoryStatusAndPriorityAndDueDate = (state, category, status, priority, dueDate) => state.tasks.categories[category].filter(task => task.status === status && task.priority === priority && task.dueDate === dueDate);

export default taskSlice.reducer;
