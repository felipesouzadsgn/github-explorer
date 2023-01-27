import "./styles.scss";

import { useState, useEffect } from "react";

import { RepositoryItem } from "../RepositoryItem";

interface RepositoryProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<RepositoryProps[]>();

  useEffect(() => {
    fetch("https://api.github.com/users/felipesouzadsgn/repos")
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository">
      <h1 className="repository__title">Lista de Repositórios</h1>
      <ul className="repository__list">
        {repositories?.map(({ id, name, description, html_url }) => (
          <RepositoryItem
            key={id}
            name={name}
            description={description}
            link={html_url}
          />
        ))}
      </ul>
    </section>
  );
}
