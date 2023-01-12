import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "My First Book", description: "First" },
  { id: "p2", price: 20, title: "My Second Book", description: "Second" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((e) => 
          <ProductItem
            id={e.id}
            key={e.id}
            title={e.title}
            price={e.price}
            description={e.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;
