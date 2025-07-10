export const INVOICES = [
  {
    id: 'FA1001',
    date: '2024-12-01',
    paymentTerms: '15',
    status: 'paid',
    description: 'Servicios de diseño gráfico',
    receiver: {
      name: 'María López',
      emmail: 'maria.lopez@example.com',
      address: {
        street: 'Av. Reforma 123',
        city: 'Ciudad de México',
        state: 'CDMX',
        zipCode: '06000',
        country: 'México'
      }
    },
    transmitter: {
      address: {
        street: 'Calle Palma 456',
        city: 'Guadalajara',
        state: 'Jalisco',
        zipCode: '44100',
        country: 'México'
      }
    },
    items: [
      { name: 'Diseño de logotipo', quantity: 1, price: 800.00, total: 800.00 },
      { name: 'Diseño de papelería', quantity: 1, price: 400.00, total: 400.00 }
    ]
  },
  {
    id: 'FA1002',
    date: '2025-01-10',
    paymentTerms: '30',
    status: 'paid',
    description: 'Mantenimiento de sitio web',
    receiver: {
      name: 'Carlos Pérez',
      emmail: 'carlos.perez@example.com',
      address: {
        street: 'Calle Hidalgo 89',
        city: 'Monterrey',
        state: 'Nuevo León',
        zipCode: '64000',
        country: 'México'
      }
    },
    transmitter: {
      address: {
        street: 'Av. Insurgentes 300',
        city: 'Ciudad de México',
        state: 'CDMX',
        zipCode: '03100',
        country: 'México'
      }
    },
    items: [
      { name: 'Actualización mensual', quantity: 2, price: 750.00, total: 1500.00 }
    ]
  },
  {
    id: 'FA1003',
    date: '2025-03-12',
    paymentTerms: '15',
    status: 'pending',
    description: 'Redacción de contenido',
    receiver: {
      name: 'Lucía Ramírez',
      emmail: 'lucia.ramirez@example.com',
      address: {
        street: 'Calle Morelos 47',
        city: 'Puebla',
        state: 'Puebla',
        zipCode: '72000',
        country: 'México'
      }
    },
    transmitter: {
      address: {
        street: 'Av. Universidad 101',
        city: 'Toluca',
        state: 'Estado de México',
        zipCode: '50000',
        country: 'México'
      }
    },
    items: [
      { name: 'Blog empresarial', quantity: 3, price: 300.00, total: 900.00 }
    ]
  },
  {
    id: 'FA1004',
    date: '2025-05-18',
    paymentTerms: '10',
    status: 'pending',
    description: 'Servicios de traducción',
    receiver: {
      name: 'Andrés García',
      emmail: 'andres.garcia@example.com',
      address: {
        street: 'Calle Juárez 15',
        city: 'Querétaro',
        state: 'Querétaro',
        zipCode: '76000',
        country: 'México'
      }
    },
    transmitter: {
      address: {
        street: 'Calle Reforma 220',
        city: 'San Luis Potosí',
        state: 'San Luis Potosí',
        zipCode: '78000',
        country: 'México'
      }
    },
    items: [
      { name: 'Traducción técnica', quantity: 5, price: 100.00, total: 500.00 }
    ]
  },
  {
    id: 'FA1005',
    date: '2025-04-05',
    paymentTerms: '20',
    status: 'paid',
    description: 'Diseño de folleto publicitario',
    receiver: {
      name: 'Sofía Herrera',
      emmail: 'sofia.herrera@example.com',
      address: {
        street: 'Av. Juárez 333',
        city: 'Cancún',
        state: 'Quintana Roo',
        zipCode: '77500',
        country: 'México'
      }
    },
    transmitter: {
      address: {
        street: 'Calle 60 #204',
        city: 'Mérida',
        state: 'Yucatán',
        zipCode: '97000',
        country: 'México'
      }
    },
    items: [
      { name: 'Diseño folleto', quantity: 1, price: 1200.00, total: 1200.00 }
    ]
  },
  {
    id: 'FA1006',
    date: '2025-06-01',
    paymentTerms: '30',
    status: 'pending',
    description: 'Edición de video promocional',
    receiver: {
      name: 'Luis Mendoza',
      emmail: 'luis.mendoza@example.com',
      address: {
        street: 'Calle Real 56',
        city: 'Aguascalientes',
        state: 'Aguascalientes',
        zipCode: '20000',
        country: 'México'
      }
    },
    transmitter: {
      address: {
        street: 'Av. Tecnológico 789',
        city: 'Celaya',
        state: 'Guanajuato',
        zipCode: '38000',
        country: 'México'
      }
    },
    items: [
      { name: 'Video corporativo', quantity: 1, price: 2500.00, total: 2500.00 }
    ]
  },
  {
    id: 'FA1007',
    date: '2025-07-22',
    paymentTerms: '10',
    status: 'paid',
    description: 'Consultoría de marketing digital',
    receiver: {
      name: 'Ana Torres',
      emmail: 'ana.torres@example.com',
      address: {
        street: 'Calle Norte 45',
        city: 'Morelia',
        state: 'Michoacán',
        zipCode: '58000',
        country: 'México'
      }
    },
    transmitter: {
      address: {
        street: 'Calle Libertad 999',
        city: 'León',
        state: 'Guanajuato',
        zipCode: '37000',
        country: 'México'
      }
    },
    items: [
      { name: 'Análisis SEO', quantity: 1, price: 950.00, total: 950.00 },
      { name: 'Campaña redes sociales', quantity: 1, price: 1050.00, total: 1050.00 }
    ]
  },
  {
    status: 'draft',
    id: 'FA1008',
    date: '2025-08-15',
    paymentTerms: '15',
    description: 'Fotografía para catálogo de productos',
    receiver: {
      name: 'Javier Morales',
      emmail: 'javier.morales@example.com',
      address: {
        street: 'Av. Del Sol 777',
        city: 'Hermosillo',
        state: 'Sonora',
        zipCode: '83000',
        country: 'México'
      }
    },
    transmitter: {
      address: {
        street: 'Calle Luna 88',
        city: 'Tijuana',
        state: 'Baja California',
        zipCode: '22000',
        country: 'México'
      }
    },
    items: [
      { name: 'Sesión fotográfica', quantity: 1, price: 1800.00, total: 1800.00 }
    ]
  },
  {
    id: 'FA1009',
    date: '2025-09-10',
    paymentTerms: '20',
    status: 'pending',
    description: 'Animación para redes sociales',
    receiver: {
      name: 'Paola Díaz',
      emmail: 'paola.diaz@example.com',
      address: {
        street: 'Calle Primavera 22',
        city: 'Culiacán',
        state: 'Sinaloa',
        zipCode: '80000',
        country: 'México'
      }
    },
    transmitter: {
      address: {
        street: 'Av. Del Valle 12',
        city: 'Mazatlán',
        state: 'Sinaloa',
        zipCode: '82000',
        country: 'México'
      }
    },
    items: [
      { name: 'Animación 15s', quantity: 2, price: 400.00, total: 800.00 }
    ]
  },
  {
    id: 'FA1010',
    date: '2025-10-01',
    paymentTerms: '30',
    status: 'pending',
    description: 'Diseño de landing page',
    receiver: {
      name: 'Fernando Cruz',
      emmail: 'fernando.cruz@example.com',
      address: {
        street: 'Calle Sur 30',
        city: 'Chihuahua',
        state: 'Chihuahua',
        zipCode: '31000',
        country: 'México'
      }
    },
    transmitter: {
      address: {
        street: 'Calle Industrial 60',
        city: 'Durango',
        state: 'Durango',
        zipCode: '34000',
        country: 'México'
      }
    },
    items: [
      { name: 'Diseño UI', quantity: 1, price: 2200.00, total: 2200.00 }
    ]
  }
]
