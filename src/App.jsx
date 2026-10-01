import { useState } from 'react'

function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    mensagem: '',
  })

  const [enviado, setEnviado] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setEnviado(form)
  }

  return (
    <div>
      <h1>Formulário de Contato</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <br />
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Mensagem:</label>
          <br />
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">Enviar</button>
      </form>

      {enviado && (
        <div>
          <h2>Dados enviados:</h2>

          <p>
            <strong>Nome:</strong> {enviado.nome}
          </p>

          <p>
            <strong>Email:</strong> {enviado.email}
          </p>

          <p>
            <strong>Mensagem:</strong> {enviado.mensagem}
          </p>
        </div>
      )}
    </div>
  )
}

export default App
