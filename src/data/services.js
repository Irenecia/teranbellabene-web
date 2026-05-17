const BOOKING_URL = "https://www.treatwell.es/establecimiento/teranbellabene/";

import craneofacialImage from "../assets/services/relajantes/craneofacial.jpeg";
import facialImage from "../assets/services/relajantes/facial.jpeg";
import facialLinfaticoImage from "../assets/services/relajantes/faciallinfatico.jpeg";
import facialReafirmanteImage from "../assets/services/relajantes/facialreafirmante.jpeg";
import cranealImage from "../assets/services/relajantes/Tratamiento-Masaje-craneoencefalico.jpg";
import descontracturanteImage from "../assets/services/terapeuticos/descontracturante.jpeg";
import circulatorioImage from "../assets/services/terapeuticos/circulatorio.jpeg";
import embarazadasImage from "../assets/services/terapeuticos/embarazadas.jpeg";
import energizanteImage from "../assets/services/terapeuticos/masaje energizante.jpeg";
import caballerosImage from "../assets/services/terapeuticos/masajecaballeros.jpeg";
import maderoterapiaImage from "../assets/services/reductores/maderoterapia.jpeg";
import drenajeLinfaticoImage from "../assets/services/reductores/drenajelinfatico.jpeg";
import drenajeLinfaticoPiernasImage from "../assets/services/reductores/drenaje linfatico piernas.jpeg";
import conVentosasImage from "../assets/services/reductores/conventosas.jpeg";
import vendasFriasImage from "../assets/services/reductores/vendasfrias.jpeg";
import maderoConVendasFriasImage from "../assets/services/reductores/maderoconvendasfrias.jpeg";
import presoterapiaImage from "../assets/services/reductores/presoterapia.jpeg";
import masajeYPresoterapiaImage from "../assets/services/reductores/masajeypreso.jpeg";
import vacumterapiaImage from "../assets/services/anticeluliticos/vacuum.jpeg";

export const featuredServices = [
  {
    title: "Masajes Relajantes",
    description: "Libera tensiones acumuladas y sumergite en un estado de paz profunda.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Terapéuticos y Descontracturantes",
    description: "Tratamientos focalizados para aliviar dolor muscular y recuperar movilidad.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Reductores y Reafirmantes",
    description: "Protocolos corporales para modelar, drenar y mejorar firmeza de la piel.",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop"
  }
];

