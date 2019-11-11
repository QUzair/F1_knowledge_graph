# F1 Knowledge Graph Front End 

## Load Data to STARDOG
In the project directory src/data/, you can run:
`node load-data.js`

This loads the data.ttl file (F1 rdf data in turtle form ) to local Stardog server `localhost:5820`

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Queries
Following is a sample query being used for the current Star Wars dataset, once our F1 ttl data is created on stardog 
we can explore more queries in the StarDog IDE.

```
SELECT ?id ?name ?homePlanet ?kind ?movie {
  ?subject a ?kind ;
    :id ?id ;
    :name ?name ;
    :appearsIn ?movie .
  ?kind rdfs:subClassOf :Character .
  OPTIONAL { ?subject :homePlanet ?homePlanet }
}
``` 

