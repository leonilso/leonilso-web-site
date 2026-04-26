import { useEffect, useState, useRef } from "react";
import './Lab.css';

function Lab() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getPupilPosition = (eyeRef) => {
    if (!eyeRef.current) return { x: 0, y: 0 };

    const rect = eyeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouse.x - centerX;
    const dy = mouse.y - centerY;

    const angle = Math.atan2(dy, dx);
    const maxDistance = 80;

    return {
      x: Math.cos(angle) * maxDistance,
      y: Math.sin(angle) * maxDistance,
    };
  };

  const pupil1 = getPupilPosition(eye1Ref);
  const pupil2 = getPupilPosition(eye2Ref);

  return (
    <div className="container">
      <div className="eye" ref={eye1Ref}>
        <div
          className="pupil"
          style={{ transform: `translate(${pupil1.x}px, ${pupil1.y}px)` }}
        />
      </div>

      <div className="eye" ref={eye2Ref}>
        <div
          className="pupil"
          style={{ transform: `translate(${pupil2.x}px, ${pupil2.y}px)` }}
        />
      </div>
    </div>
  );
}

export default Lab;