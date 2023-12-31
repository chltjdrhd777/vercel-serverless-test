import { useEffect } from 'react';

export const useUpdateCanvasSize = (
  canvasRef: React.MutableRefObject<HTMLCanvasElement>,
  canvasCtxRef: React.MutableRefObject<CanvasRenderingContext2D>,
  isMobile: boolean,
  dependencies: any[] = [],
) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasCtx = canvas?.getContext('2d');
    canvasCtxRef.current = canvasCtx;

    const updateCanvasSize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    updateCanvasSize();

    if (!isMobile) {
      window.addEventListener('resize', updateCanvasSize);
      return () => {
        window.removeEventListener('resize', updateCanvasSize);
      };
    }
  }, [isMobile, ...dependencies]);
};
