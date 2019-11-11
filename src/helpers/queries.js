const readQuery = `SELECT ?id ?name ?homePlanet ?kind ?movie {
    ?subject a ?kind ;
      :id ?id ;
      :name ?name ;
      :appearsIn ?movie .
    ?kind rdfs:subClassOf :Character .
    OPTIONAL { ?subject :homePlanet ?homePlanet }
  }`;


  module.exports = {
    readQuery,
  };