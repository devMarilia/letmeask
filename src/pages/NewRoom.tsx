import { Link } from 'react-router-dom'

import illustationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'


import {Button} from '../components/Button'

import '../styles/auth.scss'

export function NewRoom(){
    return(
        <div id="page-auth">
        <aside>
          <img src={illustationImg} alt="Ilustração simbolizando perguntas e respostas" />
          <strong>Crie salar de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo real</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="LetMeAsk" />
            <h2>Criar uma nova sala</h2>

              <form>
              <input
                type="text"
                placeholder="Nome da sala"
              />
              
              <Button type="submit">Criar sala</Button>
            </form>
            <p>
                Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
            </p>
          </div>
        </main>
      </div>
    )
}
