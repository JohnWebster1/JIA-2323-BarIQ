import * as React from "react";

function VideosIcon({ fill = "#white", ...rest }) {
  return (
    <svg
      width={24}
      height={24}
      fill="white"
      viewBox="0 0 24 24"
      stroke="white"
      size="100px"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M4 8H2v12a2 2 0 002 2h12v-2H4V8z" fill={"none"} />
      <path
        d="M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-9 12V6l7 4-7 4z"
        fill={"none"}
      />
    </svg>
  );
}

export default VideosIcon;
