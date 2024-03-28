import React from "react";
import { getTermsConditions } from "../../../sanity/lib/client";
import PortableContent from "@/components/PortableContent";

async function page() {
  const data = await getTermsConditions();
  return <PortableContent data={data} />;
}

export default page;
