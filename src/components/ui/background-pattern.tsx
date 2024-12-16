"use client";

import { useState, useEffect, useCallback } from "react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { motion, AnimatePresence } from "framer-motion";

interface Dimensions {
  width: number;
  height: number;
}

const GRID_SIZE = 80;

const calculateGridDimensions = (): Dimensions => {
  if (typeof window === "undefined") return { width: 0, height: 0 };
  return {
    width: Math.ceil(window.innerWidth / GRID_SIZE),
    height: Math.ceil(window.innerHeight / GRID_SIZE),
  };
};

const generateRandomSquare = (maxX: number, maxY: number): [number, number] => {
  return [Math.floor(Math.random() * maxX), Math.floor(Math.random() * maxY)];
};

const generateSquarePattern = (dimensions: Dimensions): [number, number][] => {
  const squares: [number, number][] = [];
  const count = Math.ceil((dimensions.width * dimensions.height) / 33); // Increased density (3x)

  while (squares.length < count) {
    const newSquare = generateRandomSquare(dimensions.width, dimensions.height);
    if (!squares.some(([x, y]) => x === newSquare[0] && y === newSquare[1])) {
      squares.push(newSquare);
    }
  }
  return squares;
};

export function BackgroundPattern() {
  const [dimensions, setDimensions] = useState<Dimensions>(
    calculateGridDimensions(),
  );
  const [squares, setSquares] = useState<[number, number][]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const updateDimensions = useCallback(() => {
    setDimensions(calculateGridDimensions());
  }, []);

  useEffect(() => {
    if (!isClient) return;
    setSquares(generateSquarePattern(dimensions));

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [dimensions, updateDimensions, isClient]);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setSquares((prev) => {
        const newSquares = [...prev];
        const updateCount = Math.max(1, Math.floor(newSquares.length / 4));
        for (let i = 0; i < updateCount; i++) {
          const indexToUpdate = Math.floor(Math.random() * newSquares.length);
          newSquares[indexToUpdate] = generateRandomSquare(
            dimensions.width,
            dimensions.height,
          );
        }
        return newSquares;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [dimensions, isClient]);

  return (
    <div className="fixed inset-0 -z-10 opacity-90">
      <GridPattern
        width={GRID_SIZE}
        height={GRID_SIZE}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className="absolute inset-0 h-full w-full fill-foreground/20 stroke-foreground/20"
      >
        <AnimatePresence mode="sync">
          {squares.map(([x, y], index) => (
            <motion.rect
              key={`${index}-${x}-${y}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              strokeWidth="0"
              width={GRID_SIZE - 1}
              height={GRID_SIZE - 1}
              x={x * GRID_SIZE + 1}
              y={y * GRID_SIZE + 1}
            />
          ))}
        </AnimatePresence>
      </GridPattern>
    </div>
  );
}
