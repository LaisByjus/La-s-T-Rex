// array e matrizes é uma variiavel que permite armazenar varios valores
//  array           [o]        [1]         [2]       [3]        [4]
var pizzas = ['bacon','calabresa','muzzarela','frango','carne seca'];

console.log(pizzas);

console.log(pizzas[1]);
//para inserir um novo valor no array usamos push.
pizzas.push("marguerita");
pizzas.push("peperoni");
pizzas.push("baiana");

console.log(pizzas);
//para remover o ultimo valor no array usamos o pop.
pizzas.pop();

console.log(pizzas);
// para remover, deletar um valor especifico.
delete pizzas[3];
pizzas.splice(8,1);
pizzas[3]='chocolate';
console.log(pizzas);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  dawSprites();
}