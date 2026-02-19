import './AnimationControls.css';

export default function AnimationControls({ isPlaying, onToggle, speed, onSpeedChange }) {
  return (
    <div className="controls" role="group" aria-label="애니메이션 컨트롤">
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="speed-controls" role="group" aria-label="속도 조절">
        {['slow', 'normal', 'fast'].map((s) => (
          <button
            key={s}
            className={`btn-speed ${speed === s ? 'active' : ''}`}
            onClick={() => onSpeedChange(s)}
            aria-pressed={speed === s}
          >
            {s === 'slow' && '🐢 느리게'}
            {s === 'normal' && '😺 보통'}
            {s === 'fast' && '🚀 빠르게'}
          </button>
        ))}
      </div>
    </div>
  );
}
