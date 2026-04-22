import { useState } from 'react'
import './App.css'

function App() {
  
  const [tasks, setTasks] = useState([])
  
 
  const [inputValue, setInputValue] = useState('')

  
  const addTask = (e) => {
    e.preventDefault() 
    
    console.log('Função addTask chamada') 
    
    if (inputValue.trim() === '') {
      alert('Por favor, digite uma tarefa!')
      return
    }

    
    const newTask = {
      id: Date.now(),
      text: inputValue.trim()
    }

    console.log('Nova tarefa criada:', newTask) 

    
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks, newTask]
      console.log('Tasks atualizadas:', updatedTasks)
      return updatedTasks
    })
    
    setInputValue('') 
  }

  
  const removeTask = (id) => {
    console.log('Removendo tarefa com ID:', id) 
    
    
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== id)
      console.log('Tasks após remoção:', updatedTasks) 
      return updatedTasks
    })
  }

  console.log('Renderizando componente. Tasks:', tasks) 
  return (
    <div className="app">
      <h1>📝 Minha Lista de Tarefas</h1>
      
    
      <form onSubmit={addTask} className="add-task-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite uma nova tarefa..."
          className="task-input"
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>
      </form>

    
      <button 
        onClick={() => {
          const newTask = {
            id: Date.now(),
            text: 'Tarefa de teste'
          }
          setTasks([...tasks, newTask])
        }}
        style={{ marginBottom: '10px', padding: '5px 10px' }}
      >
        Adicionar Tarefa de Teste
      </button>

      
      <div className="tasks-list">
        {tasks.length === 0 ? (
          <p className="empty-message">Nenhuma tarefa cadastrada!</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <span className="task-text">{task.text}</span>
              <button 
                onClick={() => removeTask(task.id)}
                className="remove-button"
              >
                Remover
              </button>
            </div>
          ))
        )}
      </div>

      
      <div className="task-counter">
        Total de tarefas: {tasks.length}
      </div>
      
      
      <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
        Debug: {tasks.length} tarefa(s) no estado
      </div>
    </div>
  )
}

export default App