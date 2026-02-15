import { useEffect, useState } from "react";

export default function MockInterview() {
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(0);
  const [isTimerRun, setIsTimerRun] = useState(false);

  const formatTime = (time: number) => String(time).padStart(2, "0");

  useEffect(() => {
    if ((!seconds && !minutes) || !isTimerRun) return;

    const timer = setInterval(() => {
      if (seconds === 0) {
        setMinutes((prev) => prev - 1);
        setSeconds(60);
      }
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes, isTimerRun]);

  return (
    <>
      <div className="flex">
        {formatTime(minutes)}:{formatTime(seconds)}
        MINS SECS
      </div>
      <button onClick={() => setIsTimerRun(!isTimerRun)}>
        {isTimerRun ? "Pause" : "Run Timer"}
      </button>
    </>
  );
}
