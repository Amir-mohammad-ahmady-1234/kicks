import React from "react";

function page() {
  return (
    <div>
      {process.env.UPSTASH_REDIS_REST_TOKEN}
      {process.env.DATABASE_URL}
    </div>
  );
}

export default page;
