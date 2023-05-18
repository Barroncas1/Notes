import { Container, Links, Content } from "./style"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"


export function Details(){
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit officia officiis laborum optio nulla perspiciatis eos neque nisi tempora at iusto veniam, iure saepe nostrum eaque dolorum ratione adipisci! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore animi, a eaque molestiae et perferendis aperiam excepturi explicabo qui maiores dicta suscipit quas, amet nihil consectetur error vel delectus?
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://github.com/barroncas1</a></li>
              <li><a href="#">https://github.com/barroncas1</a></li>
              <li><a href="#">https://github.com/barroncas1</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
            <Tag title="react" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>  
    </Container>
  )
}