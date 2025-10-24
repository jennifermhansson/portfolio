import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

function TypedString() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hi, I'm Jennifer👋"],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return <span ref={el} className="typed-text"></span>;
}

export default TypedString;
