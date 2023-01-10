import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ButtonComponent from "../../components/Button";

function Home() {
  const { showModalA, showModalB } = useSelector((state) => state);

  return (
    <div className="d-flex align-items-center vh-100">
      <div className="mx-auto my-auto d-flex" style={{ gap: 10 }}>
        <ButtonComponent
          btnName="All Contact"
          showModal={showModalA}
          backgroundColor="#46139f"
        />
        <ButtonComponent
          btnName="US Contact"
          showModal={showModalB}
          backgroundColor="#ff7f50"
        />
      </div>
    </div>
  );
}

export default Home;
