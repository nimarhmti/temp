import React from "react";

function CategoryButtons(props) {
  const { itemfilte } = props;
  return (
    <div className="buttons d-flex justify-content-center mb-5 pb-5">
      <button
        className="btn btn-outline-dark me-3"
        onClick={() => itemfilte("")}
      >
        All
      </button>
      <button
        className="btn btn-outline-dark me-3"
        onClick={() => itemfilte("men's clothing")}
      >
        men Clothing
      </button>
      <button
        className="btn btn-outline-dark me-3"
        onClick={() => itemfilte("women's clothing")}
      >
        women Clothing
      </button>
      <button
        className="btn btn-outline-dark me-3"
        onClick={() => itemfilte("jewelery")}
      >
        Jewelery Clothing
      </button>
      <button
        className="btn btn-outline-dark me-3"
        onClick={() => itemfilte("electronics")}
      >
        Electronic
      </button>
    </div>
  );
}

export default CategoryButtons;
