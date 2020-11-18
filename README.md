## Reto Rimac por Richard Principe Quiroz
Este proyecto es un API escalable con serverless framework, nodejs, dynamodb, swapi. Implementa dos endpoints para la entidad People. Uno para obtener y otro guardar una persona.

## Instalación de credenciales - Configuración inicial
Abrir un terminal a un directorio distinto al de este proyecto. Luego ingresar estas credenciales de aws

```bash
serverless config credentials --provider aws --key xxxxxxxxxx --secret xxxxxxxxxxxxxxxxxxxx --overwrite
```

## Comandos en el directorio del proyecto
Desde un terminal en el directorio de este proyecto ejecutar los siguientes comandos.

Para instalar dependencias
```bash
npm install
```

Para ejecutar pruebas unitarias
```bash
npm run test
```

Para ejecutar en modo offline
```bash
serverless offline start --stage dev --service reto-people --port 3000
```

Para hacer despliegue en modo developer
```bash
serverless deploy --stage dev --service reto-people
```

## Endpoints
GET people
```bash
/dev/people/{id}
```

POST people
```bash
/dev/people
```
