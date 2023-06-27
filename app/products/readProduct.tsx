"use client";
import { SyntheticEvent, useState } from "react";
import { set } from "react-hook-form";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ReadProduct(product: Product) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [modal, setModal] = useState(false);

  const router = useRouter();

  async function handleRead(e: SyntheticEvent) {
    e.preventDefault();

    await fetch(`http://localhost:5000/products/${product.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price }),
    });

    router.refresh();
    setModal(false);
  }

  function handleChange() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="btn btn-warning btn-sm" onClick={handleChange}>
        Detail
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Detail {product.name}</h3>
          <form onSubmit={handleRead}>
            <div className="form-control">
              <label className="label font-bold">Name : </label>
              <h3>&nbsp;{product.name}</h3>
            </div>
            <div className="form-control">
              <label className="label font-bold">Price : </label>
              <h3>&nbsp;{product.price}</h3>
            </div>
            <div className="modal-action">
              <button type="button" onClick={handleChange} className="btn">
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
