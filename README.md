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

## Folder Structure

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

### Assets

Section for images, videos, sounds and etc. media files.

### Components

Components of project are shelters here. There is a Button component for example structure.

### Config

Constant variables for example Rest API path can be defined in this folder. New variables can be added according to project requirments.

### Hooks

Helper hooks for project. There is a useTotalPrice hooks right now, which calculates total price of my cart.

### Models

Get/Post requests' data types can be created in this folder.

### Store

Redux stores are here. Created with redux-toolkit. There are 3 stores for managing service requests. Service requests are controlled by redux-saga. Cart store controls the product add and remove process.

### Services

Queries and Mutations are being defined in this folder. All requests are making via Axios. So making the structure more efficient, there is a wrapper which is called AxiosHelper. Url parameter of this wrapper is type of pathURLs and it's exported from Config folder.

### Usage of Theme Variables

Variable SCSS file has constraits within itself.

```
// _variables.scss

$primary-color: #1ea4ce;
$alternative-color: #147594;
$secondary-color: #f2f0fd;
$title-color: #6f6f6f;
$product-border-color: #f3f0fe;

$gray-scale-semi-light-color: #525252;
$gray-scale-color: #191919;
$gray-scale-light-color: #697488;
...
```

Variable module is a connector between SCSS and TSX files. You can define variables, which are being shared.

```
// _variables.module.scss

:export {
  primaryColor: $primary-color;
  alternativeColor: $alternative-color;
  secondaryColor: $secondary-color;
  titleColor: $title-color;
  productBorderColor: $product-border-color;

  grayScaleColor: $gray-scale-color;
  grayScaleLightColor: $gray-scale-light-color;
  grayScaleSemiLightColor: $gray-scale-semi-light-color;
  
  ...
}
```

Although there is variable.ts which has SASS variables as module.

```
// variables.ts

type ThemeVariables = {
  primaryColor: string;
  alternativeColor: string;
  secondaryColor: string;
  titleColor: string;
  productBorderColor: string;
  grayScaleColor: string;
  ...
};

```

### Customization Material UI Template

You can customize MUI by using MaterialUITemplate. Its constants are based on theme colors whichs are exist on variables.

```
// MaterialUITheme.ts


export const materialUITheme = createMuiTheme({
  palette: {
    primary: {
      main: themeVariables.mediumColor,
    },
  },
});
```

### Utils

Utilities helper functions and methods can be defined in this folder.

### Views

Wraper for shared components. It containts part of pages.


### Test

Can be run tests with:

```
npm test
yarn test
```

Right now, there is issue with MaterialUI and test runs. Will be fixed later.
