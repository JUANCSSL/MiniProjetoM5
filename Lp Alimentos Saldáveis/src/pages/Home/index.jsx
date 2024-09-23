import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {
  const users = [
    {
      cafeDaManha: 'Aveia com Frutas',
      'Iogurte natural com mel e granola',
      'Smoothei de espinafre',
       'banana e morango'
    },

    {
      Almoço: 'Peito de frango grelhado com batata doce e brocólis',
      'Arroz integral com Salada de folhas e peixe assado',
      'Salada de quinoa com vegetais'

    },

    {
      Jantar: 'Sopa de lentilhas',
      'Omelete de claras',
      'Salada de grão-de-bico com abacate',
      'Tofu grelhado com legumes'

    },
  ]

  return (
    <div className='container'>
      <form>
        <h1>Crie sua lista de alimentos</h1>
        <input type="text" name='Turno' />
        <input type="text" name='Lista' />
        <button type='button'>Listar</button>
      </form>

      { users.map((user) => (

        <div key={user.turno} >
          <div>
            <p>Turno: {user.turno} </p>
            <p>Lista: {user.text} </p>
          </div>
          <button>
            <img src="{trash}" alt="Deletar" />
          </button>
        </div>

      ))}

      <div>
        <div>
          <h2>Sugestões</h2>
          <p>Turno: </p>
          <p>Lista: </p>
        </div>
        <button>
          <img src="{trash}" alt="Deletar" />
        </button>
      </div>
    </div>
  )
}

export default Home
