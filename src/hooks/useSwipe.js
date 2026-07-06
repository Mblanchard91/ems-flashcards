import { useRef, useState } from "react";

const SWIPE_THRESHOLD = 60;
const AXIS_LOCK_DISTANCE = 8;

// Pointer Events cover touch (iOS/Android) and mouse (desktop testing) with
// one code path. `offset` is exposed so the caller can visually drag the
// card with the finger before the swipe threshold decides the outcome.
//
// The gesture's axis is decided once, after the first few pixels of
// movement, and held for the rest of the gesture (rather than re-evaluated
// on every move event). Without this lock, a diagonal or clumsy swipe can
// flicker between "horizontal" and "vertical" mid-gesture, which reads as
// the page fighting the card for the touch.
function useSwipe({ onSwipeLeft, onSwipeRight, disabled = false }) {
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const start = useRef(null);
  const axis = useRef(null);

  const reset = () => {
    start.current = null;
    axis.current = null;
    setIsDragging(false);
    setOffset(0);
  };

  const onPointerDown = (e) => {
    if (disabled) return;
    start.current = { x: e.clientX, y: e.clientY };
    axis.current = null;
    setIsDragging(true);
  };

  const onPointerMove = (e) => {
    if (!start.current) return;
    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;

    if (axis.current === null) {
      if (Math.hypot(dx, dy) < AXIS_LOCK_DISTANCE) return;
      axis.current = Math.abs(dx) > Math.abs(dy) ? "horizontal" : "vertical";
    }

    if (axis.current === "vertical") return;
    setOffset(dx);
  };

  const endDrag = () => {
    if (!start.current) return;
    const finalOffset = axis.current === "horizontal" ? offset : 0;
    reset();

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
