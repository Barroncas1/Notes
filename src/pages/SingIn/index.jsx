import { Container, Form, Background } from "./styles";
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'

import {Input} from "../../components/Input"
import {Button} from '../../components/Button'

export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input 
                    placeholder="E-mail"
                    type="text"
                    incon={FiMail}
                />

                <Input 
                    placeholder="Senha"
                    type="password"
                    incon={FiLock}
                />

                <Button title="Entrar" />

                <a href="#"> Criar conta</a>
            </Form>

            <Background />
        </Container>
    )
}