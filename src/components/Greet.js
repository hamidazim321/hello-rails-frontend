import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetSlice/greetSlice';

export default function Greet() {
  const { value, error, loading } = useSelector((state) => state.greet);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);
  return (
    <div>
      {error && <p>{error}</p>}
      {loading && <h2>.......</h2>}
      {value && <h1>{value}</h1>}
      <button type="button" aria-label="fetch greetings" onClick={() => dispatch(fetchGreetings())}>Fetch greetings</button>
    </div>
  );
}
