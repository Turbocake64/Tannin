import React from 'react'

function Form ({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Wine</strong>
        </label>
        <div>
          <input
            className="form-control"
            id="Title"
            type="text"
            value={q}
            placeholder="Choose your Wine"
            name="q"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Form
