# **Dev-Commerce**

O Dev-Commerce destina-se a criação de uma plataforma de e-commerce, utilizando as ferramentas ReactJs, React Native, NextJs e NodeJs.

O intuito deste projeto é colocar em prática os aprendizados ao longa da minha jornada e compartilhar através do canal Devtrails no youtube todo o processo de sua criação.

Nele iremos criar um sistema monorepo utilizando para isso o Turborepo da Vercel em sua gestão. O sistema irá contar com uma estrutura contendo, o design system da aplicação, módulo front-end web, módulo front-end mobile (android e ios), server e container de estados. Utilizaremos também a integração contínua e entrega contínua, reforçando a automação na compilação, teste e implantação de aplicativos

Conforme formos avançando com o desenvolvimento de nossas aplicações cada uma das escolhas tomadas serão defendidas visando a performance, qualidade do código, manutenibilidade, documentação e testes.

&nbsp;

## Dev-Commerce (Monorepo)

O projeto, como já dito, será estruturado em um sistema monorepo, uma vez que essa estrutura garante um melhor gerenciamento das dependências, reutilização de código de pacotes compartilhados, configurações de (Eslint, TSconfig, etc).

Além destas vantagens técnicas, a facilidade de realizar pesquisas entre todos os projetos e a alteração cruzada de código nos permite uma maior agilidade e entregas mais rápidas.

Também, como dito anteriormente, faremos uso do Turborepo, principalmente pela sua performance e facilidade de uso e configuração. Tendo como princípio básico de nunca recalcular o trabalho que já foi realizado antes, nosso sistema ganha velocidade ao realizar as operações em cima apenas do que sofreu alguma alteração em código. Outras vantagens são a execução paralela, sem desperdiçar CPUs ociosas, pipelines de tarefas e cache remoto, permitindo o CI/CD com compilações ainda mais rápidas.

O sistema também deverá ser configurado para manter uma padronização de nosso código e commits, além de ter uma integração e entregas contínuas. Assim, iremos adotar as seguintes libs:

- [x] Turborepo

- [x] Typescrypt

- [x] Eslint

- [x] Prettier

- [x] Husky

- [x] Commitlint

- [x] Commitezen

&nbsp;

### Observações finais

Conforme nosso projeto for escalando, poderemos tomar decisões diferentes, talvez migrando o projeto para uma estrutura micro frontend, aumentando a sua complexidade e ganhando performance nas aplicações.

&nbsp;

# Design System (dev-commerce-ui)

Utilizaremos para a construção de nosso design system o framework React, sendo que os seus componentes deverão atender a requisitos de acessibilidade, ter cobertura de teste adequada e possuir documentação clara, para isso iremos adotar as seguintes libs.

- [x] Vite
- [x] ReactJS
- [x] Typescript
- [x] Tailwindcss
- [ ] Radix UI
- [ ] Vitest
- [x] Storybook
- [x] Workflow CI
