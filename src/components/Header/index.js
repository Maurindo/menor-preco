import { useRef } from "react";
import api from "../../services/api";

function Header() {
  const mercado = useRef();
  const cidade = useRef();
  const produto = useRef();
  const preco = useRef();
  const dia = useRef();

  async function criarProduto() {
    await api.post("/add", {
      mercado: mercado.current.value,
      cidade: cidade.current.value,
      produto: produto.current.value,
      preco: preco.current.value
    });

    window.location.reload();
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex justify-content-center">
              <form class="d-flex" role="search">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page">
                      {" "}
                      <input
                        class="form-control me-auto"
                        type="search"
                        placeholder="MERCADO"
                        aria-label="Search"
                        ref={mercado}
                      />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page">
                      {" "}
                      <input
                        class="form-control me-auto"
                        type="search"
                        placeholder="CIDADE"
                        aria-label="Search"
                        ref={cidade}
                      />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page">
                      {" "}
                      <input
                        class="form-control me-auto"
                        type="search"
                        placeholder="PRODUTO"
                        aria-label="Search"
                        ref={produto}
                      />
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page">
                      {" "}
                      <input
                        class="form-control me-auto"
                        type="search"
                        placeholder="PREÇO"
                        aria-label="Search"
                        ref={preco}
                      />
                    </a>
                  </li>

                  <button
                    class="btn btn-outline-warning"
                    type="submit"
                    onClick={criarProduto}
                  >
                    ENVIAR{" "}
                  </button>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
