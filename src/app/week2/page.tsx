import FilterableProductTable from './components/FilterableProductTable';
import './styles/styles.css';

export default function Week2() {
  return (
    <div>
          <h1 className="text-4xl font-bold underline">Hello World</h1>

      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}   

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];  