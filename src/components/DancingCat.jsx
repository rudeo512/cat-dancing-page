import catSvg from '../assets/images/cat.svg';
import './DancingCat.css';

const SPEED_MULTIPLIERS = {
  slow: 1.8,
  normal: 1,
  fast: 0.5,
};

export default function DancingCat({ isPlaying, speed = 'normal' }) {
  const multiplier = SPEED_MULTIPLIERS[speed] ?? 1;

  const style = isPlaying
    ? {
        animationDuration: `${1.2 * multiplier}s`,
        animationPlayState: 'running',
      }
    : {
        animationPlayState: 'paused',
      };

  return (
    <div className="cat-stage">
      <div className="cat-shadow" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
      <img
        src={catSvg}
        alt="춤추는 고양이"
        className="dancing-cat"
        style={style}
      />
      {isPlaying && (
        <div className="music-notes" aria-hidden="true">
          <span className="note note-1">♪</span>
          <span className="note note-2">♫</span>
          <span className="note note-3">♩</span>
          <span className="note note-4">♬</span>
        </div>
      )}
    </div>
  );
}