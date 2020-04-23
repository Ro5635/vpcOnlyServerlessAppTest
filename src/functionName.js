import { corsHeaders } from './configuration';

export const handler = async () => {
  console.log('Handing Call to Get / ');

  const cakes = [
    { name: 'Strawberry Cake 🍓', sugar: 33, taste: 2 },
    { name: 'Apple And Mint 🍏🍎', sugar: 23, taste: 1 },
    { name: 'Meat Cake', sugar: 33, taste: 4 },
    { name: 'Toffee And Chocolate Cake', sugar: 43, taste: 27 },
  ];

  return {
    headers: corsHeaders,
    body: JSON.stringify(cakes),
  };
};

export default {};
