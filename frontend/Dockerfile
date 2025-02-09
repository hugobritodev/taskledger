# frontend/Dockerfile
FROM node:22

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

COPY package*.json ./


# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Construa a aplicação React
RUN npm run build
EXPOSE 3000
# Instale o servidor HTTP para servir a aplicação
RUN npm install -g serve

# Exponha a porta que a aplicação irá rodar
EXPOSE 5000

# Inicia o servidor de desenvolvimento (hot-reload)
CMD ["npm", "run", "dev"]