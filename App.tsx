import React, { JSX } from 'react';
import Canvas from './components/canvas';
import './App.css';

export default function App() : JSX.Element {
    const [colorPincel, setColorPincel] = React.useState('black');
    const [heightPincel, setHeightPincel] = React.useState(5);
    const [modo, setModo] = React.useState<'pincel' | 'borrador'>('pincel');
    const [imagenFondo, setImagenFondo] = React.useState<string | null>(null);

    const handleImagenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImagenFondo(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={{textAlign: 'center', marginTop: '20px' }}>   
            <h1>Paint</h1>
            <div style={{ marginBottom: '15px' }}>
                <label>
                    <input
                        type="radio"
                        checked={modo === 'pincel'}
                        onChange={() => setModo('pincel')}
                    />
                    Pincel
                </label>
                <label>
                    <input
                        type="radio"
                        checked={modo === 'borrador'}
                        onChange={() => setModo('borrador')}
                    />
                    Borrador
                </label>
                <label>
                    Color:
                    <input 
                        type="color" 
                        value={colorPincel} 
                        onChange={(e) => setColorPincel(e.target.value)}
                        disabled={modo === 'borrador'}
                    /> 
                </label>
                <label>
                    Tamaño:
                    <input
                        type="number"
                        min={1}
                        max={50}
                        value={heightPincel}
                        onChange={(e) => setHeightPincel(Number(e.target.value))}
                    />
                </label>
                <label>
                    Fondo:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImagenChange}
                    />
                </label>
            </div>
            <Canvas
                colorPincel={colorPincel}
                heightPincel={heightPincel}
                modo={modo}
                imagenFondo={imagenFondo}
            />
        </div>
    );
}