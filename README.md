<h1 align="center">Central de Chamados</h1>

<p align="center">
  <em>Uma plataforma digital inovadora desenvolvida para modernizar a gestão de demandas públicas</em>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" />
  <img alt="Prisma" src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" />
  <img alt="WebSocket" src="https://img.shields.io/badge/WebSocket-007ACC?logo=websocket&logoColor=white" />
</p>

## Sobre

A Central de Chamados é uma plataforma digital avançada que transforma a gestão de demandas internas. Ela integra servidores públicos e equipes de atendimento em tempo real, garantindo que cada solicitação seja registrada, acompanhada e resolvida de forma transparente, ágil e eficiente. Com recursos modernos de comunicação e monitoramento, proporciona maior controle, visibilidade e qualidade no atendimento interno, fortalecendo a eficiência da administração pública.

### Desenvolvedor

A Central de Chamados foi desenvolvida por Edgar Souza, estagiário da secretaria. Você pode conhecer outros projetos e contribuições no GitHub: [eded001](https://github.com/eded001/).

## Principais recursos

- Registro rápido e simplificado de solicitações pelos cidadãos.
- Acompanhamento do status em tempo real, fortalecendo a confiança e a transparência.
- Categorização e priorização automáticas, permitindo que demandas urgentes sejam tratadas com prioridade.
- Painéis de gestão com indicadores de desempenho para melhor tomada de decisão administrativa.
- Integração com canais digitais já existentes (aplicativos, site institucional, atendimento presencial).

Com a Central de Chamados, a administração pública reforça seu compromisso com a **inovação, a transparência e a melhoria contínua dos serviços prestados à população**.

## Tecnologias utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express
- **Banco de Dados**: Prisma ORM
- **Tecnologia de Comunicação em tempo real**: WebSocket

## Instalação

Siga os passos abaixo para configurar a **Central de Chamados** em seu ambiente local:

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/central-chamados.git
cd central-chamados
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o _.env_**

- Ajuste a URL do banco no arquivo `.env` (ex.: SQLite, PostgreSQL ou MySQL) - **DATABASE_URL**;
- Defina a porta da aplicação - **PORT**.

```env
DATABASE_URL=../db/database.sqlite
PORT=3000
```

4. Faça a migração inicial da aplicação


```bash
npx prisma migrate dev
```

5. **Inicie o servidor**

```bash
npm start
```

6.  **Acesse a aplicação**

Abra o navegador em `http://localhost:8080` (ou porta configurada) e teste a Central de Chamados.
