//Arrow function

const upperName = (name) => name.toUpperCase();

console.log(upperName('leonardo'))

//Evento ao clicar de maneira natual
function handleMouse(event) {
  console.log(event);
}

document.addEventListener('click', handleMouse);

//Desestruturação do evento

function handleMouse({clientX, clientY}) {
  console.log(clientX, clientY);
}

//desestruturação com array
const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;

console.log(fruta1)

const useQuadrado = [
  4,
  function (lado){
    return 4 * lado;
  },
]

//Desestruturando o array acima
const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

//Spread
function showList (empresa, ...clientes){
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('WideCommerce', 'Leonardo', 'Lucas', 'Allef', 'Nogara')

const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);