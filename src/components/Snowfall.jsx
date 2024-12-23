export default function Snowfall({ children }) {
  // Valores modificables
  // 1. Numero de copos de nieve
  const numberOfSnowflakes = 40;
  // 2. Tiempo de caida de los copos de nieve
  const fallTimeValues = {
    min: 8,
    max: 16,
  };
  // 3. Tiempo de movimiento de los copos de nieve
  const windTimeValues = {
    min: 5,
    max: 11,
  };
  // 4. Tamaño de los copos de nieve
  const snowflakesSizeValues = {
    min: 0.5,
    max: 4.5,
  };

  const getRandomValue = () => Math.round(Math.random() * 100) / 100;

  const snowflakesArray = Array.from({ length: numberOfSnowflakes }, () => ({
    value1: getRandomValue(),
    value2: getRandomValue(),
    value3: getRandomValue(),
  }));

  return (
    <>
      <div id='snowfall'>
        {snowflakesArray.map((item, index) => {
          const leftDistance = item.value1 * 100;
          const topDistance = item.value2 * 100;
          const fallTime =
            fallTimeValues.min +
            item.value3 * (fallTimeValues.max - fallTimeValues.min);
          const windTime =
            windTimeValues.min +
            item.value3 * (windTimeValues.max - windTimeValues.min);
          const snowflakesSize =
            snowflakesSizeValues.min +
            item.value3 * (snowflakesSizeValues.max - snowflakesSizeValues.min);
          return (
            <div
              key={index}
              className='snowflakes'
              style={{
                position: 'fixed',
                left: `${leftDistance}%`,
                top: `-${topDistance}%`,
                width: `${snowflakesSize}px`,
                height: `${snowflakesSize}px`,
                animation: `snow ${fallTime}s linear infinite, wind ${windTime}s ease-in-out infinite`,
              }}
            ></div>
          );
        })}
      </div>
      {children}
    </>
  );
}
