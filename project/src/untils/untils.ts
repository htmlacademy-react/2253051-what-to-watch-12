function formatTime(time: number): string {
  if (time > 3600) {
    const hours = Math.floor(time / 3600);
    const min = Math.floor(time % 3600 / 60);
    const sec = time % 60;
    return `${hours} : ${min} : ${sec}`;
  } else {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min} : ${sec}`;
  }
}

export default formatTime;

