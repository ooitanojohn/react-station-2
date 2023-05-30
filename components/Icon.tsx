import * as React from "react"

interface SVGElement extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  fill?: string
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
)

const AddCircle = (props:SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M453-280h60v-166h167v-60H513v-174h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
  </svg>
)

const AddCircleFill = (props:SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M453-280h60v-166h167v-60H513v-174h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Z" />
  </svg>
)

const MoreVert = (props:SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480.606-126Q456-126 438.5-143.373T421-185.142q0-23.458 17.3-41.658 17.3-18.2 41.594-18.2Q505-245 522-226.783t17 42Q539-161 522.106-143.5t-41.5 17.5Zm0-295Q456-421 438.5-438.3T421-479.894Q421-505 438.3-522t41.594-17Q505-539 522-522.106t17 41.5Q539-456 522.106-438.5t-41.5 17.5Zm0-294Q456-715 438.5-732.677t-17.5-42.5Q421-800 438.3-817.5t41.594-17.5Q505-835 522-817.358q17 17.641 17 42.464t-16.894 42.359Q505.212-715 480.606-715Z" />
  </svg>
)

const PostAdd = (props:SVGElement) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h394v60H180v600h600v-394h60v394q0 24-18 42t-42 18H180Zm141-157v-60h319v60H321Zm0-127v-60h319v60H321Zm0-127v-60h319v60H321Zm371-73v-88h-88v-60h88v-88h60v88h88v60h-88v88h-60Z" />
  </svg>
)

export {Icon, AddCircle, AddCircleFill, MoreVert,PostAdd}
