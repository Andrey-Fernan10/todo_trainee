import { useState } from "react"

function App() {
const [tarefas, setTarefas] = useState([])

const adicionarItem = function (title, description) {
  setTarefas((trf) => {
    return [ {title, description}, ...trf]
  })
}

const handleSubmit = function (event) {
  event.preventDefault()

  const title = event.target.title.value
  const description = event.target.description.value
 
  adicionarItem(title, description)

  event.target.title.value = ''
  event.target.description.value = ''
}

  return(
    <div> 
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Título: </label>
            <input type="text" name="title" />
          </div>
                    <div>
            <label htmlFor="description">Descrição: </label>
            <input type="text" name="description" />
          </div>
          <button type='submit'>Salvar</button>
          </form>
      </div>
      <div>
        <ul>
          {tarefas.map((item) => <li key={item.title}>{item.title}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App
