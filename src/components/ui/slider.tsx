import React, { useEffect, useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  step: number;
  value?: [number, number];
  onValueChange?: (values: [number, number]) => void;
  onValueCommit?: (values: [number, number]) => void;
};

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      min,
      max,
      step,
      value,
      onValueChange,
      onValueCommit,
      ...props
    },
    ref,
  ) => {
    const initialValue: [number, number] = Array.isArray(value)
      ? value
      : [min, max];
    const [localValues, setLocalValues] =
      useState<[number, number]>(initialValue);

    const handleValueChange = (newValues: [number, number]) => {
      setLocalValues(newValues);
      onValueChange?.(newValues);
    };

    const handleValueCommit = (committedValues: [number, number]) => {
      onValueCommit?.(committedValues);
    };

    useEffect(() => {
      if (Array.isArray(value)) {
        setLocalValues(value);
      }
    }, [value]);

    return (
      <SliderPrimitive.Root
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        onValueCommit={handleValueCommit}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        {localValues.map((_, index) => (
          <SliderPrimitive.Thumb
            key={index}
            className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          />
        ))}
      </SliderPrimitive.Root>
    );
  },
);

Slider.displayName = "Slider";

export { Slider };
