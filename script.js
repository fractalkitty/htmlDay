let logo, ft;
function preload() {
  ft = loadFont(
	"https://assets.codepen.io/4559259/Lexend-VariableFont_wght.ttf"
  );
}
function setup() {
  createCanvas(windowWidth, max(windowHeight, 300));
  n = int(random(0, objectList.length));
  textAlign(CENTER);
  textFont(ft);
  fill(30);
  rectMode(CENTER);
  //console.log(objectList.length)
}

function draw() {
  translate(width / 2, height / 2);
  fill(140, 191, 188);
  stroke(140, 191, 188);
  rect(0, 0, width - 10, 150, 20, 20, 20, 20);
  fill(0);

  textSize(width / 25);
  text(objectList[n], 0, 10);
}

function mousePressed() {
  n = int(random(0, objectList.length));
}

let objectList = [
  "aerie",
  "ascension",
  "band",
  "bevy",
  "bouquet",
  "brace",
  "brood",
  "building",
  "bury",
  "cast",
  "chain",
  "charm",
  "chattering",
  "calmor",
  "clutch",
  "colony",
  "company",
  "congregation",
  "conspiracy",
  "convocation",
  "cote",
  "cover",
  "covey",
  "crèche",
  "waddle",
  "improbability",
  "guttering",
  "deceit",
  "descent",
  "dissimulation",
  "dole",
  "dule",
  "exaltation",
  "fall",
  "flight",
  "flush",
  "flock",
  "gaggle",
  "plump",
  "skein",
  "hedge",
  "herd",
  "host",
  "huddle",
  "kettle",
  "lamentation",
  "mob",
  "murder",
  "murmuration",
  "muster",
  "mustering",
  "nest",
  "nide",
  "nye",
  "ostentation",
  "pack",
  "paddling",
  "parcel",
  "parliament",
  "party",
  "peep",
  "piteousness",
  "pitying",
  "siege",
  "flamboyance",
  "sedge",
  "sord",
  "spring",
  "storytelling",
  "team",
  "tidings",
  "funeral",
  "unkindness",
  "volery",
  "wake",
  "walk",
  "watch",
  "wedge",
  "wing",
  "wisdom",
  "wisp",
  "paddle",
  "school",
  "unordered list",
  "chorus",
  "array",
  "array list",
  "panoply",
  "cornocopia",
  "managerie",
  "blender full",
  "senate",
  "bag",
  "bucket",
  "squad",
  "brigade",
  "kabal",
  "regiment",
  "ordered list",
  "haunting",
  "carton",
  "collision",
  "pack",
  "bussle",
  "hord",
  "fleet",
  "phalanax",
  "bunch",
  "abstraction",
  "category",
  "group",
  "matrix",
  "field",
  "ring",
  "plane",
  "set",
  "buffer",
  "vector",
  "map",
  "dropdown",
  "stack",
  "heap",
  "army",
  "cluster",
  "network",
  "percolation",
  "plex",
  "clique",
  "niche",
  "genre",
  "intelligence",
  "mesh",
  "graph",
  "mapping",
  "bracket",
  "collection",
  "list",
  "linked list",
  "cloud",
  "bin",
  "span",
  "div",
  "p",
  "library",
  "discussion",
  "oulipo",
  "ruling"
  
  
  
  
  
  
  
  
  
];

function windowResized() {
  setup();
  draw();
}
