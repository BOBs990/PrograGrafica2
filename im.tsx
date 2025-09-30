import React from 'react';

interface ImageHotspotProps {
  id: string;
  src: string;
  position: string;
  scale?: string;
  onClick: () => void;
}

const ImageHotspot: React.FC<ImageHotspotProps> = ({
  id,
  src,
  position,
  scale = '1 1 1',
  onClick,
}) => {
  return (
    <a-image
      id={id}
      src={src}
      position={position}
      scale={scale}
      onClick={onClick}
    ></a-image>
  );
};

export default ImageHotspot;
