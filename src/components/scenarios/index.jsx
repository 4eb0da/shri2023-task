import { Event } from "../event-element";

export const Scenarios = () => (
  <section className="section main__scripts">
    <h2 className="section__title section__title-header">Избранные сценарии</h2>

    <ul className="event-grid">
      <Event
        slim={true}
        icon="light2"
        iconLabel="Освещение"
        title="Выключить весь свет в доме и во дворе"
        ref={null}
      />
      <Event
        slim={true}
        icon="schedule"
        iconLabel="Расписание"
        title="Я ухожу"
        ref={null}
      />
      <Event
        slim={true}
        icon="light2"
        iconLabel="Освещение"
        title="Включить свет в коридоре"
        ref={null}
      />
      <Event
        slim={true}
        icon="temp2"
        iconLabel="Температура"
        title="Набрать горячую ванну"
        subtitle="Начнётся в 18:00"
        ref={null}
      />
      <Event
        slim={true}
        icon="temp2"
        iconLabel="Температура"
        title="Сделать пол тёплым во всей квартире"
        ref={null}
      />
    </ul>
  </section>
);
