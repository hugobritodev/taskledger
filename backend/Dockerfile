# backend/Dockerfile
FROM node:22

WORKDIR /usr/src/app

# Copia dependências e configurações
COPY package*.json tsconfig*.json ./

# Instala dependências (incluindo as de desenvolvimento)
RUN npm install

# Copia o código-fonte completo
COPY . .

EXPOSE 3000

# Inicia a aplicação com hot-reload (configurado em package.json, por exemplo, usando ts-node-dev)
CMD ["npm", "run", "start:dev"]