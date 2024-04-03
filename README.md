# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Voici comment intégrer rapidement le composant `Modal` :

1. **Installation** : Exécutez `npm install modal_by_jsw` ou `yarn add modal_by_jsw`.
2. **Importation** : Dans votre composant, ajoutez `import Modal from 'modal_by_jsw';`.
3. **Utilisation** : Gérez l'affichage avec un état, `const [isOpen, setOpen] = useState(false);`, et incluez `<Modal setOpen={setOpen} />` dans le rendu JSX.