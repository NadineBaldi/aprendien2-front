const courses = [
  {
    id: 1,
    name: "Redes de información",
    status: "Pendiente",
    units: [
      {
        id: 11,
        name: "Unidad 1: Fragmentación",
        questions: [
          {
            id: 1,
            title:
              "Marcar la/s afirmación/es correcta/s respecto a la fragmentación.",
            options: [
              {
                id: 11,
                title:
                  "El total de bytes transmitidos en la red aumenta cuando los datagramas se fragmentan.",
                correct: true,
              },
              {
                id: 12,
                title: "Todas las opciones son incorrectas.",
                correct: false,
              },
              {
                id: 13,
                title:
                  "Si un router recibe un datagrama y genera 3 fragmentos con offset 0, 100 y 200, existe al menos un escenario donde el destinatario recibe un fragmento del mismo datagrama con offset = 150.",
                correct: true,
              },
              {
                id: 14,
                title:
                  "El retraso de un fragmento en la red puede provocar la pérdida del datagrama completo.",
                correct: true,
              },
              {
                id: 15,
                title:
                  "El encabezado de un fragmento nunca puede tener un tamaño mayor a 20 bytes.",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title:
              "Marque las afirmaciones correctas referentes al mecanismo de control de congestión llamado señalización explícita. Seleccione una o más de una.",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Si HLEN = 8 se puede afirmar que:",
            options: [
              {
                id: 11,
                title: "El datagrama tiene el encabezado estándar sin opciones",
                correct: false,
              },
              {
                id: 12,
                title: "En el encabezado del datagrama se han habilitado opciones",
                correct: true,
              },
              {
                id: 13,
                title: "El desplazamiento del fragmento es igual a 64 bytes",
                correct: false,
              },
              {
                id: 14,
                title: "El datagrama ha sido dividido en 8 fragmentos",
                correct: false,
              },
              {
                id: 15,
                title: "Se trata de un fragmento",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            title: "Marcar la/s afirmación/es correcta/s respecto a la fragmentación.",
            options: [
              {
                id: 11,
                title: "El proceso de reensamblado se realiza en el destinatario final.",
                correct: true,
              },
              {
                id: 12,
                title: "Un encabezado con el bit DF = 0 indica que es el último fragmento.",
                correct: false,
              },
              {
                id: 13,
                title: "Un datagrama nunca puede ser fragmentado por el host que origina el datagrama.",
                correct: false,
              },
              {
                id: 14,
                title: "Un datagrama con el bit DF = 1 será descartado de la red cuando su total_length sea mayor al MTU de la red por donde debe ser enviado.",
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 12,
        name: "Unidad 2: Direccionamiento IP",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        id: 13,
        name: "Unidad 3: MPLS",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        id: 14,
        name: "Unidad 4: OSPF",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Física II",
    status: "Publicado",
    units: [
      {
        id: 21,
        name: "Unidad 1: Ley de Gauss",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        id: 22,
        name: "Unidad 2: Campo Eléctrico",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        id: 23,
        name: "Unidad 3: Capacitores",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Álgebra",
    status: "Publicado",
    units: [
      {
        id: 31,
        name: "Unidad 1",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            title: "Título pregunta 4",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: true,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 5,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 6,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 7,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 32,
        name: "Unidad 2",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            title: "Título pregunta 4",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: true,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 5,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 6,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 33,
        name: "Unidad 3",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            title: "Título pregunta 4",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: true,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        id: 34,
        name: "Unidad 4",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            title: "Título pregunta 4",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: true,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 5,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 6,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 7,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 35,
        name: "Unidad 5",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            title: "Título pregunta 4",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: true,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 5,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 6,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 7,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 36,
        name: "Unidad 6",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            title: "Título pregunta 4",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: true,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 5,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 6,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 7,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Análisis Matemático I",
    status: "Archivado",
    units: [
      {
        id: 41,
        name: "Unidad 1",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            title: "Título pregunta 4",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: true,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 5,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 6,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 7,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
        ],
      },
      {
        id: 42,
        name: "Unidad 2",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
        ],
      },
      {
        id: 43,
        name: "Unidad 3",
        questions: [
          {
            id: 1,
            title: "Título pregunta 1",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: true,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 2,
            title: "Título pregunta 2",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 3,
            title: "Título pregunta 3",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: true,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 4,
            title: "Título pregunta 4",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: true,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: false,
              },
            ],
          },
          {
            id: 5,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 6,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
          {
            id: 7,
            title: "Título pregunta 5",
            options: [
              {
                id: 11,
                title: "Respuesta 1",
                correct: false,
              },
              {
                id: 12,
                title: "Respuesta 2",
                correct: false,
              },
              {
                id: 13,
                title: "Respuesta 3",
                correct: false,
              },
              {
                id: 14,
                title: "Respuesta 4",
                correct: true,
              },
            ],
          },
        ],
      },
    ],
  },
];

module.exports = {
  courses,
};
