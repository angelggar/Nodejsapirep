# nodeJS <img src="https://www.lomasnuevo.net/wp-contentupl/2018/04/Nodejs.png" alt="Node.js anuncia la primera versión en su línea 10.x Nodejs noticias, desarrollo" style="zoom:10%;" />

# Pasos iniciales

Creamos un directorio, iniciamos el proyecto con el editor de código (*[Visual Studio Code](https://code.visualstudio.com/)*) :


```sh
mkdir "nombredirectorio"
code .
```

# Creación *package.json*

Creamos el archivo **package.json** con el comando siguiente con la opción -y (responde "sí" a todas las preguntas):

* *[npm init](https://docs.npmjs.com/cli/v6/commands/npm-init)*
* [Crear package.json](https://docs.npmjs.com/creating-a-package-json-file)

Abrimos terminal (Ctrl + shift +`)

```sh
npm init -y
```

# Instalamos **[Express](https://expressjs.com/es/)**

* *Express* es una infraestructura de aplicaciones web Node.js mínima y flexible

```sh
npm install express
```

* Se crea un directorio con las herramientas para el desarrollo

<img src="/home/angelggar/.config/Typora/typora-user-images/image-20210216165700026.png" alt="image-20210216165700026" style="zoom:50%;" />



* Creamos el archivo *.gitignore*

```sh
touch .gitignore
code .gitignore 
```

Añadimos *node_modules* la gitignore, debido a que es un archivo pesado, para evitar subirlo al repositorio

# Creamos index.js

```sh
touch index.js
code index.js 
```

# Instalamos **[esm](https://www.npmjs.com/package/esm)**

Es un cargador de módulos.

```sh
npm install esm
```

# Compilamos index.js

```sh
node -r esm index.js
```

Si queremos usar npm start, debemos incluir en package.json: 

```js
  "scripts": {
    "start": "node -r esm index.js"
  },
```

Desde terminal ya podemos `usar npm start`

Si hacemos un clone del repositorio, debemos usar `npm i`

# Probando código

```sh
http :3500
http :3500 -v
http post :3000
http get :3000
```

# Sincronizando con git

Primer commit y creación del repositorio a través de  `gh`

```sh
git init
git config user.name "Your Name"
git config user.email "youremail@yourdomain.com"
git add .
git commit -m "First commit"
gh repo create
git push origin master
gh repo view --web
```

