import "./styles.scss";

import { useState, useEffect } from "react";

import { RepositoryItem } from "../RepositoryItem";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/",
};

//https://api.github.com/users/felipesouzadsgn/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  const { name, description, link } = repository;

  useEffect(() => {
    fetch("https://api.github.com/users/felipesouzadsgn/repos")
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository">
      <h1 className="repository__title">Lista de Repositórios</h1>
      <ul className="repository__list">
        {repositories.map(({ id, name, description, html_url }) => (
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
