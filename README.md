# Consigne

Par étape, arriver à l'application final :

![Application finalisée](https://github.com/devilnside77/js_exo_apres_midi/blob/master/public/Capture.GIF)

* Utiliser les selectors pour les différents champs (nom prenom license ainsi que le resultat et la liste) et pour les 2 boutons;
* Faire dans l'index la méthode qui au clic de "say my name" retourne dans le champs avec id result_id le name et firstname;
* Etendre Person pour créer un nouvel objet Soatien tel que présenté dans la base;
* Completer les XhrUtils avec une méthode onLoad et avec l'appel des requêtes;
* Dans l'API faire les imports et exports pour que l'API recupère toutes les entities et exports l'ensemble des champs;
* Importer dans l'index l'API et faire la méthode qui appelera les méthodes getSoatiens() et getTools() de l'API et retournera une promesse contenant un array de Soatien et un array de Tool;
* Faire appel à la méthode précédente et afficher les resultats dans la liste;
* Faire l'handler qui permet de post un soatien depuis le formulaire;


# Webpack Frontend Starterkit

A lightweight foundation for your next webpack based frontend project.

## Getting started

### Installation

```
npm install
```

### Start Dev Server

```
npm run dev
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel-loader](https://github.com/babel/babel-loader)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file and included in the head of your `index.html`, so that the styles are applied before any javascript gets loaded. We disabled this function for the dev version, because the loader doesn't support hot module replacement.


# JSON Server

Get a full fake REST API with zero coding in less than 30 seconds (seriously)

## Getting started

### Install JSON Server 

```
npm install -g json-server
```

### Create a `db.json` file with some data

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

### Start JSON Server

```bash
json-server --watch db.json
```

Now if you go to [http://localhost:3000/posts/1](http://localhost:3000/posts/1), you'll get

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

Also when doing requests, it's good to know that:

- If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved to `db.json` using [lowdb](https://github.com/typicode/lowdb).
- Your request body JSON should be object enclosed, just like the GET output. (for example `{"name": "Foobar"}`)
- Id values are not mutable. Any `id` value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.
- A POST, PUT or PATCH request should include a `Content-Type: application/json` header to use the JSON in the request body. Otherwise it will result in a 200 OK but without changes being made to the data.
