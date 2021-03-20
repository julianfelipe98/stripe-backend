# Plataforma de Pagos Backend - Trabajo de Campo
Implementación de pasarela stripe con nodeJS

## Integración de la pasarela de pago
Para integrar stripe se se realizo la conexion a la API y el metodo de pago de tarjeta de credito ,el backend fue desarrollado en nodeJS.

la conexion a la API de stripe se encuentra se encuentra en el archivo app.js , esta llave es privada por lo cual se encuentra definida en una variable de entorno que por motivos de seguridad no se puede hacer publica , en el desarrollo se manejo mediante dotenv y para el despliegue se definio como variable de entorno de heroku.

## Testing mode 
Actualmente la implementacioon del lado del backend es solo una prueba por lo cual tiene datos quemados como lo son , la moneda , el monto del pago y la descripcion del pago. 

##Despliegue 
Para probar el funcionamiento de la pasarela de pago , el backend se encuentra desplegado a traves del servicio gratuito de heroku



