import { useNsfasRotation } from '../hooks/useNsfasRotation';

export default function NsfasBadge() {
  const textPathRef = useNsfasRotation();

  return (
    <div className="nav-nsf">
      <svg viewBox="0 0 120 120">
        <defs>
          <path
            id="circlePath"
            d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
          />
        </defs>
        <text className="nsf-text">
          <textPath ref={textPathRef} href="#circlePath">
            NSFAS ACCREDITED • NSFAS ACCREDITED •
          </textPath>
        </text>
      </svg>
    </div>
  );
}
