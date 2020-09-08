import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Header, RepositoryInfo, Issues } from "./styled";
import api from "../../services/api";

interface Repository {
  full_name: string;
  description: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
}

interface Issue {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Details: React.FC = () => {
  const repository = useLocation<Repository>().state;

  const [issues, setIssues] = useState<Issue[]>([]);

  async function loadIssues() {
    const { data } = await api.get<Issue[]>(
      `repos/${repository.full_name}/issues`
    );

    setIssues(data);
  }

  useEffect(() => {
    loadIssues();
  }, [loadIssues, repository.full_name]);

  return (
    <>
      <Header>
        <img
          src="https://xesque.rocketseat.dev/platform/1587379765556-attachment.svg"
          alt="Github Explorer"
        />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src={repository.owner.avatar_url} alt="avatar" />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repository.stargazers_count}</strong>
            <p>Stars</p>
          </li>
          <li>
            <strong>{repository.forks_count}</strong>
            <p>Forks</p>
          </li>
          <li>
            <strong>{repository.open_issues_count}</strong>
            <p>Issues abertas</p>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={`${issue.html_url}`}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Details;
