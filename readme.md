# Application de gestion des fournisseurs d'un site ecommerce. - React.js

Vous êtes le gérant d'un site ecommerce, ce site vend un produit unique : de la [spiruline](https://fr.wikipedia.org/wiki/Spiruline_%28compl%C3%A9ment_alimentaire%29). Afin de gérer vos stocks, vous souhaitez créer une application permettant de :

- lister vos fournisseurs de spiruline
- savoir si un fournisseur en a en stock
- afficher les fournisseurs sur une carte
- savoir quel est le fournisseur ayant du stock le plus proche pour faire une livraison rapide

![](images/preview.gif)

### 1) Initialiser une application React.

- Commençons par créer une application React.js, pour cela utilisons l'interface en ligne de commande officielle `create-react-app`.

Vous pouvez l'utiliser directement avec `npx`:

```
npx create-react-app NOM_PROJET
```

Comme pour tout projet, prenez le temps de regarder les fichiers créé par la commande avant de lancer le projet. Familiarisez-vous également avec la [syntaxe JSX](https://fr.reactjs.org/docs/introducing-jsx.html).

- Lancez le projet.

### 2) Écran d'accueil.

Dans un premier temps, nous voulons changer l'écran d'accueil, ce dernier vous permettra de choisir entre consulter la liste des fournisseurs ou afficher la carte.

Faites les modifications nécessaires.

- Ajoutez dans votre composant App deux méthodes : `onSuppliersListClick` et `onMapClick` qui devront faire des [alertes](https://developer.mozilla.org/fr/docs/Web/API/Window/alert) pour marquer le fait qu'un utilisateur a cliqué dessus.

### 3) Préparation des écrans.

Nous voulons préparer les écrans de la liste des fournisseurs ainsi que celui de la carte. Avec React (comme avec Vuejs) tout est composant, si nous voulons un nouvel écran, il nous faut un nouveau composant.

- Créez donc deux fichiers `SuppliersList.js` et `SuppliersMap.js`. Les templates de ces composants seront très simples dans un premier temps, par exemple un simple titre h1 contenant 'Liste des fournisseurs' ou 'Carte des fournisseurs' est suffisant.

- Faites en sorte d'ajouter ces deux composants React au template de votre app.

:arrow_right:**Commiter dans git avec un message explicite, par exemple "fin étape 3" ou même "Ajout composants SuppliersList et SuppliersMap"**

### 4) Mise en place d'un routeur.

Tout comme pour Vue, si on veut pouvoir naviguer dans notre application, il va falloir utiliser un routeur coté client.

Il existe plusieurs librairie dans l'écosystème React. Le plus populaire actuellement est [React router](https://reactrouter.com/web/guides/quick-start)
(Attention la v6 de react router change pas mal de chose est devrait sortir bientôt)

##### 4.1) Installation.

Faites l'installation avec npm comme décrite dans la documentation.

##### 4.2) Configuration.

Suivez la documentation de React Router pour configurer le router.

##### 4.3) Utilisation.

Pour naviguer entre les différentes routes, vous avez accès au composant `<Link to="/votre-url">Nom du lien</Link>`

Voici le résultat que vous devriez obtenir : [GIF](http://recordit.co/26PagUagEA)

### 5) Création d'un composant pour représenter un fournisseur.

A ce stade, la liste de fournisseurs est vide, il n'y a donc pas de navigation possible à partir de la liste. Nous allons cependant créer la vue détaillée d'un fournisseur, qui pourra être rendue accessible soit via un bouton `<Link to="..." ></Link>` (temporaire) ou en saisissant l'URL directement comme indiqué en fin de section.

##### 5.1) Composant statique dans une nouvelle route.

Créez dans un premier temps une nouvelle route `'/supplier'` qui va représenter un nouveau composant à créer, `Supplier.js`.

Avec React, pas d'objet data, mais votre composant peut déclarer des variables d'état grace au hook `useState`. [En savoir plus](https://fr.reactjs.org/docs/hooks-state.html)

Les notions liés au `state` sont centrales à la compréhension de React.js **consacrez-y le temps nécessaire**

Ce composant aura donc un state que vous pouvez nommer comme vous voulez :

```
const [data] = React.useState({
    name: 'Mon fournisseur',
    status: false, // est ce qu'il y a du stock
    checkedAt: new Date() // date de la dernière mise à jour du stock
})
```

et aura comme rendu quelque chose ressemblant à :

![](images/step3.png)

Si vous changez `status` en `true` alors :

![](images/step3-2.png)

Notes :

- Pour afficher la date, la méthode [toLocaleString()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleString) de `Date()` devrait vous aider.
- Ici un simple titre h1 est utilisé pour le nom, un h3 pour le statut et un h5 pour la date, vous pouvez bien évidemment l'adapter en fonction de vos envies.
- On a déclaré une route mais pas donné de lien explicite dans l'application pour y accéder, mais vous pouvez directement [changer l'url du navigateur](http://localhost:8080/#/supplier).

:arrow_right:**Faites un commit avec un message explicite**

##### 5.2) Passage de props au composant Supplier.

Comme pour VueJS, avec React ce sont les props qui nous permettent de communiquer entre nos composants et de les rendre paramétrables.

- Dans un premier temps, appelez le composant `Supplier` dans le composant `SuppliersList`. Vous devriez donc avoir la même page aux urls `/suppliers` et `/supplier`.

- Ajoutez le fait que le composant `Supplier` a trois props qui s'appellent `name`, `status` et `checkedAt`, supprimez les datas du composant `Supplier`, mais ajoutez les dans le composant `SuppliersList`.

* Modifiez le composant `SuppliersList` pour passer les props `name`, `status` et `checkedAt`.

À ce stade, vous devriez avoir la même chose qu'avant en terme de rendu, néanmoins nous sommes prêts à faire notre liste de fournisseurs car nous avons un composant `Supplier` qui est paramétrable grâce aux props !

:arrow_right:**Faites un commit avec un message explicite**

### 6) Création d'une liste.

:arrow_right: Modifiez le composant `SuppliersList` pour qu'il contienne un state avec la donnée suivante :

```js
{
  suppliers: [
    {
      id: 1,
      name: "Fournisseur 1 ?",
      status: true,
      checkedAt: new Date(),
    },
    {
      id: 2,
      name: "Fournisseur 2",
      status: false,
      checkedAt: new Date(),
    },
  ];
}
```

:arrow_right: Bouclez maintenant sur cette donnée pour appeler autant de fois le composant `Supplier` qu'il y a d'objets dans cette nouvelle data de `SuppliersList`.

**Question :** Remarquez que nous avons ajouté une clef `id` à nos objets, pourquoi ?

**Votre réponse :**

:arrow_right: Modifiez un peu le style pour que les éléments de la liste soient mieux visibles, voici un exemple de ce que vous pourriez obtenir :

![](images/step4.png)

:arrow_right:**Faites un commit avec un message explicite**

##### 6.1) Formattage des dates

Un timestamp complet n'est pas agréable à lire, encore moins répété dans une liste.
La librairie `timeago.js` nous permet de formatter les dates pour afficher un temps relatif, plus parlant.

:arrow_right: Ajoutez la libraire à votre projet avec npm pour afficher la valeur de `checkedAt` avec un temps relatif.

https://github.com/hustcc/timeago.js

> Il est toujours fondamental de savoir évaluer avant de se lancer un package ou un projet sur github ou même npm.

**Question :** Prenez le temps de regarder la page, qu'est ce qui vous inspire confiance, ou au contraire, méfiance ?

**Votre réponse :**

:arrow_right:**Faites un commit avec un message explicite**

### 7) Création d'une map.

Maintenant, essayons de visualiser les différents fournisseurs sur une carte, chacun avec un marqueur.

##### 7.1) Map vide

Pour afficher une carte nous allons utiliser le fond de carte OpenStreetMap avec la librairie Leaflet, grâce à un package spécialement créé pour React.

Ce package, **react-leaflet**, est disponible à [cette adresse](https://react-leaflet.js.org/).
:arrow_right: Ajoutez cette libraire à votre projet. Attention à bien penser qu'il faut ajouter les styles et autres librairies liés. Comme expliqué dans la documentation

:arrow_right: Affichez une carte dans votre composant `SuppliersMap`

:arrow_right:**Faites un commit avec un message explicite**

##### 7.3) Ajouter les marqueurs.

Dans un premier temps consultez la liste d'exemples du projet et trouvez un moyen d'ajouter des marqueurs sur la carte.

Maintenant ajoutez une propriété `suppliers` au composant qui a la forme suivante :

```js
suppliers: [
  {
    id: 1,
    latitude: 10,
    longitude: 10,
  },
  {
    id: 2,
    latitude: 11,
    longitude: 9.6,
  },
];
```

En utilisant un `map`, affichez des marqueurs aux deux positions des fournisseurs spécifiées.

Voici un exemple de rendu : ![](images/step5.png)

:arrow_right:**Faites un commit avec un message explicite**

### 8) Récupérer les données via une API externe. (Rappel)

Nous avons créé pour vous une API REST permettant de gérer vos fournisseurs. Cette api est disponible à cette url : [https://api-suppliers.herokuapp.com/api](https://api-suppliers.herokuapp.com/api). Et la documentation [ici](https://api-suppliers.herokuapp.com/).

Par exemple pour lister l'ensemble des fournisseurs il faudra appeler [cette URL](https://api-suppliers.herokuapp.com/api/suppliers)

Si vous faites le test, vous verrez que le résultat n'est pas très lisible. La réponse de l'API est au format [JSON](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON), un standard dans le monde du web.

Il existe des plugins sous chrome permettant de visualiser un résultat JSON de facon plus propre : par exemple sous chrome vous pouvez installer ce [plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc).

Il est important de comprendre les principaux verbes d'une API HTTP et de savoir lire une documentation pour connaitre ses possibilités et ses limitations, prenez quelques minutes pour bien comprendre la documentation de cette API.

L'API contient notamment la liste des fournisseurs que nous allons récupérer pour adapter nos vues de liste et de carte.

:warning:**Ne passez pas à côté de cette partie, les notions mises en jeu sont fondamentales.**

##### 8.1) Installation d'une librairie permettant de faire des appels HTTP.

Pour pouvoir faire des appels à une API, vous avez plusieurs possibilité. Reactjs ne préconise pas encore de solution. Vous pouvez continuer d'utiliser la librairie [axios](https://github.com/axios/axios)

Prenez toujours le temps d'analyser cette librairie sur github, qu'est ce qui vous inspire confiance ? Ayez le réflexe de chercher la librairie sur [npm](https://www.npmjs.com/package/axios) pour notamment voir le nombre de téléchargements.

- Installez la librairie avec npm.

:arrow_right:**Faites un commit avec un message explicite**

##### 8.2) Notion de promesses. (Rappel)

- La notion de promesses est fondamentale en javascript, prenez le temps de lire en détail [la documentation](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses).

- Réalisez ensuite le [cours 12 du cours de CodeAcademy sur les promesses](https://www.codecademy.com/learn/introduction-to-javascript/modules/javascript-promises).

:point_up:**Prenez le temps de solliciter les formateurs pour faire le point sur ce que vous avez compris :**

- Quel problème cherchons nous à résoudre ?
- Quelle est la solution proposée ?
- Comment la mettre en oeuvre ?

##### 8.3) Utilisation dans le projet.

Nous allons afficher la liste des fournisseurs provenant de cette [route](https://api-suppliers.herokuapp.com/api/suppliers).

Comme vous le savez une promesse a plusieurs états :

- En cours.
- Terminée et succès.
- Terminée et erreur.

Nous devons suivre ces états dans notre composant, ajoutez donc au **state** deux clefs `loading` et `error` permettant de savoir si la requête est en cours et si il y a eu une erreur.

Aussi, enlevez les fournisseurs que nous avions mis tout à l'heure dans un objet fixe.

Votre state devrait ressembler à ça :

```js
const [suppliers, setSuppliers] = React.useState([]);
const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState(null);
}
```

Avant d'aller plus loin, il faut choisir quand lancer la requête, la solution communément admise est de dire : "Quand le composant est créé, lance la requête".

React nous permet de déclencher des actions ( ou _hooks_ ) à certains moments précis de la vie d'un composant.
**Important**
Les méthodes de cycle de vie en React ont évolué dans les dernières versions.
La liste est disponible [ici](https://fr.reactjs.org/docs/state-and-lifecycle.html).
Familiarisez vous avec ces différentes méthodes. Dans un projet React récent, la recommandation sera d'utiliser le hook useEffect pour atteindre le même objectif. Vous pouvez en apprendre plus [ici](https://fr.reactjs.org/docs/hooks-effect.html)

- Ajoutez donc l'appel http avec axios permettant d'afficher la liste des fournisseurs.

- Faites en sorte d'afficher un texte `requête en cours` si jamais la requête est en cours et une erreur en rouge si jamais la requête produit une erreur.

:arrow_right:**Faites un commit avec un message explicite**

##### 8.4) Mise à jour du composant SuppliersMap.

Faites la même chose pour le composant `SuppliersMap` afin qu'il affiche tous les marqueurs des fournisseurs de l'API.

##### 8.5) Eviter le doublon.

Si vous faites attention, nous faisons le même appel http dans nos deux composants, cela fonctionne mais ce n'est pas optimal : l'utilisateur va attendre deux fois pour consulter les mêmes données.

- Quelles idées avez vous pour répondre à ce problème ?

- Essayez de mettre en oeuvre une solution.

### 9) Aller plus loin.

##### 9.1) Créer un "custom hook" useSuppliers pour créer une abstraction autour de la récupération des données

##### 9.2) Centrer la carte par rapport à sa localisation.

- Pour rendre plus pratique son utilisation, faites en sorte que la carte soit centrée par rapport à la position de l'utilisateur utilisant la carte.

Documentation de l'API du navigateur pour la [géolocalisation](https://developer.mozilla.org/fr/docs/Web/API/Navigator)

Peut-être qu'ici aussi vous pouvez faire un "custom hook“ ?

##### 9.3) Filtrer la liste des fournisseurs.

Nous voulons permettre à l'utilisateur de visualiser uniquement les fournisseurs qui ont le même statut.

- Ajoutez un select avec trois entrées ( "ok", "ko", "\*" ) permettant de filtrer les fournisseurs en fonction de leur statut.

##### 9.4) Ajouter un nouveau fournisseur.

Faites un formulaire qui permet d'ajouter un nouveau fournisseur et utilisez l'API pour l'ajouter en base de données.

##### 9.5) Modifier ou supprimer un fournisseur existant.

Faites la même chose pour une modification ou suppression de fournisseur. ( Attention à ne pas tout supprimer, vous travaillez tous sur la même base de données !).
