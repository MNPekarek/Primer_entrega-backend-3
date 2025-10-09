# Usamos una imagen oficial de Node.js ligera.
FROM node:18-alpine

# Creamos el directorio de trabajo dentro del contenedor.
WORKDIR /usr/src/app

# Copiamos los archivos de dependencias.
COPY package*.json ./

# Instalamos las dependencias de producción.
RUN npm install --only=production

# Copiamos el resto del código de nuestra aplicación.
COPY . .

# Exponemos el puerto en el que corre la aplicación.
EXPOSE 8080

# El comando que se ejecutará al iniciar el contenedor.
CMD [ "node", "src/app.js" ]