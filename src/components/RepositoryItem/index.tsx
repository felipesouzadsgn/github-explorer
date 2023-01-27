import "./styles.scss";

interface RepositoryItemProps {
  name: string;
  description: string;
  link: string;
}

export function RepositoryItem({
  name,
  description,
  link,
}: RepositoryItemProps) {
  return (
    <li className="item">
      <strong className="item__name">{name}</strong>
      <p className="item__description">{description}</p>
      <a href={link} className="item__link">
        Acessar repositório
      </a>
    </li>
  );
}
