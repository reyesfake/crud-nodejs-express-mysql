# crud-nodejs-express-mysql

INSTALAR DEPENDENCIAS:

npm install mysql
npm install express
npm install body.parser
npm install nodemon

INSTALAR XAMPP en el ordenador:
dentro de xampp
Darle start a:
Apache y a MySql

dentro de xampp
Darle click a: admin de Mysql

Una vez adentro de phpMyadmin creamos la base de datos: 

/
CREATE DATABASE carrosbd;
/

luego creamos una tabla en la base de datos carrosbd:

/
CREATE TABLE carros (
id int(200) AUTO_INCREMENT,
marca varchar(100) NOT NULL,
modelo varchar(100) NOT NULL,
año int(4) NOT NULL,
placa varchar(10) NOT NULL,
estado varchar(25) NOT NULL,
PRIMARY KEY (id)
 );
/

----IMPORTANTE------
Crear usuario llamado: userprueba
con la contraseña: 123456

---O----
o modificar el usuario y contraseña por los deseados en el archivo: conexion.js de la carpeta: config. 