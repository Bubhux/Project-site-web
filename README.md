![Static Badge](/static/badges/JavaScript.svg)  

![Static Badge](/static/badges/HTML5.svg)   
![Static Badge](/static/badges/CSS3.svg)   
![Static Badge](/static/badges/SASS.svg)   

![Static Badge](/static/badges/Node_js.svg)   
![Static Badge](/static/badges/Npm.svg)   

<div id="top"></div>

## Menu   

1. **[Informations générales](#informations-générales)**   
2. **[Technologies du projet](#technologies-projet)**   
3. **[Lancement de l'application](#lancement-application)**   
4. **[Accéder à la démonstration en ligne](#lien-application)**   
5. **[Modification front-end et back-end](#modification-application)**   
6. **[Informations importantes sur les différents fichiers et dossiers](#informations-importantes)**   
7. **[Auteur et contact](#auteur-contact)**     

### Designez une application web   

- Architecturer et développer une structure **HTML** et **CSS** fonctionnelle pour une page web interactive.   
- Création d'une page web sur le thème de League of Legends, intégrant plusieurs fonctionnalités.   
- Présentation des bases du jeu de manière claire et accessible.   
  &nbsp;   

- Fonctinnalitées de la page web.   

    -  ``Une page d'accueil``   
    -  ``Lien vers un autre site``   
    -  ``Affichage d'images``   
    -  ``Élément de tableau``   
    -  ``Élément de formulaire``   
    -  ``Élément vidéo``   
    -  ``Système responsive``   
    -  ``Utilisation de JavaScript pour créer des animations interactives``   

--------------------------------------------------------------------------------------------------------------------------------

<div id="technologies-projet"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Technologies du projet   

- Projet élaboré avec les technologies suivantes :   
   &nbsp;   

  - **JavaScript** ➔ [Documentation JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)   
  - **Node.js** ``v.20.9.0`` ➔ [Documentation Node.js](https://nodejs.org/fr)   
  - **Npm** ``v10.8.1`` ➔ [Documentation et téléchargement de Npm](https://www.npmjs.com/)   
  - **SASS** ``v1.79.2`` ➔ [Documentation SASS](https://sass-lang.com/)   
  - **VSCode** ``v1.85.2`` ➔ [Documentation et téléchargement de VSCode](https://code.visualstudio.com/)   
  - **Chrome** ``v.126.0.6478.114`` & **Firefox** ``v.127.0`   
  - **Windows 10** ``Professionnel``   

--------------------------------------------------------------------------------------------------------------------------------

<div id="lancement-application"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Lancement de l'application   

- Pour lancer l'interface web ouvrir le fichier ``index.html`` ➔ ([index.html](index.html)) dans le navigateur de votre choix.   

>_**Note navigateur :** Les tests ont était fait sur **Firefox** et **Google Chrome**._  

--------------------------------------------------------------------------------------------------------------------------------

<div id="lien-application"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Accéder à la démonstration en ligne   

- Vous pouvez accéder à une démonstration de la page web via **GitHub Pages**.   
- En utilisant le lien suivant ➔ [Lien de la page web du projet](https://bubhux.github.io/Projet-Web-HTML-CSS/)   

--------------------------------------------------------------------------------------------------------------------------------

<div id="modification-application"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Modification front-end et back-end   

- Si vous souhaitez modifier les parties front-end et back-end de l'application, il faudra installer les outils de développements suivants.   

#### 1. Installer *Node.js* (inclut *npm*)   

  - Si **Node.js** n'est pas encore installé sur votre machine, il peut être téléchargé ici ➔ [Téléchargement Node.js](https://nodejs.org/fr)   
  - Cela installera à la fois les dépendances de développement (comme **SASS**, etc.)   
    &nbsp;   

#### 2. Installer les dépendances   

  - Dans un terminal exécuter la commande suivante dans le répertoire du projet.   
  - Cela installera toutes les dépendances spécifiées dans le fichier ``package.json`` ➔ ([package.json](package.json)).   

```bash   
$ npm install
```   
&nbsp;   

#### 3. Pour modifier la partie front-end il faudra utiliser *SASS*.   

  - Dans un terminal exécuter la commande suivante dans le répertoire du projet.   
  - Une fois le serveur **SASS** lancer vous pouvez modifier les styles **CSS** dans le dossier ``sass`` ➔ ([sass](sass))   

```bash   
$ sass --watch sass/main.scss:src/style.css
```   
&nbsp;   

>_**Note : Pour que les changements de style CSS fonctionne, modifier le script appelé dans le fichier index.html** ➔ ([index.html](index.html))_   

- Modifier le fichier ``index.html`` de la manière suivante remplacer.   

```html   
<script src="dist/bundle.js"></script>
```   

- En effectuant la modification suivante.   

```html   
<script type="text/javascript" src="js/main.js"></script>
```   
&nbsp;   

#### 4. Sauvegarder les modifications avec *Wepack*.   

- Dans un terminal exécuter la commande suivante dans le répertoire du projet.    

```bash   
$ npx webpack --config webpack.config.js
```   
- Pour utiliser le nouveau build avec les nouvelles modifications, modifier le lien du script dans le fichier ``index.html``.   

```html   
<script src="dist/bundle.js"></script>
```   

--------------------------------------------------------------------------------------------------------------------------------

<div id="informations-importantes"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Informations importantes sur les différents fichiers et dossiers   

#### Le dossier sass   

  - Le dossier contient les dossiers et fichiers nécessaires pour la partie front-end avec **SASS**.   

    - Dossier **base**
        - ``_base.scss`` ➔ ([_base.scss](/sass/base/_base.scss))   
        - ``_fonts.scss`` ➔ ([_fonts.scss](/sass/base/_fonts.scss))   
        - ``_variables.scss`` ➔ ([_variables.scss](/sass/base/_variables.scss))   
        &nbsp;

    - Dossier **components**
        - ``_aside.scss`` ➔ ([_aside.scss](/sass/components/_aside.scss))   
        - ``_banner.scss`` ➔ ([_banner.scss](/sass/components/_banner.scss))   
        - ``_button.scss`` ➔ ([_button.scss](/sass/components/_button.scss))   
        - ``_content.scss`` ➔ ([_content.scss](/sass/components/_content.scss))   
        - ``_footer.scss`` ➔ ([_footer.scss](/sass/components/_footer.scss))   
        - ``_form.scss`` ➔ ([_form.scss](/sass/components/_form.scss))   
        - ``_header.scss`` ➔ ([_header.scss](/sass/components/_header.scss))   
        - ``_main.scss`` ➔ ([_main.scss](/sass/components/_main.scss))   
        - ``_menu-scroll.scss`` ➔ ([_menu-scroll.scss](/sass/components/_menu-scroll.scss))   
        - ``_nav.scss`` ➔ ([_nav.scss](/sass/components/_nav.scss))   
        - ``_table.scss`` ➔ ([_table.scss](/sass/components/_table.scss))   
        &nbsp;

    - Dossier **layout**
        - ``_aside-layout.scss`` ➔ ([_aside-layout.scss](/sass/layout/_aside-layout.scss))   
        - ``_banner-layout.scss`` ➔ ([_banner-layout.scss](/sass/layout/_banner-layout.scss))   
        - ``_footer-layout.scss`` ➔ ([_footer-layout.scss](/sass/layout/_footer-layout.scss))   
        - ``_header-layout.scss`` ➔ ([_header-layout.scss](/sass/layout/_header-layout.scss))   
        - ``_main-layout.scss`` ➔ ([_main-layout.scss](/sass/layout/_main-layout.scss))   
        - ``_menu-scroll-layout.scss`` ➔ ([_menu-scroll-layout.scss](/sass/layout/_menu-scroll-layout.scss))   
        - ``_nav-layout.scss`` ➔ ([_nav-layout.scss](/sass/layout/_nav-layout.scss))   
        &nbsp;

    - Dossier **utils**
        - ``_mediaqueries.scss`` ➔ ([_mediaqueries.scss](/sass/utils/_mediaqueries.scss))   
        - ``_mixins.scss`` ➔ ([_mixins.scss](/sass/utils/_mixins.scss))    
        - ``_reveal.scss`` ➔ ([_reveal.scss](/sass/utils/_reveal.scss))    
        &nbsp;

    - Le fichier **main.scss** regroupe les imports pour **SASS**   
        - ``main.scss`` ➔ ([main.scss](/sass/main.scss))  

#### Le dossier static   

  - Dossier qui contient les polices, les images et la vidéo nécessaires nécessaires pour la page web et les badges pour le **README.md**.   

      - ``static`` ➔ ([badges](/static/badges))   
      - ``static`` ➔ ([fonts](/static/fonts))   
      - ``static`` ➔ ([img](/static/img))   
      - ``static`` ➔ ([video](/static/video))   

--------------------------------------------------------------------------------------------------------------------------------

<div id="auteur-contact"></div>
<a href="#top" style="float: right;">Retour en haut 🡅</a>

### Auteur et contact   

Pour toute information suplémentaire, vous pouvez me contacter.   
**Bubhux:** bubhuxpaindepice@gmail.com   