export const serviceSections = [
  {
    key: "relajantes",
    title: "Masajes relajantes",
    services: [
      {
        title: "Masaje relajante con aceites esenciales",
        duration: "60 min",
        price: "desde 40,50 €",
        intensity: 2,
        description: "Masaje suave con aceites esenciales para calmar el cuerpo y bajar el estres acumulado.",
        ideal: "Ideal para ansiedad, cansancio mental y dificultad para desconectar.",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje facial",
        duration: "15 min",
        price: "20 €",
        intensity: 1,
        description: "Masaje delicado en rostro para relajar la expresion facial y activar la microcirculacion.",
        ideal: "Ideal para aliviar tension facial, cansancio visual y dar luminosidad rapida.",
        image: facialImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje facial reafirmante",
        duration: "30 min",
        price: "35 €",
        intensity: 3,
        description: "Tecnica tonificante con maniobras de precision para estimular firmeza y tono facial.",
        ideal: "Ideal para mejorar tonicidad, prevenir flacidez y revitalizar el rostro.",
        image: facialReafirmanteImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje facial linfatico",
        duration: "15 min",
        price: "20 €",
        intensity: 2,
        description: "Drenaje facial suave orientado a movilizar liquidos y descongestionar el tejido.",
        ideal: "Ideal para reducir hinchazon, bolsas y signos de cansancio.",
        image: facialLinfaticoImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje craneofacial",
        duration: "30 min",
        price: "30 €",
        intensity: 2,
        description: "Combinacion de maniobras en craneo y rostro para liberar puntos de tension y relajar.",
        ideal: "Ideal para cefaleas tensionales, bruxismo y sobrecarga por estres.",
        image: craneofacialImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje craneal",
        duration: "30 min",
        price: "30 €",
        intensity: 3,
        description: "Trabajo en cuero cabelludo y zona temporal para soltar tension muscular alta.",
        ideal: "Ideal para dolor de cabeza por tension y rigidez en la zona alta de cuello.",
        image: cranealImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje sueco con piedras calientes",
        options: [
          { duration: "60 min", price: "desde 45 €" },
          { duration: "90 min", price: "desde 63 €" }
        ],
        intensity: 3,
        description:
          "Masaje sueco con apoyo termico de piedras calientes, trabajando estiramientos y relajacion muscular profunda.",
        ideal: "Ideal para disminuir la tension lumbar, descargar la espalda y mejorar movilidad.",
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop",
        bookingUrl: BOOKING_URL
      }
    ]
  },
  {
    key: "terapeuticos",
    title: "Masajes terapéuticos y descontracturantes",
    services: [
      {
        title: "Masaje descontracturante",
        options: [
          { duration: "60 min", price: "60 €" },
          { duration: "90 min", price: "80 €" }
        ],
        intensity: 5,
        description: "Masaje profundo para liberar contracturas y recuperar movilidad muscular.",
        ideal: "Ideal para dolor de espalda, cuello rigido y sobrecarga por trabajo fisico.",
        image: descontracturanteImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje circulatorio",
        duration: "60 min",
        price: "45 €",
        intensity: 3,
        description: "Maniobras ritmicas que estimulan la circulacion y alivian la sensacion de pesadez.",
        ideal: "Ideal para piernas cansadas, retencion moderada y cansancio general.",
        image: circulatorioImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje para embarazadas",
        duration: "60 min",
        price: "45 €",
        intensity: 1,
        description: "Masaje suave y adaptado por etapa para aliviar tensiones sin sobrecarga.",
        ideal: "Ideal para molestias lumbares, piernas hinchadas y descanso durante el embarazo.",
        image: embarazadasImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje energizante",
        duration: "60 min",
        price: "60 €",
        intensity: 4,
        description: "Tecnica dinamica para activar musculatura, despertar el cuerpo y subir energia.",
        ideal: "Ideal para fatiga acumulada, sensacion de bloqueo y bajo rendimiento fisico.",
        image: energizanteImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Caballeros: espalda, cuello y hombros",
        options: [
          { duration: "30 min", price: "50 €" },
          { duration: "90 min", price: "100 €" }
        ],
        intensity: 3,
        description: "Masaje focalizado para descargar la parte alta de la espalda y mejorar postura.",
        ideal: "Ideal para tension por oficina, estres semanal y rigidez cervical.",
        image: caballerosImage,
        bookingUrl: BOOKING_URL
      }
    ]
  },
  {
    key: "reductores",
    title: "Masajes reductores y reafirmantes",
    services: [
      {
        title: "Maderoterapia",
        options: [
          { duration: "60 min", price: "desde 54 €" },
          { duration: "90 min", price: "80 €" }
        ],
        intensity: 4,
        description: "Tecnica corporal con elementos de madera para modelar contorno y activar tejido.",
        ideal: "Ideal para mejorar firmeza, textura de la piel y trabajar celulitis.",
        image: maderoterapiaImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Drenaje linfatico",
        duration: "60 min",
        price: "desde 45 €",
        intensity: 2,
        description: "Drenaje manual suave para movilizar liquidos y favorecer eliminacion de toxinas.",
        ideal: "Ideal para retencion, pesadez corporal y mejora de circulacion.",
        image: drenajeLinfaticoImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Drenaje linfatico en piernas",
        duration: "30 min",
        price: "35 €",
        intensity: 2,
        description: "Protocolo especifico en piernas para descongestionar y aliviar cansancio.",
        ideal: "Ideal para piernas pesadas y sensacion de hinchazon al final del dia.",
        image: drenajeLinfaticoPiernasImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje con ventosas",
        options: [
          { duration: "30 min", price: "35 €" },
          { duration: "60 min", price: "60 €" }
        ],
        intensity: 4,
        description: "Trabajo con vacio para estimular circulacion, tejido y liberacion fascial.",
        ideal: "Ideal para celulitis localizada, tensiones profundas y activacion de la zona.",
        image: conVentosasImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Envoltura reductora con vendas frias",
        duration: "30 min",
        price: "25 €",
        intensity: 2,
        description: "Aplicacion de vendas frias para efecto tonificante y activacion del metabolismo local.",
        ideal: "Ideal para complemento reductor, firmeza y sensacion de piernas ligeras.",
        image: vendasFriasImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Maderoterapia mas vendas frias",
        duration: "90 min",
        price: "80 €",
        intensity: 4,
        description: "Combinacion intensiva para modelar, drenar y reafirmar en una misma sesion.",
        ideal: "Ideal para potenciar resultados en protocolos corporales reductores.",
        image: maderoConVendasFriasImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Presoterapia",
        duration: "40 min",
        price: "30 €",
        intensity: 2,
        description: "Compresion secuencial para favorecer drenaje, retorno venoso y descanso muscular.",
        ideal: "Ideal para retencion, fatiga en piernas y apoyo a tratamientos anticeluliticos.",
        image: presoterapiaImage,
        bookingUrl: BOOKING_URL
      },
      {
        title: "Masaje y presoterapia",
        duration: "60 min",
        price: "45 €",
        intensity: 3,
        description: "Combinacion manual y tecnologica para reducir volumen y mejorar circulacion.",
        ideal: "Ideal para celulitis, retencion y sensacion de cuerpo congestionado.",
        image: masajeYPresoterapiaImage,
        bookingUrl: BOOKING_URL
      }
    ]
  },
  {
    key: "anticeluliticos",
    title: "Tratamientos anticeluliticos y reductores",
    services: [
      {
        title: "Vacumterapia",
        duration: "60 min",
        price: "desde 50 €",
        intensity: 4,
        description: "Tecnica de vacio para movilizar tejido adiposo y mejorar firmeza de la piel.",
        ideal: "Ideal para zonas con celulitis visible y necesidad de modelado corporal.",
        image: vacumterapiaImage,
        bookingUrl: BOOKING_URL
      }
    ]
  }
];
