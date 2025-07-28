# Initiation aux node.js & express 
### Installation de nodejs et npm
- on met à jour le package du système:  ```       sudo apt update && sudo apt upgrade      ```

- On installe node.js:  ```sudo apt install nodejs -y    ```

- Maintenant on installe npm: ```sudo apt install npm -y   ```

## Maintenant qu'on a installé les packages nécessaires on va devoir initialiser le projet:         
- Commande qui nous a permis d'initialiser le projet: ``` npm init```  

- On ajout Express à notre nodejs API: ```npm install express```    

- On exécute le projet avec la commande: ```node nom_appl.js```    

- Le serveur écoute sur le port: ```5000```

## Voici les différentes routes qui nous permettent d'effectuer les transactions avec la CRUD:
### 1. READ
- Retourner toute la liste des produits: ```GET http://localhost:5000/api/products```

- Retourner un seul produit grâce à son ID: ```GET http://localhost:5000/api/products/<id>```

###  2. CREATE 
- Pour ajouter un produit voici la route:  ```POST http://localhost:5000/api/products```

### 3. UPDATE

- On met à jour un produit exepté son status:  ```PATCH http://localhost:5000/api/products/<id>```

- Ici on met à jour que seulement le status du produit grâce à son ID: ```PATCH http://localhost:5000/api/products/<id>/en-stock```

### 4. DELETE

- On supprime un produit grâce à son ID: ```DELETE http://localhost:5000/api/products/688217e90489f69e8c169cad```

## La structure du projet:

```controllers/    
└── products.js     
models/     
└── Product.js      
routes/     
└── products.js         
index.js    
package.json    
package-lock.json   
README.md   
.gitignore     
``` 




