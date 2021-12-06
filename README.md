# Index

* Introduction
* How to run the project
* Libraries & Tools
* Design & Architecture Decisions
* Observations, recommendations and improvements

## Introduction

This document explains how to run the application, the libraries and tools used, design decisions and finally, due to the limited time, a section of recommendations has been introduced to improve the application in future versions.

## How to run the project

You have two options:

* Clone the repository.

1. Clone the repository
2. Go to the project directory
3. cd server
4. npm install
5. run npm start or npm nodemon
6. cd ..
7. cd client
8. npm install
9. run npm start

* Enter the following link

The client has been uploaded to Netlify and the server to Heroku.

Note: In Netlify you must be careful with the browser refresh, because netlify does not read the paths properly if the domain is not has a good configuration.

1. The client address is: https://inspiring-elion-3b1d77.netlify.app
2. The server address is: https://interview-ireland.herokuapp.com/allphone

## Libraries & Tools

### MongoDB & AWS S3

For the database it has been decided to use MongoDB.Although there are different alternatives, a non-relational database like MongoDB has an easy configuration and the creation of schemas and models from its library allow to have a good understanding and readability of your database and avoid possible problems in the future.

For the image upload we used AWS S3, one of the most popular, it has a fast configuration, which is the main reason why we decided to use it. I have also encrypted the file name when uploading.


### Express & mongoose

These two libraries have been used for ease and convenience of programming.
### Middelware

Libraries such as cors or multer had to be used for the server to run correctly.
### Other server libraries
Other libraries such as uuid have also been used to create id's of the images.
### Material UI

There are quite a few alternatives in interface libraries, in my case I have decided for this one because it is one of the most popular, although I do not usually recommend third party dependencies in the design.

### SASS

SASS has been used in the development, the idea was to make a solid SASS framework to better manage the maintainability of the application in case in the future changes are made or new pages or components are incorporated in the app.


### React Router

I have decided not to use react-router-dom@6 because it has new some important changes.
* react-router-dom@5.2.0

## Design & Architecture Decisions
### Architecture

Regarding the structure:
* Regarding Sass there is a specific folder for it where its structure is defined.
* The components folder includes the elements of the app that can be reused or by semantics should be separated, such as cards, modal, heros, header, Nav, Footer, could be improved in this aspect to find elements that can be reused, such as buttons, etc.
* In the folder of each component is included the scss file, the react component, and the index (the latter only to improve the direction of the component and avoid the typical Home/Home), also I would include the component tests in this folder.
* A Layout has been created to keep components that are stable within the application.
* A pages folder which are the large components that the router uses.
* The Routes folder uses two files, the definition of an array of routes and a React Navigator to launch those routes with React-Router-Dom.
* The Services folder contains the API calls.
* Regarding separating the logic from the view, more work could have been done in this section but at least the API calls allow to change the calls without changing the components that use it.

### Align

I have used different forms of alignment in the page like Grid and flex. It is not usual to find both alignments in the projects but I think it is necessary to use both according to the needs of aligning in one dimension or in two dimensions.

### SASS


Finally the SASS framework has only been used to implement the basics of the design structure such as colors, typography and some details. This has allowed to save time, defining the value of rem according to the screen size, this has allowed to reduce programming time and simplicity at the time of make the app responsive to all different devices.

It could have taken more advantage of its benefits or could have been replaced by another alternative such as Javascript objects that allow less dependence on third parties.

In a possible recoding I would advise to improve the structure of SASS to take advantage of its full potential.

### Colors, Buttons, etc

Although we have not made a specific study for the implementation of colors, we have used colors compatible with different scales that are defined in the sass/abstracts/variables folder.

Regarding the buttons, different buttons have been used to show examples of modern buttons used today. For example, buttons with the same color but changing the light and color intensity, grayscale buttons, etc.

The shapes, colors, buttons used in the appalication have been designed to have a pleasant experience, i.e.:

* Pure blacks such as #000 have not been included but blacks with color to reduce contrast.
* Colors without high level of red-green component (intense colors for the human brain).
* In case of using colors with a high amount of red it is reduced by increasing or decreasing the light of the color.
* Rounded borders have been used to maintain the "unserious" style of the application.
* Pure white has also not been used in the background of the application to reduce the light intensity and improve the contrast.
  
  (it is true that there is a conflict in the contrast of the logo and the Nav )

## Observations, recommendations and improvements

### Refetch phones

When we add a new mobile to the server currently we can not see the new mobile on the screen immediately, (at least in my case I have bad internet in the airbnb where I am xd), to solve it could be defined refetchs or directly modify the useState adding a new mobile in he Frontend. (Last one is not a good practice).

### LazyLoading

In applications with a large number of data and images it can slow down the application, so it would be recommended to use the advantages offered by LazyLoading to improve the user experience and reduce loading times.

### UI Components

Some interface elements such as buttons should be extracted from the larger components, create a sass folder of components, create a specific component for these elements or create an atomos folder to enter this type of elements. Personally I am in favor of the latter practice.

### CI/CD

I could have created a branch in github and connect netlify and heroku directly to the repository/branch, it is something easy and a good practice to do in the projects, the decision not to do it is because sometimes there can be problems in the Netlify configuration that could delay the project. 


