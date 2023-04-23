import { isEqual } from "lodash";
import { useEffect, useRef } from "react";

export const useDeepMemo = <T,>(value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    if (!isEqual(ref.current, value)) {
      ref.current = value;
    }
  }, [value]);

  return ref.current;
};
