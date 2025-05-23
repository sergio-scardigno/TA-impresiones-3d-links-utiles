'use client';

import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_NUMBER = '+5491173649932';

const WhatsAppIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

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
        descripcion: 'llavero de Estudiantes de La Plata',
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
        id: 5,
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
        <>
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
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center h-62">
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
                                    <WhatsAppIcon />
                                    Contactar por WhatsApp
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Link
                href="/"
                className="fixed bottom-8 right-8 bg-white text-blue-600 px-6 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 text-lg font-semibold z-50"
                aria-label="Volver al inicio"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Volver al inicio
            </Link>
        </>
    );
}
