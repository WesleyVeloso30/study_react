/* eslint-disable react/prop-types */

const Radio = ({ question, options, id, onChange, value, active }) => {

  if(!active) return null;
  return (
    <fieldset>
      <legend style={{fontWeight: 'bold'}}>{question}</legend>
      {options.map((option) => <label key={option} style={{marginBottom: '1rem', fontFamily: 'monospace', display: 'block'}}>
        <input type='radio' value={option} onChange={onChange} id={id} checked={value === option} />
        {option}
      </label>)}
    </fieldset>
  )
}

export default Radio