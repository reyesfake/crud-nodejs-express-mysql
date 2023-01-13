# crud-nodejs-express-mysql

INSTALAR DEPENDENCIAS:

npm install mysql ,

npm install express ,

npm install body-parser ,

npm install nodemon

/
CREATE DATABASE carrosbd;
/

luego creamos una tabla en la base de datos carrosbd:

/
CREATE TABLE carros (

id int(200) AUTO_INCREMENT ,

marca varchar(100) NOT NULL ,

modelo varchar(100) NOT NULL ,

año int(4) NOT NULL ,

placa varchar(10) NOT NULL ,

estado varchar(25) NOT NULL ,

PRIMARY KEY (id)
 );
/

----IMPORTANTE------

Crear usuario en la base de datos llamado: "userprueba"

con la contraseña: 123456

O
o modificar el usuario y contraseña por los que utilice en la base de datos, la configuracion se encuentra en el archivo: "conexion.js" de la carpeta: config. 

ULTIMO PASO: escribir en terminal: npm start.
