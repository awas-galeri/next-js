import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

type Product = {
  id: number;
  name: string;
  price: number;
};

async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  return (
    <div
      style={{
        display: "inline-block",
        marginTop: "35px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>Product List</h1>
      <div className="py-2">
        <AddProduct />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table className="table max-w-lg">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          {products.map((product, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="flex">
                  <UpdateProduct {...product} />
                  &nbsp;&nbsp;
                  <DeleteProduct {...product} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
