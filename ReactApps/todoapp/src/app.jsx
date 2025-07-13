import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [addToDoTask, setAddToDoTask] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [isNotted, setIsNotted] = useState('')

  const handleNotingDown = (e) => {
    e.stopPropagation();
    const task = e.target.value
    console.log('input text live:', task);
    setIsNotted(task)
  }

  // Adding new task...
  const handleAddTodoTask = () => {
    const taskTitle = isNotted.trim();
    console.log(taskTitle, '------------')
    if (!isNotted.trim()) return;

    let updateTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    setAddToDoTask([...addToDoTask, updateTask]);
    setIsNotted('');
  }


  // While using enter key... for adding new task.
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddTodoTask();
  };

  // Deleting.. using filter
  const handleDelete = (id) => {
    setAddToDoTask(addToDoTask.filter((task) => task.id !== id));
  }

  // task stricke-out
  const handleComplete = (id) => {
    setAddToDoTask(addToDoTask.map(
      (task) => task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ))
  }


  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center">
      {/* Heading */}
      <h3 className="text-white text-3xl mt-4">todo - app</h3>

      {/* Content Box */}
      <div className="bg-orange-400 w-1/2 mt-4 px-6 py-4 rounded shadow text-black font-semibold">
        {/* Title */}
        <span className="block text-lg mb-4">Things will start from here...</span>

        {/* Input section */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter your task!"
            className="flex-grow px-3 py-2 rounded outline-none"
            onChange={handleNotingDown}
            value={isNotted}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            onClick={handleAddTodoTask}
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <div className="space-y-2">
          {/* Render actual tasks */}
          {addToDoTask && addToDoTask.length > 0
            ? (addToDoTask.map((task) => (
              <div key={task.id} className="flex items-center justify-between bg-white rounded px-3 py-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <input type="checkbox" onChange={() => handleComplete(task.id)} checked={task?.completed} />
                  <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
                </div>
                <div className="flex gap-2">
                  {/* <button className="text-green-600 hover:text-green-800" title="Complete">
                    ✅
                  </button> */}
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    ❌
                  </button>
                </div>
              </div>
            )))
            : (
              <div className='text-center bg-red-400'>
                <span> No task available!!!</span>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );

  // return (
  //   <>
  //     <ToDoApp />
  //   </>
  // )
}