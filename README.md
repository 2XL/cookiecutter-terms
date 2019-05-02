# cookiecutter-terms
cookiecutter terms and conditions

### Motivation

this is a side project to learn pdf generation and interactive site content translations

### Feature 

 0. Generate Markdown    
 1. Generate React component
 2. Generate Terms Update Editor Page - Create editor interface (React Forms)
 3. TODO: Generate [Translations](https://react-pdf.org/repl?example=page-wrap) exponer interficie interactiva para traducir

expose the example app trough github.io or netlify        

```bash

```
 

### Dependencies


- [react-markdown](https://github.com/rexxars/react-markdown): for markdown rendering
- [react-pdf](https://github.com/diegomura/react-pdf): for pdf generation
- react-intl: for translations


### Getting Started with React


`/app` contains the boilerplate of a base react app, it was generated with:

```bash

npm init react-app app


Success! Created app at ./app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can't go back!

We suggest that you begin by typing:

  cd app
  npm start

Happy hacking!

```

### Example Usage

- clone and customize the terms template at 

`{{cookiecutter.component}}/{{cookiecutter.filename}}.md`


- setup cookiecutter env

```bash
git clone https://github.com/2XL/cookiecutter-terms

cd cookiecutter-terms

. ./venv        # create virtualenv         :: depends :: pip install virtualenvwrapper 
pip-sync        # install dependencies      :: depends :: pip install pip-tools

cookiecutter . --no-input -f

cd app 

npm install && npm start 

chromium-browser http://localhost:3000 # replace with ur browser of choice

```




### Tests

- TODO: testing cookiecutter 

{{cookiecutter.repo_name}}/{{cookiecutter.repo_name}}/{{cookiecutter.repo_name}}.py

- TODO: testing react component
