# React Commerce Web App

This project has been created for assigment. It's powered by typescript, react, scss,redux toolkit and redux-saga.

You can check demo from here:

https://react-commerce-yea.herokuapp.com/

It's using mock json server. Here's the server:

https://json-server-yea.herokuapp.com/

## Installation

Firstly clone repo and install package via npm or yarn. You can start react server with:

```
yarn start
npm start
```

To connect local json-server, you should change the baseURL from serverConfig.ts

```
// export const baseURL = "http://localhost:3004/"; //for Local Server
export const baseURL = "https://json-server-yea.herokuapp.com/"; // for Prod Server
```

For running json-server on your local, check following repo:

https://github.com/yusuferenayas/json-server

# Folder Structure

Assets => Images, icons, svgs etc.<br/>
Components => React shared components<br/>
Config => Constant variables and Server side configs<br/>
Model => Type definitions for service reponses. <br/>
Hooks => React Hooks<br/>
Services => Rest API paths and types<br/>
Stores => Global stores (Context API, Redux etc.)<br/>
Theme => Style customization, SASS structre and Material UI Customization<br/>
Utils => Helper methods<br/>
Views => React components wrappers <br/>
