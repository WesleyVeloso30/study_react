import { useState } from "react"
import Radio from "./Radio"
import { mockQuestions } from "../../mock/questions";

const questions = mockQuestions;

const questionReduce = questions.reduce((acc, question) => {
  return {
    ...acc,
    [question.id]: ''
  }
}, {});

const QuestionsForm = () => {
  const [ responses, setResponses ] = useState(questionReduce);
  const [ slide, setSlide ] = useState(0);
  const [ result, setResult ] = useState(null);

  function handleChange({ target }) {
    setResponses({ ...responses, [target.id]: target.value });
  }

  function handleResult() {
    const corrects = questions.filter(({ id, response }) => responses[id] === response);
    setResult(`Você acertou ${corrects.length} de ${questions.length}`);
  }

  function handleClick() {
    setSlide(slide + 1);
    if(slide === questions.length - 1) handleResult();
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {questions.map((question, index) => (
        <Radio
          key={question.id}
          {...question}
          onChange={handleChange}
          value={responses[question.id]}
          active={slide === index} />
        ))}
      {result ? <p>{result}</p> : <button onClick={handleClick}>Próxima</button>}
    </ form>
  )
}

export default QuestionsForm;
