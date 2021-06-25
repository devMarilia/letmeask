import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import illustationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'


import {Button} from '../components/Button'
import { database } from '../sevices/firebase'

import '../styles/auth.scss'


export function NewRoom(){
  const { user } = useAuth()

  const  [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent){
    event.preventDefault()


    if(newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })
  }
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

              <form onSubmit={handleCreateRoom}>
              <input
                type="text"
                placeholder="Nome da sala"
                onChange={event => setNewRoom(event.target.value)}
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
