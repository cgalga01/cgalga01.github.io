import React from 'react';
import '../Styles/Projects.css';
import { Link } from 'react-router-dom';
//Array of info on my projects
const articles = [
  {
    title: 'Fantasy Baseball Player Value Calculator',
    description: 'Unlike regular points fantasy leagues, category fantasy baseball leagues, it is difficult to compare players. So using python and statistics, I coded a player value calculator that boils down a players contributions to one number.',
    date: '8/25/23',
    link: '/Projects/BBPlayerValues'
  },
  {
    title: 'Hockey Expected Goals Model',
    description: 'My first hockey expected goals model made in R using logisitic regression',
    date: '7/23/23',
    link: '/Projects/XGHockey'
  },
  {
    title: 'More projects to come!',
    description: '',
    date: ''
  },

];

//Page listing out my projects

function Projects() {
  return (
    <div className="projects-container">
      {articles.map((article, index) => (
        <div key={index} className="article">
            <Link to={article.link}>
              {article.title}
            </Link>
          <h5>{article.date}</h5>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
