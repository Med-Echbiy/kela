import PortableContent from "@/components/PortableContent";
import React from "react";
import { getAboutInfo } from "../../../sanity/lib/client";

async function page() {
  const data = await getAboutInfo();
  return <PortableContent data={data} />;
}

export default page;
