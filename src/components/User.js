import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.firstName };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.lastName };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: ""
  });
  return (
    <div>
      <div>
        <label>First Name</label>
        <input
          placeholder="First Name"
          className="form-control"
          value={state.firstName}
          onChange={e =>
            dispatch({ type: "SET_FIRST_NAME", firstName: e.target.value })
          }
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          className="form-control"
          value={state.lastName}
          onChange={e =>
            dispatch({ type: "SET_LAST_NAME", firstName: e.target.value })
          }
        />
      </div>
    </div>
  );
}
