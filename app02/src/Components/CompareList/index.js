import React from 'react';

import { Container, Repository } from './styles';

// const repositories = props.repositories;

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </header>

          <ul>
            <li>
              {repository.stargazers_count} <small>stars</small>
            </li>
          </ul>
          <ul>
            <li>
              {repository.forks_count} <small>forks</small>
            </li>
          </ul>
          <ul>
            <li>
              {repository.open_issues_count} <small>issues</small>
            </li>
          </ul>
          <ul>
            <li>
              { repository.pushed_at }<small>last commit</small>
            </li>
          </ul>
      </Repository>
    ))}

  </Container>
);

export default CompareList;
