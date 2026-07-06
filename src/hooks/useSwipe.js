import { useRef, useState } from "react";

const SWIPE_THRESHOLD = 60;

// Pointer Events cover touch (iOS/Android) and mouse (desktop testing) with
// one code path. `offset` is exposed so the caller can visually drag the
// card with the finger before the swipe threshold decides the outcome.
function useSwipe({ onSwipeLeft, onSwipeRight, disabled = false }) {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const start = useRef(null);

  const onPointerDown = (e) => {
    if (disabled) return;
    start.current = { x: e.clientX, y: e.clientY };
    setIsDragging(true);
  };

  const onPointerMove = (e) => {
    if (!start.current) return;
    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;
    if (Math.abs(dy) > Math.abs(dx)) return;
    setOffset(dx);
  };

  const endDrag = () => {
    if (!start.current) return;
    const finalOffset = offset;
    start.current = null;
    setIsDragging(false);
    setOffset(0);

    if (finalOffset <= -SWIPE_THRESHOLD) {
      onSwipeLeft?.();
    } else if (finalOffset >= SWIPE_THRESHOLD) {
      onSwipeRight?.();
    }
  };

  return {
    offset,
    isDragging,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerLeave: endDrag,
      onPointerCancel: endDrag,
    },
  };
}

export { useSwipe };
