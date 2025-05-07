import React from "react";

interface ProdutoProps {
  nome: string;
  preco: number;
}

interface ListagemProps {
  produtos: ProdutoProps[];
}

const Listagem: React.FC<ListagemProps> = ({ produtos }) => {
  return (
    <div className="App">
      {produtos.map((produto) => {
        return (
          <div>
            {produto.nome} - {produto.preco}
          </div>
        );
      })}
    </div>
  );
};

export default Listagem;
