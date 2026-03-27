"use client";

import LightboxComponent from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxProps {
  images: string[];
  alt: string;
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, alt, isOpen, initialIndex, onClose }: LightboxProps) {
  if (!isOpen) return null;

  return (
    <LightboxComponent
      open={isOpen}
      close={onClose}
      index={initialIndex}
      slides={images.map((src, i) => ({
        src,
        alt: `${alt} - slika ${i + 1}`,
      }))}
      styles={{
        container: { backgroundColor: "rgba(11, 20, 40, 0.95)" },
      }}
    />
  );
}
