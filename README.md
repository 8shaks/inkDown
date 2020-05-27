# InkDOwn

A portfolio websie made for a digital agency. I used NodeJS for the backend and ReactJS for the front-end. Originall;y the front-end was made with create react app, however I migrated the front end to GatsbyJS for SEO purposes.

### Prerequisites

Make sure you have nodejs and npm installed.

### Installing


Clone the repo

```
git clone https://github.com/8shaks/inkDown.git
```
Install server dependencies

```
npm install
```
Install client dependencies 
```
npm install --prefix client
```

Run Gatsby develop to view site in browser
```
npx gatsby develop
```
Visit http://localhost:8000/ to see site.


End with an example of getting some data out of the system or using it for a little demo



## Deployment
This site was made to run on heroku, simple push to a herkou remote and the site's build script will run (heroku-postbuild script in package.json)
