import { FC, useEffect, useRef } from 'react';
import './LightRaysCSS.css';

const DEFAULT_COLOR = '#ffffff';

type RaysOrigin =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'left'
  | 'right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

interface LightRaysProps {
  raysOrigin?: RaysOrigin;
  raysColor?: string;
  raysSpeed?: number; // higher is faster
  lightSpread?: number; // 0.3 - 2 range recommended
  rayLength?: number; // 0.8 - 2.5 range recommended
  className?: string;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? [
        parseInt(m[1], 16) / 255,
        parseInt(m[2], 16) / 255,
        parseInt(m[3], 16) / 255,
      ]
    : [1, 1, 1];
};

const LightRaysCSS: FC<LightRaysProps> = ({
  raysOrigin = 'top-center',
  raysColor = DEFAULT_COLOR,
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 1.2,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const [r, g, b] = hexToRgb(raysColor).map((v) => Math.round(v * 255));
    const durationSec = Math.max(12, Math.min(90, 48 / Math.max(0.1, raysSpeed)));
    const spread = Math.max(0.3, Math.min(2, lightSpread));
    const intensity = Math.max(0.8, Math.min(2.5, rayLength));

    let originX = '50%';
    let originY = '0%';
    switch (raysOrigin) {
      case 'top-left':
        originX = '0%';
        originY = '0%';
        break;
      case 'top-right':
        originX = '100%';
        originY = '0%';
        break;
      case 'left':
        originX = '0%';
        originY = '50%';
        break;
      case 'right':
        originX = '100%';
        originY = '50%';
        break;
      case 'bottom-left':
        originX = '0%';
        originY = '100%';
        break;
      case 'bottom-center':
        originX = '50%';
        originY = '100%';
        break;
      case 'bottom-right':
        originX = '100%';
        originY = '100%';
        break;
      default:
        originX = '50%';
        originY = '0%';
    }

    const el = ref.current;
    el.style.setProperty('--lr-color', `${r}, ${g}, ${b}`);
    el.style.setProperty('--lr-duration', `${durationSec}s`);
    el.style.setProperty('--lr-spread', String(spread));
    el.style.setProperty('--lr-intensity', String(intensity));
    el.style.setProperty('--lr-origin-x', originX);
    el.style.setProperty('--lr-origin-y', originY);
  }, [raysColor, raysSpeed, lightSpread, rayLength, raysOrigin]);

  return (
    <div ref={ref} className={`lr ${className}`.trim()}>
      <div className="lr__layer lr__layer--a" />
      <div className="lr__layer lr__layer--b" />
      <div className="lr__layer lr__layer--c" />
    </div>
  );
};

export default LightRaysCSS;
