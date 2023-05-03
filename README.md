# GeoStories Website

## Start Development
1. Make a new directory `mkdir geostories` and go into it `cd geostories`
2. Clone this repository `git clone https://github.com/GeoStories2023/website.git`
3. Follow all steps from [REST readme](https://github.com/GeoStories2023/rest#readme)
4. Go into the root project of website `cd website`
5. Run `npm start` and go to [http://localhost:5173](http://localhost:5173)

### Starting Project
1. Go to your `geostories` project folder
- `cd geostories`
```
├─ geostories
│   ├─ rest
│   ├─ website
```
2. Go to REST project and start docker containers
- `cd rest`
- Windows `./start-dev.bat`
- Linux `sh start-dev.sh`
3. Go to Website project and start development server
- `cd ../website`
- `npm start`
4. Go to [http://localhost:5173](http://localhost:5173)
