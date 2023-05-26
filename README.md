# emday2023_maizzle

Ce répertoire Github présente 3 projets Maizzle différents. Chaque projet est basé sur le précédent en ajoutant une couche d'abstraction supplémentaire pour montrer une petite partie des capacités de Maizzle.

Attention, il est nécessaire, pour chacun des 3 projets, d'installer la librairie node. Le détail pour faire cela est disponible sur la documentation de Maizzle ici: 
https://maizzle.com/docs/installation/

## 1_newsletter_simple
Il s'agit d'une newsletter classique, où le code a été réduit grâce à l'écriture Maizzle. Idéal pour voir comment peut s'écrire le code dans Maizzle sans s'encombrer de trop de complexité.
Ce qui a été fait:
- Le fichier tailwind.config.js a été modifié pour avoir des raccourcis CSS collant au design de l'email
- Le code des articles a été factorisé dans un composant
- le fichier config.production.js effectue un certain nombre d'opérations post HTML/CSS

## 2_newsletter_param
Une newsletter, basée sur le répertoire précédent sur laquelle une couche de paramétrisation a été mise:
- Le contenu des articles est écrit au format YAML et paramétrisé en début d'email
- Les articles sont créés via un composant et une boucle de récurrence

## 3_newsletter_param
Toujours basé sur l'email du dossier précédent, nous avons une couche d'abstraction supplémentaire:
- 2 fichiers de config différents, pour deux environnements différents avec un même code HTML
- Le contenu des articles est paramétrisé dans des fichiers de config au format JSON
- Certaines propriétés CSS sont également passées maintenant en paramètres au format JSON