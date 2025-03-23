API de Gestion de Bibliothèque

Cette API RESTful permet de gérer une bibliothèque de livres et d'auteurs, avec une authentification JWT pour sécuriser les routes sensibles.

## Fonctionnalités

* **Gestion des Livres :**
    * Création, lecture, mise à jour et suppression de livres.
    * Affichage de la liste des livres et des informations détaillées d'un livre.
* **Gestion des Auteurs :**
    * Création, lecture, mise à jour et suppression d'auteurs.
    * Affichage de la liste des auteurs et des informations détaillées d'un auteur.
* **Authentification :**
    * Inscription et connexion des utilisateurs.
    * Protection des routes sensibles avec JWT.

## Technologies Utilisées

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* bcrypt
* jsonwebtoken

## Installation

1. Clonage du dépôt :

    ```bash
    git clone <URL_DU_DÉPÔT>
    cd library-api
    ```

2. Installation des dépendances :

    ```bash
    npm install
    ```

3. Configuration de la base de données :

    * Remplacez `'votre_uri_mongodb_atlas'` dans `config/db.js` par votre URI de connexion MongoDB Atlas.
    * Remplacez `'votre_secret_jwt'` dans `controllers/authController.js` et `middlewares/authMiddleware.js` par votre secret JWT.

4. Démarrez le serveur :

    ```bash
    npm start
    ```

    Le serveur est accessible sur `http://localhost:5000`.


### Authentification

* **POST /api/auth/register :** Inscription d'un utilisateur.
* **POST /api/auth/login :** Connexion d'un utilisateur et obtention d'un jeton JWT.

### Livres

* **GET /api/books :** Liste de tous les livres.
* **GET /api/books/:id :** Informations d'un livre spécifique.
* **POST /api/books :** Création d'un livre (nécessite un jeton JWT).
* **PUT /api/books/:id :** Mise à jour d'un livre (nécessite un jeton JWT).
* **DELETE /api/books/:id :** Suppression d'un livre (nécessite un jeton JWT).

### Auteurs

* **GET /api/authors :** Liste de tous les auteurs.
* **GET /api/authors/:id :** Informations d'un auteur spécifique.
* **POST /api/authors :** Création d'un auteur (nécessite un jeton JWT).
* **PUT /api/authors/:id :** Mise à jour d'un auteur (nécessite un jeton JWT).
* **DELETE /api/authors/:id :** Suppression d'un auteur (nécessite un jeton JWT).