import React from 'react';
import './app.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to the Programming Quiz</h1>
      </header>
      <main>
        <p>Test your knowledge in various programming languages!</p>
        <Link to="/quiz">
          <button>Start Quiz</button>
        </Link>
      </main>
      <footer>
        <p>&copy; 2024 Programming Quiz</p>
      </footer>
    </div>
  );
};

export default Home;
