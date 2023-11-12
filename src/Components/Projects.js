import React from 'react';
import '../Styles/Projects.css';
import { Link } from 'react-router-dom';
//Array of info on my projects
const articles = [
  {
    title: 'Fantasy Baseball Archetypes',
    description: 'I used k-means clustering to analyze mlb players with similar styles',
    date: new Date('2023-11-10'),
    link: '/Projects/BBArchetypes'
  },
  {
    title: 'Fantasy Baseball Player Value Calculator',
    description: 'Unlike regular points fantasy leagues, category fantasy baseball leagues, it is difficult to compare players. So using python and statistics, I coded a player value calculator that boils down a players contributions to one number.',
    date: new Date('2023-08-25'),
    link: '/Projects/BBPlayerValues'
  },
  {
    title: 'Hockey Expected Goals Model',
    description: 'My first hockey expected goals model made in R using logisitic regression',
    date: new Date('2023-08-27'),
    link: '/Projects/XGHockey'
  },
  {
    title: 'More projects to come!',
    description: '',
    date: ''
  },

];

// Sort the articles by date in descending order
articles.sort((a, b) => b.date - a.date);



//Page listing out my projects

function Projects() {
  return (
    <div className="projects-container">
      {articles.map((article, index) => (
        <div key={index} className="article">
            <Link to={article.link}>
              {article.title}
            </Link>
            {article.date && <h5>{article.date.toLocaleDateString()}</h5>}
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
