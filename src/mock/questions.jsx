export const mockQuestions = [
    {
      question: 'Qual método é utilizado para criar componentes ?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      response: 'React.createElement()',
      id: 'p1',
    },
    {
      question: 'Como importamos um componente externo ?',
      options: [
        'import Component from "/Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      response: 'import Component from "/Component"',
      id: 'p2',
    },
    {
      question: 'Qual hook não é nativo ?',
      options: [
        'useEffect()',
        'useFetch()',
        'useCallback()',
      ],
      response: 'useFetch()',
      id: 'p3',
    },
    {
      question: 'Qual palavra deve ser utilizada para criarmos um hook ?',
      options: [
        'set',
        'get',
        'use',
      ],
      response: 'use',
      id: 'p4',
    },
];
