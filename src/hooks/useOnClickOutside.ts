import { RefObject, useEffect } from "react";

export function useOnClickOutside<T extends HTMLElement, U extends HTMLElement>(
  handler: (event: MouseEvent) => void,
  register: boolean,
  ref1: RefObject<T>,
  ref2?: RefObject<U>
): void {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (register) {
      const listener = (event: MouseEvent) => {
        const isOutside = [ref1, ref2].every(
          (ref) => ref?.current?.contains(event.target as Node) === false
        );

        isOutside && handler(event);
      };

      document.addEventListener(`mousedown`, listener);
      return () => {
        document.removeEventListener(`mousedown`, listener);
      };
    }
  }, [handler, register, ref1, ref2]);
}
