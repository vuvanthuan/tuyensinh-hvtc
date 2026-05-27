"use client";

import { useEffect, useMemo, useState } from "react";

const getRemaining = (target: number) => {
  const distance = Math.max(target - Date.now(), 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
};

export function CountdownTimer() {
  const target = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    date.setHours(23, 59, 59, 999);
    return date.getTime();
  }, []);
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRemaining(getRemaining(target));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [target]);

  const items = [
    ["Ngày", remaining.days],
    ["Giờ", remaining.hours],
    ["Phút", remaining.minutes],
    ["Giây", remaining.seconds],
  ];

  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur">
      <p className="mb-3 text-center text-sm font-semibold tracking-wide text-white/80 uppercase">
        Thời gian ưu tiên hồ sơ
      </p>
      <div className="grid grid-cols-4 gap-3">
        {items.map(([label, value]) => (
          <div
            className="rounded-lg bg-white px-2 py-3 text-center text-[#1a5c3a]"
            key={label}
          >
            <div className="text-2xl font-black tabular-nums">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-xs font-semibold text-gray-500">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
