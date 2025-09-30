// src/components/InfoPanel.tsx
import React from 'react';

interface InfoPanelProps {
  title: string;
  description: string;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ title, description, onClose }) => {
  return (
    <div className="info-panel">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default InfoPanel;
