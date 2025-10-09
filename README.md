# 🐾 Mocking API - Entrega Backend 3

Este proyecto es una API desarrollada con Express y MongoDB para generar y consultar datos mockeados de usuarios y mascotas. Está preparada para ejecutarse dentro de Minikube con Docker y Kubernetes.

---

## Imagen Docker disponible

Podés descargar la imagen directamente desde Docker Hub:

```bash
docker pull matiastech/mocking-api:v1 o docker pull matiastech/mocking-api:latest

```

También podes ingresar a:
https://hub.docker.com/r/matiastech/mocking-api

## 🚀 Cómo levantar el proyecto en Minikube

### 1. Activar entorno Docker interno

```bash
eval $(minikube docker-env)
```
### 2. Construir imagen Docker

```bash
docker build --no-cache -t mi-proyecto-api .
```
### 3. Aplicar deployment y service

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

### 4. Verificar que el pod esté corriend

```bash
kubectl get pods
kubectl logs $(kubectl get pods --selector=app=mi-proyecto-api --output=jsonpath='{.items[0].metadata.name}')

Deberías ver Servidor escuchando en el puerto 8080 y Conectado a MongoDB.
```
### 5. Acceder desde el navegador

```bash
minikube service mi-proyecto-service

Esto abrirá el navegador en la URL correcta (ej: http://192.168.49.2:30080).
```


### Endpoints disponible

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