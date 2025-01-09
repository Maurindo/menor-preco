import "./saida.css";
import api from "../../services/api";
import { useEffect, useState } from "react";

function Saida() {
  const [produtos, setprodutos] = useState([]);

  async function getProdutos() {
    const dados = await api.get("/produtos");
    setprodutos(dados.data);
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div className="corpo">
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
      {produtos
        .slice()
        .reverse()
        .map((produto) => (
          <div key={produto.id} className="corpo2">
            <div className="corpo3">
              <div>
                <div>
                  <p>{produto.mercado}</p>
                  <p>{produto.cidade}</p>
                </div>
              </div>
              <div>
                <div>
                  <p>{produto.produto}</p>
                  <p>{produto.preco}</p>
                </div>
              </div>
              <p>{produto.dia}</p>
            </div>
          </div>
        ))}
      <div className="loading"></div>
    </div>
  );
}

export default Saida;
