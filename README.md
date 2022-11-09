<h1 align="center">
   <a href="https://ez-bracket.vercel.app/" target="_blank">ezBracket 🏆</a>
</h1>

<h3 align="center">Plataforma de gerenciamento de torneios entre amigos de forma rápida e gratuita!</h3>

![Captura de tela de 2022-11-09 13-22-34](https://user-images.githubusercontent.com/102761014/200884463-b7739bf9-89d3-4c7d-98ce-88fa9e93260f.png)

<br/>

## 🎲 Sobre o projeto
Competição é algo que está enraizado na cultura brasileira. Desde grandes campeonatos oficiais ou em confraternizações informais, é comum o espírito competitivo aflorar nas pessoas e fazê-las almejar a vitória. O grande problema se apresenta no gerenciamento destes eventos, onde normalmente se empregam vários métodos de controle simples e comumente analógicos: quadros de giz, pedaços de papel, escritas em um caderno, etc.

A distribuição dos nomes dos participantes através destes métodos simples para a montagem das chaves e escolha de um membro do grupo para ser o responsável pela organização e andamento da competição são práticas comuns em eventos informais. Porém, o uso deste método de organização mais simples pode conter falhas que atrapalham o andamento das partidas e até mesmo geram desacerto entre os participantes.

Nossa solução visa facilitar este processo através de uma aplicação desenvolvida em ambiente web que permitirá que um usuário cadastrado crie e gerencie diferentes tipos de torneio. Dentro desta aplicação, o usuário terá um histórico dos torneios que já gerenciou e dos que estão em andamento. Com a ferramenta de criação de campeonatos o usuário poderá acompanhar seu torneio dando a ele um nome, estabelecendo regras e registrando o número de participantes. O sistema ainda permitirá manter um histórico dos vencedores de campeonatos passados.

<br/>

## 🦾 Tecnologias utilizadas

### 🛠 Front-end
- **Figma** - Ferramenta de prototipação.
- **React** - Biblioteca JavaScript.
- **TypeScript** - Tipagem do JavaScript para padronizar e escalar o código.
- **Chakra UI** - Biblioteca de componentização.
- **TailwindCSS** - Aplicação de estilos na aplicação.
- **Axios** - Gerenciamento de requisições HTTP.
- **React Hook Form** & **Yup** - Gerenciador de formulários e validações.
- **React Router DOM** - Criação de rotas na aplicação.
- **Context API** - Criação e gerenciamento de contextos no código.
- **React Icons** - Biblioteca de ícones do React.
- **Animate.css** & **Framer Motion** - Biblioteca de animações.
- **React Intersection Observer** - Monitoramento de elementos em tela para criar determinadas animações e situações.

<br/>

### 🔨 Back-end (JSON Server)
- **Registro (POST):** Registro do usuário na plataforma.
- **Login (POST):** Login do usuário na plataforma.
- **Todos os usuários (GET):** Capturar as informações de todos os usuários cadastrados na plataforma.
- **Edição de usuário (PATCH):** Editar as informações da conta do usuário.
- **Competições (GET):** Mostrar todas as competições cadastradas na plataforma.
- **Nova competição (POST):** Cadastrar uma nova competição eliminatória na plataforma.
- **Players do campeonato (PUT):** Adicionar novos players ao campeonato e definir os vencedores.
- **Deletar competição (DELETE):** O usuário pode excluir a competição da plataforma.

<br/>

### ✅ Links da aplicação
- [Figma do projeto](https://www.figma.com/file/d2n7tYjuddD4Ckli6VbPXA/ezBracket?node-id=0%3A1)
- [Deploy](https://ez-bracket.vercel.app/)
- [Documentação do JSON Server](https://github.com/ez-Bracket/server)

<br/>

<h1 align="center">👥 Desenvolvedores responsáveis</h1> 

<table align="center">
  <tr>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/102761014?v=4" width="100px;" alt="Foto do Matheus"/><br>        
        <sub>
          <b>Matheus Felipe</b> <br/>
          <b>Scrum Master</b> <br/>
          <div align="center">
            <a href="https://github.com/matheusfelipetp" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
          </div>
           <div align="center">
            <a href="https://www.linkedin.com/in/matheusfelipetp/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
           </div>
        </sub>
    </td>
    <td align="center">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE9nSrEiZAuPA/profile-displayphoto-shrink_800_800/0/1651346524100?e=1673481600&v=beta&t=_jlJ9Pz3M7cKs7FEhxd_8Ej_rOkCxWaUkXA1vBVMKMw" width="100px;" alt="Foto do Gustavo"/><br>        
        <sub>
            <b>Gustavo Ferreira</b> <br/>
            <b>Tech Lead</b> <br/>
             <div align="center">
            <a href="https://github.com/guferreira1" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
            </div>
            <div align="center">
                <a href="https://www.linkedin.com/in/gus-ferreira/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
            </div>
        </sub>
    </td>   
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/106685596?v=4" width="100px;" alt="Foto do Pedro"/><br>        
        <sub>
          <b>Pedro Silva</b> <br/>
          <b>Product Owner</b> <br/>
           <div align="center">
            <a href="https://github.com/Pedrosilvacwb" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
           </div>
            <div align="center">
              <a href="https://www.linkedin.com/in/pedrosilvacwb/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
             </div>
        </sub>
    </td>
      <td align="center">
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQEuHFmQVdW6dA/profile-displayphoto-shrink_800_800/0/1653584673425?e=1673481600&v=beta&t=jfNBFsqyBywBoBQx7zutQT6lWuEQrXsbpNh0wcoDd2Y" width="100px;" alt="Foto do Ayrton"/><br>          
        <sub>
          <b>Ayrton Hideo</b>  <br/>
          <b>Quality Assurance</b> <br/>
           <div align="center">
            <a href="https://github.com/hideo651" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
            </div>
             <div align="center">
                <a href="https://www.linkedin.com/in/ayrton-hideo-hirata-29aa4367/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
             </div>
        </sub>
    </td> 
  </tr>
</table>

<table align="center">
  <tr>
    <td align="center">
        <img src="https://avatars.githubusercontent.com/u/106822915?v=4" width="100px;" alt="Foto do Enrico"/><br>          
        <sub>
          <b>Enrico Vieira</b>  <br/>
            <b>Quality Assurance</b> <br/>
             <div align="center">
            <a href="https://github.com/enricovieira" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
            </div>
             <div align="center">
                <a href="https://www.linkedin.com/in/enricovieira/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
             </div>
        </sub>
    </td>    
    <td align="center">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFebRQHqQaWxw/profile-displayphoto-shrink_800_800/0/1578356668381?e=1673481600&v=beta&t=qEaDh8enl0t2v9nUpQOpfkpFDALkxq8JoiGfTJT1EG0" width="100px;" alt="Foto do Fred"/><br>          
        <sub>
          <b>Frederico Almeida</b>  <br/>
          <b>Quality Assurance</b> <br/>
           <div align="center">
            <a href="https://github.com/almeidafrederico" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
           </div>
            <div align="center">
                <a href="https://www.linkedin.com/in/almeidaafrederico/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
            </div>
        </sub>
    </td>    
    <td align="center">
        <img src="https://media-exp1.licdn.com/dms/image/D4D03AQFue6V0n3h8AQ/profile-displayphoto-shrink_800_800/0/1665627559778?e=1673481600&v=beta&t=u2aBm7kRyV5bGFATyMHonjUuVS9TQCq_yms-YFsGLb8" width="100px;" alt="Foto do Victor"/><br>          
        <sub>
          <b>Victor Silva</b>  <br/>
          <b>Quality Assurance</b> <br/>
          <div align="center">
            <a href="https://github.com/VictorHugo110199" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"/>
          </div>
          <div align="center">
            <a href="https://www.linkedin.com/in/victor-hugo-santos-silva-b5ab7a144/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"/>
           </div> 
        </sub>
    </td> 
  </tr>
</table>
