import './styles/global.css';
import './App.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

function StarField() {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    top: `${(i * 37 + 5) % 100}%`,
    left: `${(i * 53 + 10) % 100}%`,
    size: `${(i % 3) + 1}px`,
    delay: `${(i * 0.3) % 3}s`,
    duration: `${(i % 2) + 1.5}s`,
  }));

  return (
    <div className="star-field" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const { isPlaying, toggle, speed, changeSpeed } = useAnimation(true);

  return (
    <main className="app">
      <StarField />
      <div className="card">
        <h1 className="title">
          <span className="emoji">🐱</span>
          춤추는 고양이
          <span className="emoji">🎵</span>
        </h1>
        <p className="subtitle">
          {isPlaying ? '냥냥이가 신나게 춤추는 중!' : '냥냥이가 쉬고 있어요...'}
        </p>

        <DancingCat isPlaying={isPlaying} speed={speed} />

        <AnimationControls
          isPlaying={isPlaying}
          onToggle={toggle}
          speed={speed}
          onSpeedChange={changeSpeed}
        />
      </div>
    </main>
  );
}
