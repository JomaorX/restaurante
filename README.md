# Web Oficial de Hedén
![Hedén logo](/../main/src/images/readme/logo.png)
Official website for Hedén, a tapas bar and restaurant located in Albacete, Spain. This website is built with [GatsbyJS](https://www.gatsbyjs.com/) to prioritize performance and [Contenful](https://www.contentful.com/) for accessible data via GraphQL.

<p align="center">:sparkles: <a href="https://edenrestaurante.es/">Visit deployed application here</a> :sparkles:</p>

![screenshot.png](/../main/src/images/readme/screenshot.png)

### Built With:
- [GatsbyJS](https://www.gatsbyjs.com/) / [ReactJS](https://reactjs.org/)
- [Contenful](https://www.contentful.com/)
- GraphQL
- JavaScript
- [Tailwind CSS](https://tailwindcss.com/)
- HTML
- npm packages:
    - [Framer-Motion](https://www.framer.com/motion/)
    - [dotenv](https://github.com/motdotla/dotenv#readme)
- [Getform.io](https://getform.io/)

## Installation
1. Install [NodeJS](https://nodejs.org/en/) in your operating system
2. Install Gatsby CLI (view instructions [here](https://www.gatsbyjs.com/docs/reference/gatsby-cli) if needed)
3. Enter your [Contenful](https://www.contentful.com/) `CONTENTFUL_SPACE_ID` and `CONTENTFUL_SPACE_ID` into a `.env` file
4. Enter your [Getform.io](https://getform.io/) account's endpoint as `REACT_APP_CONTACT_FORM_ID` in the same `.env` file
5. Install ***all*** of the dependencies listed above via command-line in terminal by entering `npm install`.
6. To compile the development build of the website, execute the following command in the root:
```
gatsby develop
```
7. Compile a production build when the website is complete by running:
```
gatsby build
```
