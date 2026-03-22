import { useAppDispatch, useAppSelector } from "../../store";
import {
  decrement,
  increment,
  resetState,
  setMessage,
  startLoading,
  stopLoading,
} from "../infrastructure/sample.slice";

export const useSample = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((rootState) => rootState.sample);

  return {
    // State
    ...state,

    // Actions
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    setMessage: (message: string) => dispatch(setMessage(message)),
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading()),
    resetState: () => dispatch(resetState()),
  };
};
