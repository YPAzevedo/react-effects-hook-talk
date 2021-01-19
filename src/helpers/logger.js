import colors from "./colors";

const loggerColorEntries = Object.entries(colors);

function makeColorfulLoggers() {
  return loggerColorEntries.reduce((colorLoggers, [color, pallete]) => {
    return {
      ...colorLoggers,
      [`${color}Logger`]: (log) =>
        console.log(
          `%c ${log}`,
          `background: ${pallete[1]}; color: ${pallete[0]}`
        )
    };
  }, {});
}

export default makeColorfulLoggers();
