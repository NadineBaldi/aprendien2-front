const exams = [
  {
    id: 1,
    timeLimit: null,
    minimumGrade: 60,
    description: "Descripción del exámen 1",
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
    id: 2,
    timeLimit: 60,
    minimumGrade: 50,
    description: "Descripción del exámen 2",
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
    id: 3,
    timeLimit: 120,
    minimumGrade: 70,
    description: "Descripción del exámen 3",
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
];

module.exports = {
  exams,
};
