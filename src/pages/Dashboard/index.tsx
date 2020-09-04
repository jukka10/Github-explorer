import React, { useState, FormEvent } from "react";
import { FiChevronRight } from "react-icons/fi";

import { Title, Form, Repositories, Error } from "./styled";
import api from "../../services/api";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState("");
  const [error, setError] = useState("");
  const [repos, setRepos] = useState<Repository[]>([]);

  async function loadRepositories(e: FormEvent) {
    e.preventDefault();

    if (!newRepo) {
      setError("Preencha o campo com auto/nome do repositório");
      return;
    }
    try {
      const { data } = await api.get<Repository>(`repos/${newRepo}`);

      setRepos([...repos, data]);
      setNewRepo("");
      setError("");
    } catch {
      setError("Erro na busca por esse repositório");
    }
  }

  return (
    <div>
      <img
        src="https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg"
        alt="Github Explorer"
      />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!error} onSubmit={loadRepositories}>
        <input
          value={newRepo}
          onChange={(e): void => setNewRepo(e.target.value)}
          placeholder="Digite aqui o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {error && <Error>{error}</Error>}
      <Repositories>
        {repos.map((repository, index) => (
          <a href="ffdb" key={index}>
            <img src={repository.owner.avatar_url} alt="jukka10" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </div>
  );
};

export default Dashboard;
