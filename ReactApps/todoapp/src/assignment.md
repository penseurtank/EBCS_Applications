# todo app

Step01: To implement ToDo-App
=> require input box, and add button to add task in todo list.
=> each task has particuler check-box, stike-text-when completed, delete/remove task.

# declear variables and function to handle state.

exmple: const [text, setText] = useState(''); // for storing input text value to show current text value...

# handlers

exmple: handleAddTask(), handleDeleteTask(), handleCompleteTask()
const [addTask, setAddTask] = useState([])

# for local-storage...

() => {
const saveData = localStorage.getItem('tasks');
return saveData ? JSON.parse(saveData) : [];
}

# action from keyboard using 'enter-key-word'

const handleKeyDown = (e) => {
if(e.key === 'Enter') handleAddTask.
}

# For UI/JSX part, you need to maintain UI.
