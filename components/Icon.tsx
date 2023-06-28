import * as React from "react";

interface SVGElement extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}

const Icon = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z" />
  </svg>
);

const MoreVert = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480.606-126Q456-126 438.5-143.373T421-185.142q0-23.458 17.3-41.658 17.3-18.2 41.594-18.2Q505-245 522-226.783t17 42Q539-161 522.106-143.5t-41.5 17.5Zm0-295Q456-421 438.5-438.3T421-479.894Q421-505 438.3-522t41.594-17Q505-539 522-522.106t17 41.5Q539-456 522.106-438.5t-41.5 17.5Zm0-294Q456-715 438.5-732.677t-17.5-42.5Q421-800 438.3-817.5t41.594-17.5Q505-835 522-817.358q17 17.641 17 42.464t-16.894 42.359Q505.212-715 480.606-715Z" />
  </svg>
);

const PostAdd = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h394v60H180v600h600v-394h60v394q0 24-18 42t-42 18H180Zm141-157v-60h319v60H321Zm0-127v-60h319v60H321Zm0-127v-60h319v60H321Zm371-73v-88h-88v-60h88v-88h60v88h88v60h-88v88h-60Z" />
  </svg>
);

const Bookmark = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m480-240-196 84q-30 13-57-4.756-27-17.755-27-50.244v-574q0-24 18-42t42-18h440q24 0 42 18t18 42v574q0 32.489-27 50.244Q706-143 676-156l-196-84Zm0-64 220 93v-574H260v574l220-93Zm0-481H260h440-220Z" />
  </svg>
);

const BookmarkFill = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m480-240-196 84q-30 13-57-5t-27-50v-574q0-24 18-42t42-18h440q24 0 42 18t18 42v574q0 32-27 50t-57 5l-196-84Z" />
  </svg>
);

const SendFill = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M162-178q-15 6-28.5-2.5T120-205v-200l302-75-302-77v-198q0-16 13.5-24.5T162-782l652 274q18 8 18 28t-18 28L162-178Z" />
  </svg>
);

const Delete = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M261-120q-24 0-42-18t-18-42v-570h-11q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190-810h158q0-13 8.625-21.5T378-840h204q12.75 0 21.375 8.625T612-810h158q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770-750h-11v570q0 24-18 42t-42 18H261Zm0-630v570h438v-570H261Zm106 454q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T427-296v-339q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T367-635v339Zm166 0q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T593-296v-339q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T533-635v339ZM261-750v570-570Z" />
  </svg>
);

const DeleteFill = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M261-120q-24 0-42-18t-18-42v-570h-11q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190-810h158q0-13 8.625-21.5T378-840h204q12.75 0 21.375 8.625T612-810h158q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770-750h-11v570q0 24-18 42t-42 18H261Zm106-176q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T427-296v-339q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T367-635v339Zm166 0q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625T593-296v-339q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T533-635v339Z" />
  </svg>
);

const EditNote = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m810-379-71-71 29-29q8.311-8 21.156-8Q802-487 810-479l29 29q8 8.311 8 21.156Q847-416 839-408l-29 29ZM480-120v-71l216-216 71 71-216 216h-71ZM120-330v-60h300v60H120Zm0-165v-60h470v60H120Zm0-165v-60h470v60H120Z" />
  </svg>
);

const DoneFill = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z" />
  </svg>
);

const CloseFill = (props: SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
  </svg>
);

export {
  Icon,
  MoreVert,
  PostAdd,
  Bookmark,
  BookmarkFill,
  SendFill,
  Delete,
  DeleteFill,
  EditNote,
  DoneFill,
  CloseFill,
};
