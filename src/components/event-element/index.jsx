import { forwardRef } from "react";

export const Event = forwardRef(function Event(props, ref) {
  // eslint-disable-next-line react/prop-types
  const { slim, icon, iconLabel, title, subtitle } = props;

  return (
    <li ref={ref} className={"event" + (slim ? " event_slim" : "")}>
      <button className="event__button">
        <span
          className={`event__icon event__icon_${icon}`}
          role="img"
          aria-label={iconLabel}
        ></span>
        <h4 className="event__title">{title}</h4>
        {subtitle && <span className="event__subtitle">{subtitle}</span>}
      </button>
    </li>
  );
});
