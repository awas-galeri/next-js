import React from "react";

export default function Home() {
  return (
    <section>
      <div className="carousel w-full" style={{ marginTop: "25px" }}>
        <div id="slide1" className="carousel-item relative w-full">
          {/* <img
            src="https://source.unsplash.com/1200x450?coffe"
            className="w-full"
          /> */}
          <div
            className="hero"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/1200x450?coffe')",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Halo Gaes</h1>
                <p className="mb-5">
                  Jadi ini ceritanya halaman home, tapi masih belum tau mau
                  diisi apa 🤣
                </p>
                <button className="btn btn-primary">Klik ae</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://source.unsplash.com/1200x450?donuts"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://source.unsplash.com/1201x450?coffe"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://source.unsplash.com/1201x450?donuts"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
