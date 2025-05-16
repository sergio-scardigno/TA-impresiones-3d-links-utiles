'use client';

import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '+54922414099792';

interface Producto {
    id: number;
    nombre: string;
    imagen: string;
    precio: number;
    descripcion: string;
    whatsapp: string;
}

const productos: Producto[] = [
    {
        id: 1,
        nombre: 'Llavero Dragon Ball',
        imagen: '/img/muestrario/dragonball.jpg',
        precio: 2000,
        descripcion: 'Impresión 3D personalizada de alta calidad',
        whatsapp: WHATSAPP_NUMBER,
    },
    {
        id: 2,
        nombre: 'Llavero Estudiantes',
        imagen: '/img/muestrario/estudiantes.jpg',
        precio: 1500,
        descripcion: 'llavero de estudiantes',
        whatsapp: WHATSAPP_NUMBER,
    },
    {
        id: 3,
        nombre: 'Llavero Eternauta',
        imagen: '/img/muestrario/eternauta.jpg',
        precio: 1500,
        descripcion:
            'Llavero del Eternauta, un clásico de la historieta argentina',
        whatsapp: WHATSAPP_NUMBER,
    },
    {
        id: 4,
        nombre: 'Llavero Eternauta',
        imagen: '/img/muestrario/llavero-personalizado.jpg',
        precio: 1500,
        descripcion:
            'Impresión 3D personalizada de alta calidad con nombre a elección',
        whatsapp: WHATSAPP_NUMBER,
    },
    {
        id: 4,
        nombre: 'Llavero Eternauta',
        imagen: '/img/muestrario/nautico-ensenada.jpg',
        precio: 1500,
        descripcion: 'Llavero del Club Náutico Ensenada',
        whatsapp: WHATSAPP_NUMBER,
    },
    // Puedes agregar más productos aquí
];

export default function Muestrario() {
    const handleWhatsApp = (producto: Producto) => {
        const mensaje = `Hola, me interesa obtener más información sobre el siguiente producto:

*${producto.nombre}*
${producto.descripcion}
Precio: $${producto.precio.toLocaleString()}

¿Podrías proporcionarme más detalles?`;
        const url = `https://wa.me/${
            producto.whatsapp
        }?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">
                Muestrario de Productos
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productos.map((producto) => (
                    <div
                        key={producto.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center h-48">
                            <Image
                                src={producto.imagen}
                                alt={producto.nombre}
                                width={192}
                                height={192}
                                className="object-contain"
                            />
                        </div>

                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">
                                {producto.nombre}
                            </h2>
                            <p className="text-gray-600 mb-2">
                                {producto.descripcion}
                            </p>
                            <p className="text-2xl font-bold text-blue-600 mb-4">
                                ${producto.precio.toLocaleString()}
                            </p>
                            <button
                                onClick={() => handleWhatsApp(producto)}
                                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                            >
                                <FaWhatsapp className="text-xl" />
                                Contactar por WhatsApp
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
