"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const MapComponent = dynamic(
  () => import("@/app/components/mapcomponent"),
  {
    ssr: false,
  }
);

export default function Page() {
  const [data, setdata] = useState<any[]>([]);

  useEffect(() => {
    const getlocation = async () => {
      const req = await fetch("/api/data");
      const res = await req.json();

      console.log(res.response);

      setdata(res.response || []);
    };

    getlocation();
  }, []);

  return (
    <div>
      <MapComponent data={data} />
    </div>
  );
}