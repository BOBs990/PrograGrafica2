import React, { useEffect } from 'react';

interface CanvasProps {
    colorPincel: string;
    heightPincel: number;
    modo: 'pincel' | 'borrador';
    imagenFondo: string | null;
}

export default function Canvas({ colorPincel, heightPincel, modo, imagenFondo }: CanvasProps) {
    const referenciaCanvas = React.useRef<HTMLCanvasElement | null>(null);  
    const [dibujando, setDibujando] = React.useState(false); 

    useEffect(() => {
        const canvas = referenciaCanvas.current;
        if (!canvas) return; 
        const contexto = canvas.getContext('2d'); 
        if (!contexto) return; 
        contexto.lineCap = 'round'; 
        contexto.lineJoin = 'round'; 
        contexto.clearRect(0, 0, canvas.width, canvas.height);
        contexto.fillStyle = 'rgb(255, 255, 255)';
        contexto.fillRect(0, 0, canvas.width, canvas.height); 
        if (imagenFondo) {
            const img = new window.Image();
            img.src = imagenFondo;
            img.onload = () => {
                contexto.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        }
    }, [imagenFondo]);

    const iniciarDibujo = (evento: React.MouseEvent) => {
        const canvas = referenciaCanvas.current; 
        if (!canvas) return;
        const contexto = canvas.getContext('2d'); 
        if (!contexto) return;
        contexto.beginPath();
        contexto.moveTo(evento.nativeEvent.offsetX, evento.nativeEvent.offsetY); 
        contexto.strokeStyle = modo === 'borrador' ? 'white' : colorPincel; 
        contexto.lineWidth = heightPincel;
        setDibujando(true);
    }

    const dibujar = (evento: React.MouseEvent) => {
        if (!dibujando) return;
        const canvas = referenciaCanvas.current;
        if (!canvas) return;
        const contexto = canvas.getContext('2d');
        if (!contexto) return;
        contexto.lineTo(evento.nativeEvent.offsetX, evento.nativeEvent.offsetY);
        contexto.strokeStyle = modo === 'borrador' ? 'white' : colorPincel;
        contexto.lineWidth = heightPincel;
        contexto.stroke();
    }

    const detenerDibujo = () => {
        setDibujando(false);
    }

    return (
        <canvas 
            ref={referenciaCanvas}
            width={800}
            height={600}
            style={{ border: '1px solid black', backgroundColor: 'white' }}
            onMouseDown={iniciarDibujo}
            onMouseMove={dibujar}
            onMouseUp={detenerDibujo}
            onMouseLeave={detenerDibujo}
        />        
    );
}