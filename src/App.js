import React, { useState, useEffect } from 'react';
import './App.css';
import data_management from './data/data_management.json';
// import ethicsAndMorality from './data/ethics_and_morality.json';
// import maliciousAttacks from './data/malicious_attacks.json';
// import cyberSecurity from './data/cyber_security.json';
// import operatingSystem from './data/operating_system.json';
// import operatingSystemScheduling from './data/operating_system_scheduling.json';
// import cloudComputing from './data/cloud_computing.json';
// import networks from './data/networks.json';
// import networkTopologies from './data/network_topologies.json';
// import shiningALightOnDarkPatterns from './data/shining_a_light_on_dark_patterns.json';
// import advancedCybersecurityFlashcards from './data/advanced_cybersecurity_flashcards.json';
// import introProgrammingAndDatabase from './data/intro_programming_and_database.json';
// import computerArchitecture from './data/computer_architecture.json';
import advancedCybersecurityFlashcards from './data/advanced_cybersecurity_flashcards.json';
import introProgrammingAndDatabase from './data/intro_programming_and_database.json';
import computerArchitecture from './data/computer_architecture.json';
import introAndDataTypes from './data/intro_and_data_types.json';

const categories = [
  // { name: 'Ethics and Morality', data: ethicsAndMorality },
  // { name: 'Malicious Attacks', data: maliciousAttacks },
  // { name: 'Cyber Security', data: cyberSecurity },
  // { name: 'Operating System', data: operatingSystem },
  // { name: 'Operating System Scheduling', data: operatingSystemScheduling },
  // { name: 'Cloud Computing', data: cloudComputing },
  // { name: 'Networks', data: networks },
  // { name: 'Network Topologies', data: networkTopologies },
  //{ name: 'Shining a Light on Dark Patterns', data: shiningALightOnDarkPatterns },
  // { name: 'Advanced Cybersecurity Flashcards', data: advancedCybersecurityFlashcards },
  // { name: 'Intro Programming And Database', data: introProgrammingAndDatabase },
  // { name: 'Computer Architecture', data: computerArchitecture },
  { name: 'Data Management', data: data_management }
];

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showingFront, setShowingFront] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  useEffect(() => {
    const selectedCategoryData = categories.find(
      (category) => category.name === selectedCategory
    );
  
    if (selectedCategoryData) {
      setFlashcards(selectedCategoryData.data);
    } else {
      console.error(`Category "${selectedCategory}" not found.`);
    }
  }, [selectedCategory]);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
    setShowingFront(true);
  };

  const toggleCardSide = () => {
    if (currentIndex !== null) {
      setShowingFront(!showingFront);
    }
  };

  const handleKeyDown = (event) => {
    if (!flashcards.length) return;
    if (event.key === 'ArrowDown') {
      setCurrentIndex((prev) => (prev === null || prev < flashcards.length - 1 ? (prev ?? 0) + 1 : prev));
      setShowingFront(true);
    } else if (event.key === 'ArrowUp') {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
      setShowingFront(true);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flashcards, currentIndex]);

  return (
<div className="App">
  <h2>Interactive Flashcards</h2>
  <select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  {categories.map((category) => (
    <option key={category.name} value={category.name}>
      {category.name}
    </option>
  ))}
</select>

  <div className="main-content">
    <div className="flashcard-list">
      {flashcards.map((card, index) => (
        <div
          key={index}
          className={`flashcard-item ${index === currentIndex ? 'selected' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          {card.front}
        </div>
      ))}
    </div>

    <div className="flashcard-display" onClick={toggleCardSide}>
      {currentIndex !== null ? (
        <>
          <div className='flashcard-text'>{showingFront ? flashcards[currentIndex].front : flashcards[currentIndex].back}</div>
          <div>Side: {showingFront ? 'Front' : 'Back'}</div>
        </>
      ) : (
        selectedCategory === 'Shining a light on Dark Patterns' ? (
          <div className="dark-pattern-content">
            <h3>Shining a Light on Dark Patterns</h3>
            <p>The document "Shining a Light on Dark Patterns" by Jamie Luguri and Lior Jacob Strahilevitz explores the concept of dark patterns in user interface (UI) design, their effectiveness, and the legal implications of their use. Dark patterns are manipulative design strategies intentionally crafted to confuse or deceive users into making decisions that they would not otherwise make, often resulting in unwanted purchases or the involuntary sharing of personal information.</p>
            <p><strong>Definition and Background:</strong>Dark patterns exploit cognitive biases and prompt users to rely on System 1 (automatic, intuitive) decision-making rather than System 2 (deliberate, analytical) processes. Examples include framing effects, sunk cost fallacy, and anchoring. The term was first coined in 2009 by user interface designer Harry Brignull, and significant research has since been dedicated to identifying and categorizing these manipulative tactics.</p>
            <p><strong>Empirical Studies on Effectiveness:</strong>            The authors conducted two large-scale experiments to measure the influence of dark patterns on consumer behavior. The first experiment revealed that participants exposed to mild dark patterns were more than twice as likely to subscribe to a dubious service, while aggressive dark patterns nearly quadrupled the subscription rate. Interestingly, while aggressive dark patterns led to consumer backlash, mild patterns did not provoke a significant negative response. Less educated participants were more susceptible to mild dark patterns.
            
            The second study pinpointed specific dark pattern strategies that are most effective at manipulating consumers, including hidden information, trick questions, and obstruction techniques. Other methods, such as loaded language and social proof (bandwagon effects), had moderate success, whereas urgency cues like countdown timers had negligible effects. Importantly, these experiments demonstrated that price became irrelevant when dark patterns were employed—the decision architecture was the primary driver of consumer choices.</p>
            <p><strong>Typology of Dark Patterns:</strong>
              <ul>
                <li><strong>Nagging:</strong> Repeated prompts to wear down resistance.</li>
                <li><strong>Obstruction:</strong> Making opt-outs difficult.</li>
                <li><strong>Sneaking:</strong> Adding hidden costs.</li>
                <li><strong>Interface Interference:</strong> Hiding important information.</li>
                <li><strong>Forced Action:</strong> Forcing user action to proceed.</li>
                <li><strong>Social Proof and Scarcity:</strong> False urgency and demand cues.</li>
              </ul>
            </p>
            <p><strong>Legal Implications:</strong> The authors examine whether dark patterns violate existing laws against unfair and deceptive trade practices. They suggest that many dark patterns likely contravene these laws, and contracts formed through the use of dark patterns could be voidable under contract law principles, particularly under the doctrine of undue influence. They propose incorporating dark pattern audits into the Federal Trade Commission (FTC)'s consent decree process, leveraging A/B testing—commonly used by companies to optimize profits—to identify and regulate manipulative designs.</p>
            <p><strong>Policy Recommendations:</strong> The article advocates for more robust regulatory frameworks to combat dark patterns. This includes the proposed DETOUR Act (Deceptive Experiences To Online Users Reduction Act) in the U.S. Senate, which aims to restrict deceptive online interfaces. The authors argue for immediate enforcement actions against egregious dark patterns, even as new legislation is pending.</p>
            <p><strong>Conclusion:</strong> The study highlights the pervasive and highly effective nature of dark patterns in manipulating consumer behavior. The research demonstrates the need for regulatory action to protect consumers, especially vulnerable groups, from these deceptive practices. By advocating for legal reforms and proactive enforcement, the authors aim to curb the exploitation of cognitive biases through manipulative UI designs.</p>
          </div>
        ) : (
          <div>Select a flashcard to begin.</div>
        )
      )}
    </div>
  </div>
</div>

  );
}

export default App;
