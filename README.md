# 🐾 Mocking API - Entrega Backend 3

API desarrollada con Express, MongoDB y Swagger, preparada para ejecutarse dentro de Docker + Kubernetes en Minikube.
Incluye endpoints mockeados, persistencia en MongoDB, documentación OpenAPI y soporte completo para despliegue local usando Minikube.

---

## Imagen Docker disponible

Podés descargar la imagen directamente desde Docker Hub:

```bash
docker pull matiastech/mocking-api:v3
```
o

```bash
docker pull matiastech/mocking-api:latest
```

También podes ingresar al repositorio oficial:
https://hub.docker.com/r/matiastech/mocking-api

## Cambios introducidos en la versión v3

*Imagen reconstruida dentro del Docker de Minikube.
*Deployment actualizado mediante:

```bash
kubectl set image deployment/mi-proyecto-deployment mi-proyecto-api=matiastech/mocking-api:v3
```

*Documentación Swagger funcionando en /api/docs
*Logs limpios y unificados
*Conexión estable a MongoDB Atlas o local

## Variables de entorno (ENV)

MONGO_URL=mongodb+srv://coder:coderpass@ecommerce-cluster.3w20xtd.mongodb.net/myEcommerce?retryWrites=true&w=majority&appName=ecommerce-clusterappName=Cluster0
PORT=8080

## Cómo levantar el proyecto en Minikube

### 1. Activar entorno Docker interno de Minikube

```bash
eval $(minikube -p minikube docker-env)
```

Verificar: 

```bash
echo $DOCKER_HOST
docker ps
``` 

### 2. Construir imagen Docker dentro de Minikube

```bash
docker build -t matiastech/mocking-api:v3 .
```
### 3. Aplicar deployment y service

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### 4. Verificar que el pod esté corriendo

```bash
kubectl get pods
kubectl logs -l app=mi-proyecto-api --tail=50
```

Deberías ver:
```bash 
Servidor escuchando en el puerto 8080
Conectado a MongoDB.
```

### 5. Acceder desde el navegador

```bash
minikube service mi-proyecto-service --url
```

Esto abrirá el navegador en la URL correcta (ej: http://192.168.49.2:30080).

## Swagger - Documentación interactiva

Una vez levantado: http://TU_URL/api/docs

## Endpoints disponible

```
🔹 HTML de entrada
- / → Página con links y formulario para generar datos
🔹 Mocking sin persistencia
- /api/mocks/mockingusers → 50 usuarios mockeados
- /api/mocks/mockingpets → 20 mascotas mockeadas
🔹 Generar datos en Mongo
- POST /api/mocks/generateData → Inserta usuarios y mascotas en la base
- También disponible desde el formulario HTML en /

🔹 Consultar datos persistidos
- /api/users → Usuarios guardados en Mongo
- /api/pets → Mascotas guardadas en Mongo
```

### Requisito

```
- Node.js v18+
- MongoDB Atlas o local
- Docker
- Minikube
- Kubernetes
```