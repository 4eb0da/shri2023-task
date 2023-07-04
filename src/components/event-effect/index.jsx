import { useRef, useEffect } from "react";

import { Event } from "../event-element";

export const EventEffect = (props) => {
  const ref = useRef();

  // eslint-disable-next-line react/prop-types
  const { onSize, slim, icon, iconLabel, title, subtitle } = props;

  useEffect(() => {
    const width = ref.current.offsetWidth;
    const height = ref.current.offsetHeight;

    if (onSize) {
      onSize({ width, height });
    }
  }, [onSize]);

  return (
    <Event
      title={title}
      subtitle={subtitle}
      iconLabel={iconLabel}
      icon={icon}
      slim={slim}
      ref={ref}
    />
  );
};
