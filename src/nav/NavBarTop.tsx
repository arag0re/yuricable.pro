// components/NavBar.js
import { Link } from 'react-router-dom'
import '../css/NavBarTop.css'

const NavBarTop = () => {
   //const isChromium = window.chrome !== undefined
   const navLinks = [
      { to: '/docs', text: 'Documentation' },
      { to: '/credits', text: 'Credits' },
   ]

   const linksToShow = navigator.serial
      ? [...navLinks, { to: '/cli', text: 'CLI' }]
      : navLinks

   return (
      <nav className="navbar">
         <div className="logo">
            <Link to="/">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 300.00714111328125 44.09120178222656"
                  overflow="visible"
               >
                  <defs id="SvgjsDefs58707"></defs>
                  <g
                     id="SvgjsG58708"
                     transform="scale(0.6493506493506495)"
                     opacity="1"
                  >
                     <g
                        id="SvgjsG58709"
                        className="vwAqnAo0w"
                        transform="translate(0, 0) scale(0.6790043968594732)"
                        light-content="false"
                        non-strokable="false"
                        fill="#9a197e"
                     >
                        <path d="M24 0h76v76c0 13.255-10.745 24-24 24H0V24C0 10.745 10.745 0 24 0z"></path>
                     </g>
                     <g
                        id="SvgjsG58710"
                        className="1SA9h-nUFX"
                        transform="translate(5.359418708626881, 5.360561027837934) scale(0.5717931763027143)"
                        light-content="true"
                        non-strokable="false"
                        fill="#ffffff"
                     >
                        <path d="M40 13.5h20a1 1 0 0 0 1-1V7.8a1 1 0 0 0-1-1H40c-.5 0-1 .5-1 1v4.7c0 .5.5 1 1 1z"></path>
                        <path d="M36.398 80.301h6.8V97.5h13.603V80.301h6.8c3.301 0 6-2.7 6-6v-43c0-1.7-1.3-3-3-3h-1.398L65.2 7.5c0-2.8-2.199-5-5-5H39.801c-2.8 0-5 2.2-5 5v20.898h-1.398c-1.7 0-3 1.3-3 3v43c-.004 3.203 2.7 5.902 5.996 5.902zm-4-48.902c0-.602.398-1 1-1h33.199c.602 0 1 .398 1 1v43c0 2.2-1.8 4-4 4H36.398c-2.2 0-4-1.8-4-4zM39.8 4.501h20.398c1.7 0 3 1.3 3 3v20.898H36.8V7.501c0-1.602 1.399-3 3-3zm15 91h-9.6V80.302h9.6z"></path>
                     </g>
                     <g
                        id="SvgjsG58711"
                        className="text"
                        transform="translate(276.09096933864146, 34.0694541526063) scale(1)"
                        light-content="false"
                        fill="#333333"
                     >
                        <path d="M-186.06 -23.83C-186.06 -23.66 -186.03 -23.53 -185.99 -23.43L-178.59 -11.18C-178.5 -11.04 -178.45 -10.87 -178.45 -10.68L-178.45 -1.71C-178.45 -1.17 -178.18 -0.74 -177.63 -0.45C-177.08 -0.15 -176.43 0 -175.66 0C-174.9 0 -174.25 -0.15 -173.7 -0.45C-173.15 -0.74 -172.88 -1.17 -172.88 -1.71L-172.88 -10.68C-172.88 -10.87 -172.83 -11.04 -172.73 -11.18L-165.38 -23.43C-165.33 -23.53 -165.3 -23.66 -165.3 -23.83C-165.3 -24.45 -165.73 -24.98 -166.57 -25.43C-167.42 -25.89 -168.26 -26.11 -169.09 -26.11C-169.8 -26.11 -170.34 -25.77 -170.7 -25.08L-175.66 -15.9L-180.66 -25.08C-180.88 -25.46 -181.09 -25.73 -181.31 -25.88C-181.52 -26.04 -181.84 -26.11 -182.27 -26.11C-183.11 -26.11 -183.94 -25.89 -184.79 -25.43C-185.64 -24.98 -186.06 -24.45 -186.06 -23.83Z M-159.73 -8.22C-159.73 -5.31 -158.92 -3.18 -157.28 -1.82C-155.65 -0.46 -153.47 0.21 -150.73 0.21C-148.01 0.21 -145.84 -0.46 -144.19 -1.82C-142.55 -3.18 -141.73 -5.31 -141.73 -8.22L-141.73 -24.43C-141.73 -24.98 -142 -25.4 -142.55 -25.68C-143.1 -25.97 -143.75 -26.11 -144.51 -26.11C-145.3 -26.11 -145.96 -25.97 -146.5 -25.68C-147.03 -25.4 -147.3 -24.98 -147.3 -24.43L-147.3 -8.22C-147.3 -5.83 -148.44 -4.64 -150.73 -4.64C-153.02 -4.64 -154.16 -5.83 -154.16 -8.22L-154.16 -24.43C-154.16 -24.98 -154.43 -25.4 -154.98 -25.68C-155.53 -25.97 -156.18 -26.11 -156.94 -26.11C-157.73 -26.11 -158.39 -25.97 -158.93 -25.68C-159.46 -25.4 -159.73 -24.98 -159.73 -24.43Z M-134.4 -1.71C-134.4 -1.17 -134.13 -0.74 -133.58 -0.45C-133.03 -0.15 -132.38 0 -131.62 0C-130.86 0 -130.2 -0.15 -129.65 -0.45C-129.11 -0.74 -128.83 -1.17 -128.83 -1.71L-128.83 -10.32L-126.47 -10.32L-121.58 -0.82C-121.22 -0.13 -120.63 0.21 -119.79 0.21C-118.96 0.21 -118.17 -0.1 -117.42 -0.71C-116.67 -1.33 -116.29 -1.99 -116.29 -2.68C-116.29 -2.94 -116.35 -3.16 -116.47 -3.32L-120.83 -11.22C-117.95 -12.34 -116.51 -14.75 -116.51 -18.47C-116.51 -23.56 -119.44 -26.11 -125.3 -26.11L-132.69 -26.11C-133.19 -26.11 -133.6 -25.95 -133.92 -25.61C-134.24 -25.28 -134.4 -24.89 -134.4 -24.43ZM-128.83 -14.61L-128.83 -21.25L-125.3 -21.25C-124.25 -21.25 -123.45 -21 -122.9 -20.49C-122.35 -19.97 -122.08 -19.12 -122.08 -17.93C-122.08 -16.74 -122.35 -15.89 -122.9 -15.38C-123.45 -14.87 -124.25 -14.61 -125.3 -14.61Z M-109.97 -1.71C-109.97 -1.17 -109.7 -0.74 -109.15 -0.45C-108.6 -0.15 -107.95 0 -107.18 0C-106.42 0 -105.77 -0.15 -105.22 -0.45C-104.67 -0.74 -104.4 -1.17 -104.4 -1.71L-104.4 -24.43C-104.4 -24.98 -104.67 -25.4 -105.22 -25.68C-105.77 -25.97 -106.42 -26.11 -107.18 -26.11C-107.95 -26.11 -108.6 -25.97 -109.15 -25.68C-109.7 -25.4 -109.97 -24.98 -109.97 -24.43Z M-97.25 -8.22C-97.25 -5.31 -96.46 -3.18 -94.88 -1.82C-93.29 -0.46 -91.23 0.21 -88.68 0.21C-86.06 0.21 -83.91 -0.45 -82.23 -1.79C-80.55 -3.12 -79.71 -4.94 -79.71 -7.25C-79.71 -8.28 -79.93 -8.97 -80.36 -9.34C-80.79 -9.71 -81.51 -9.9 -82.54 -9.9C-84.27 -9.9 -85.19 -9.34 -85.29 -8.22C-85.33 -7.72 -85.39 -7.32 -85.45 -7.04C-85.51 -6.75 -85.63 -6.39 -85.82 -5.95C-86.01 -5.51 -86.33 -5.18 -86.77 -4.97C-87.21 -4.75 -87.76 -4.64 -88.43 -4.64C-90.6 -4.64 -91.68 -5.83 -91.68 -8.22L-91.68 -17.68C-91.68 -20.06 -90.61 -21.25 -88.47 -21.25C-86.42 -21.25 -85.36 -20.18 -85.29 -18.04C-85.21 -16.92 -84.29 -16.36 -82.5 -16.36C-81.5 -16.36 -80.79 -16.55 -80.36 -16.91C-79.93 -17.28 -79.71 -17.98 -79.71 -19C-79.71 -21.22 -80.55 -22.96 -82.23 -24.22C-83.91 -25.48 -86.06 -26.11 -88.68 -26.11C-91.23 -26.11 -93.29 -25.43 -94.88 -24.08C-96.46 -22.72 -97.25 -20.59 -97.25 -17.68Z M-75.11 -2.29C-75.11 -1.67 -74.72 -1.13 -73.94 -0.68C-73.17 -0.23 -72.37 0 -71.53 0C-70.51 0 -69.9 -0.35 -69.71 -1.04L-68.5 -5.5L-60.96 -5.5L-59.75 -1.04C-59.55 -0.35 -58.95 0 -57.92 0C-57.09 0 -56.29 -0.23 -55.51 -0.68C-54.74 -1.13 -54.35 -1.67 -54.35 -2.29C-54.35 -2.36 -54.37 -2.49 -54.42 -2.68L-61.1 -24.47C-61.29 -25.06 -61.73 -25.52 -62.41 -25.84C-63.09 -26.17 -63.87 -26.33 -64.75 -26.33C-65.63 -26.33 -66.41 -26.17 -67.09 -25.84C-67.76 -25.52 -68.2 -25.06 -68.39 -24.47L-75.03 -2.68C-75.08 -2.49 -75.11 -2.36 -75.11 -2.29ZM-67.35 -9.79L-64.75 -19.36L-62.14 -9.79Z M-48.71 -1.68C-48.71 -1.23 -48.49 -0.83 -48.05 -0.5C-47.61 -0.17 -47.02 0 -46.28 0L-38.35 0C-36.16 0 -34.41 -0.61 -33.11 -1.84C-31.82 -3.07 -31.17 -5.01 -31.17 -7.68L-31.17 -8.43C-31.17 -10.1 -31.48 -11.35 -32.1 -12.2C-32.72 -13.04 -33.63 -13.69 -34.85 -14.15C-32.82 -15.03 -31.81 -16.9 -31.81 -19.75C-31.81 -23.99 -34.19 -26.11 -38.95 -26.11L-46.28 -26.11C-46.94 -26.11 -47.52 -25.96 -47.99 -25.67C-48.47 -25.37 -48.71 -24.95 -48.71 -24.4ZM-43.17 -4.86L-43.17 -12L-39.6 -12C-37.69 -12 -36.74 -10.91 -36.74 -8.72L-36.74 -8.14C-36.74 -5.95 -37.69 -4.86 -39.6 -4.86ZM-43.17 -16.29L-43.17 -21.25L-39.42 -21.25C-38.78 -21.25 -38.28 -21 -37.92 -20.5C-37.56 -20 -37.38 -19.42 -37.38 -18.75C-37.38 -18.09 -37.56 -17.51 -37.92 -17.02C-38.28 -16.53 -38.78 -16.29 -39.42 -16.29Z M-24.7 -1.71C-24.7 -1.17 -24.46 -0.74 -23.99 -0.45C-23.51 -0.15 -22.94 0 -22.27 0L-10.98 0C-10.48 0 -10.09 -0.24 -9.81 -0.71C-9.52 -1.19 -9.38 -1.76 -9.38 -2.43C-9.38 -3.1 -9.52 -3.67 -9.81 -4.14C-10.09 -4.62 -10.48 -4.86 -10.98 -4.86L-19.13 -4.86L-19.13 -24.43C-19.13 -24.98 -19.4 -25.4 -19.95 -25.68C-20.5 -25.97 -21.15 -26.11 -21.92 -26.11C-22.68 -26.11 -23.33 -25.97 -23.88 -25.68C-24.43 -25.4 -24.7 -24.98 -24.7 -24.43Z M-3.55 -1.71C-3.55 -1.17 -3.32 -0.74 -2.84 -0.45C-2.36 -0.15 -1.79 0 -1.13 0L11.59 0C12.14 0 12.56 -0.24 12.84 -0.71C13.13 -1.19 13.27 -1.75 13.27 -2.39C13.27 -3.08 13.12 -3.67 12.82 -4.14C12.53 -4.62 12.12 -4.86 11.59 -4.86L2.02 -4.86L2.02 -10.93L7.38 -10.93C7.92 -10.93 8.34 -11.15 8.63 -11.57C8.91 -12 9.06 -12.49 9.06 -13.04C9.06 -13.63 8.91 -14.15 8.61 -14.57C8.31 -15 7.9 -15.22 7.38 -15.22L2.02 -15.22L2.02 -21.25L11.59 -21.25C12.12 -21.25 12.53 -21.49 12.82 -21.97C13.12 -22.45 13.27 -23.03 13.27 -23.72C13.27 -24.36 13.13 -24.92 12.84 -25.4C12.56 -25.87 12.14 -26.11 11.59 -26.11L-1.13 -26.11C-1.79 -26.11 -2.36 -25.96 -2.84 -25.67C-3.32 -25.37 -3.55 -24.95 -3.55 -24.4Z M29.99 -1.71C29.99 -1.17 30.26 -0.74 30.81 -0.45C31.36 -0.15 32.01 0 32.77 0C33.54 0 34.19 -0.15 34.74 -0.45C35.29 -0.74 35.56 -1.17 35.56 -1.71L35.56 -9.43L39.1 -9.43C41.74 -9.43 43.87 -10.1 45.47 -11.45C47.08 -12.79 47.89 -14.88 47.89 -17.72L47.89 -17.9C47.89 -20.73 47.12 -22.81 45.58 -24.13C44.05 -25.45 42 -26.11 39.45 -26.11L32.06 -26.11C31.44 -26.11 30.94 -25.95 30.56 -25.61C30.18 -25.28 29.99 -24.89 29.99 -24.43ZM35.56 -13.72L35.56 -21.25L39.1 -21.25C41.24 -21.25 42.31 -20.06 42.31 -17.68L42.31 -17.29C42.31 -14.91 41.24 -13.72 39.1 -13.72Z M53.89 -1.71C53.89 -1.17 54.16 -0.74 54.71 -0.45C55.26 -0.15 55.91 0 56.67 0C57.44 0 58.09 -0.15 58.64 -0.45C59.19 -0.74 59.46 -1.17 59.46 -1.71L59.46 -10.32L61.82 -10.32L66.71 -0.82C67.07 -0.13 67.66 0.21 68.5 0.21C69.33 0.21 70.12 -0.1 70.87 -0.71C71.62 -1.33 72 -1.99 72 -2.68C72 -2.94 71.94 -3.16 71.82 -3.32L67.46 -11.22C70.34 -12.34 71.78 -14.75 71.78 -18.47C71.78 -23.56 68.85 -26.11 63 -26.11L55.6 -26.11C55.1 -26.11 54.69 -25.95 54.37 -25.61C54.05 -25.28 53.89 -24.89 53.89 -24.43ZM59.46 -14.61L59.46 -21.25L63 -21.25C64.04 -21.25 64.84 -21 65.39 -20.49C65.94 -19.97 66.21 -19.12 66.21 -17.93C66.21 -16.74 65.94 -15.89 65.39 -15.38C64.84 -14.87 64.04 -14.61 63 -14.61Z M78.03 -8.22C78.03 -5.31 78.83 -3.18 80.43 -1.82C82.02 -0.46 84.14 0.21 86.79 0.21C89.45 0.21 91.59 -0.46 93.18 -1.82C94.78 -3.18 95.57 -5.31 95.57 -8.22L95.57 -17.68C95.57 -20.59 94.78 -22.72 93.18 -24.08C91.59 -25.43 89.45 -26.11 86.79 -26.11C84.14 -26.11 82.02 -25.43 80.43 -24.08C78.83 -22.72 78.03 -20.59 78.03 -17.68ZM83.61 -8.22L83.61 -17.68C83.61 -20.06 84.67 -21.25 86.79 -21.25C88.93 -21.25 90 -20.06 90 -17.68L90 -8.22C90 -5.83 88.93 -4.64 86.79 -4.64C84.67 -4.64 83.61 -5.83 83.61 -8.22Z M113.44 -1.71C113.44 -1.17 113.71 -0.74 114.26 -0.45C114.8 -0.15 115.46 0 116.22 0C116.98 0 117.64 -0.15 118.19 -0.45C118.73 -0.74 119.01 -1.17 119.01 -1.71L119.01 -15.47L122.4 -9.25C122.76 -8.56 123.34 -8.22 124.15 -8.22C124.99 -8.22 125.6 -8.56 126.01 -9.25L129.44 -15.11L129.44 -1.71C129.44 -1.17 129.71 -0.74 130.26 -0.45C130.81 -0.15 131.46 0 132.23 0C132.99 0 133.64 -0.15 134.19 -0.45C134.74 -0.74 135.01 -1.17 135.01 -1.71L135.01 -23.33C135.01 -24.28 134.74 -24.98 134.21 -25.43C133.67 -25.89 133.01 -26.11 132.23 -26.11C131.15 -26.11 130.34 -25.95 129.78 -25.63C129.22 -25.31 128.59 -24.54 127.9 -23.33L124.22 -16.9L120.54 -23.33C119.85 -24.54 119.23 -25.31 118.67 -25.63C118.11 -25.95 117.29 -26.11 116.22 -26.11C115.44 -26.11 114.77 -25.89 114.24 -25.43C113.7 -24.98 113.44 -24.28 113.44 -23.33Z M140.66 -2.29C140.66 -1.67 141.04 -1.13 141.82 -0.68C142.59 -0.23 143.39 0 144.23 0C145.25 0 145.86 -0.35 146.05 -1.04L147.26 -5.5L154.8 -5.5L156.02 -1.04C156.21 -0.35 156.81 0 157.84 0C158.67 0 159.48 -0.23 160.25 -0.68C161.02 -1.13 161.41 -1.67 161.41 -2.29C161.41 -2.36 161.39 -2.49 161.34 -2.68L154.66 -24.47C154.47 -25.06 154.03 -25.52 153.35 -25.84C152.68 -26.17 151.9 -26.33 151.01 -26.33C150.13 -26.33 149.35 -26.17 148.68 -25.84C148 -25.52 147.56 -25.06 147.37 -24.47L140.73 -2.68C140.68 -2.49 140.66 -2.36 140.66 -2.29ZM148.41 -9.79L151.01 -19.36L153.62 -9.79Z M165.41 -2.54C165.41 -1.82 165.82 -1.18 166.64 -0.63C167.46 -0.07 168.29 0.21 169.13 0.21C169.77 0.21 170.21 0.02 170.45 -0.36L175.66 -9.22L180.88 -0.36C181.09 0.02 181.53 0.21 182.2 0.21C183.03 0.21 183.86 -0.07 184.68 -0.63C185.5 -1.18 185.92 -1.82 185.92 -2.54C185.92 -2.85 185.81 -3.18 185.59 -3.54L179.41 -13.07L185.34 -22.58C185.58 -22.96 185.7 -23.33 185.7 -23.68C185.7 -24.4 185.31 -25.02 184.52 -25.54C183.74 -26.07 182.93 -26.33 182.09 -26.33C181.31 -26.33 180.75 -26.02 180.41 -25.4L175.66 -17.11L170.91 -25.4C170.58 -26.02 170.02 -26.33 169.23 -26.33C168.4 -26.33 167.59 -26.07 166.8 -25.54C166.02 -25.02 165.63 -24.4 165.63 -23.68C165.63 -23.33 165.74 -22.96 165.98 -22.58L171.91 -13.07L165.73 -3.54C165.52 -3.18 165.41 -2.85 165.41 -2.54Z"></path>
                     </g>
                     <g
                        id="SvgjsG58712"
                        className="text"
                        transform="translate(150.52747217421833, 55.26884411411774) scale(1)"
                        light-content="false"
                        fill="#9a197e"
                     >
                        <path d="M-60.68 -0.69C-60.68 -0.47 -60.57 -0.3 -60.35 -0.18C-60.13 -0.06 -59.87 0 -59.56 0C-59.26 0 -59 -0.06 -58.78 -0.18C-58.56 -0.3 -58.45 -0.47 -58.45 -0.69L-58.45 -4.37L-56.29 -4.37C-56.07 -4.37 -55.9 -4.46 -55.79 -4.63C-55.68 -4.8 -55.62 -5 -55.62 -5.22C-55.62 -5.45 -55.68 -5.66 -55.8 -5.83C-55.92 -6 -56.08 -6.09 -56.29 -6.09L-58.45 -6.09L-58.45 -8.5L-54.75 -8.5C-54.54 -8.5 -54.37 -8.6 -54.25 -8.79C-54.14 -8.98 -54.08 -9.21 -54.08 -9.49C-54.08 -9.74 -54.13 -9.97 -54.25 -10.16C-54.36 -10.35 -54.53 -10.45 -54.75 -10.45L-59.71 -10.45C-59.97 -10.45 -60.2 -10.39 -60.39 -10.27C-60.58 -10.15 -60.68 -9.98 -60.68 -9.76Z M-53.32 -0.69C-53.32 -0.5 -53.21 -0.35 -53 -0.21C-52.79 -0.07 -52.53 0 -52.22 0C-51.91 0 -51.65 -0.07 -51.43 -0.21C-51.21 -0.36 -51.1 -0.51 -51.1 -0.69L-51.1 -10.02C-51.1 -10.22 -51.21 -10.38 -51.43 -10.5C-51.64 -10.63 -51.9 -10.69 -52.22 -10.69C-52.54 -10.69 -52.81 -10.63 -53.01 -10.5C-53.22 -10.38 -53.32 -10.22 -53.32 -10.02Z M-49.76 -9.14C-49.76 -8.87 -49.65 -8.63 -49.42 -8.42C-49.19 -8.22 -48.91 -8.12 -48.59 -8.12C-48.27 -8.12 -48 -8.22 -47.77 -8.42C-47.55 -8.63 -47.43 -8.87 -47.43 -9.14C-47.43 -9.42 -47.55 -9.66 -47.77 -9.86C-48 -10.06 -48.27 -10.16 -48.59 -10.16C-48.91 -10.16 -49.19 -10.06 -49.42 -9.86C-49.65 -9.66 -49.76 -9.42 -49.76 -9.14ZM-49.69 -0.69C-49.69 -0.5 -49.58 -0.35 -49.37 -0.21C-49.17 -0.07 -48.9 0 -48.59 0C-48.28 0 -48.02 -0.07 -47.8 -0.21C-47.58 -0.36 -47.47 -0.51 -47.47 -0.69L-47.47 -6.13C-47.47 -6.33 -47.58 -6.49 -47.8 -6.62C-48.01 -6.74 -48.27 -6.8 -48.59 -6.8C-48.91 -6.8 -49.18 -6.74 -49.38 -6.62C-49.59 -6.49 -49.69 -6.33 -49.69 -6.13Z M-46.19 2.41C-46.19 2.6 -46.08 2.76 -45.87 2.89C-45.66 3.03 -45.41 3.1 -45.1 3.1C-44.8 3.1 -44.53 3.03 -44.31 2.89C-44.09 2.74 -43.97 2.59 -43.97 2.41L-43.97 -1C-43.83 -0.69 -43.59 -0.42 -43.24 -0.19C-42.89 0.03 -42.52 0.14 -42.12 0.14C-41.46 0.14 -40.88 -0.16 -40.38 -0.77C-39.88 -1.38 -39.63 -2.09 -39.63 -2.89L-39.63 -3.89C-39.63 -4.72 -39.88 -5.42 -40.37 -6.01C-40.87 -6.59 -41.47 -6.89 -42.19 -6.89C-42.61 -6.89 -42.99 -6.78 -43.33 -6.57C-43.67 -6.36 -43.94 -6.11 -44.12 -5.8L-44.12 -6.13C-44.12 -6.33 -44.21 -6.49 -44.4 -6.62C-44.59 -6.74 -44.84 -6.8 -45.13 -6.8C-45.43 -6.8 -45.68 -6.74 -45.88 -6.62C-46.09 -6.49 -46.19 -6.33 -46.19 -6.13ZM-43.97 -2.7L-43.97 -3.89C-43.97 -4.21 -43.87 -4.47 -43.66 -4.67C-43.45 -4.86 -43.21 -4.96 -42.93 -4.96C-42.64 -4.96 -42.38 -4.85 -42.17 -4.63C-41.95 -4.41 -41.84 -4.16 -41.84 -3.89L-41.84 -2.89C-41.84 -2.6 -41.95 -2.35 -42.17 -2.12C-42.38 -1.9 -42.63 -1.79 -42.9 -1.79C-43.19 -1.79 -43.44 -1.9 -43.65 -2.13C-43.87 -2.36 -43.97 -2.55 -43.97 -2.7Z M-38.79 -3.43C-38.79 -3.16 -38.73 -2.95 -38.6 -2.78C-38.48 -2.61 -38.32 -2.53 -38.12 -2.53L-34.4 -2.53C-34.22 -2.53 -34.06 -2.61 -33.92 -2.79C-33.78 -2.96 -33.71 -3.17 -33.71 -3.43C-33.71 -3.68 -33.78 -3.89 -33.92 -4.07C-34.06 -4.25 -34.22 -4.34 -34.4 -4.34L-38.12 -4.34C-38.32 -4.34 -38.48 -4.26 -38.6 -4.08C-38.73 -3.9 -38.79 -3.69 -38.79 -3.43Z M-32.64 -0.69C-32.64 -0.5 -32.54 -0.35 -32.33 -0.21C-32.12 -0.07 -31.86 0 -31.54 0C-31.25 0 -30.99 -0.07 -30.76 -0.21C-30.54 -0.36 -30.43 -0.51 -30.43 -0.69L-30.43 -3.89C-30.43 -4.21 -30.33 -4.47 -30.14 -4.67C-29.94 -4.86 -29.72 -4.96 -29.47 -4.96C-29.19 -4.96 -28.95 -4.85 -28.75 -4.63C-28.54 -4.41 -28.44 -4.16 -28.44 -3.89L-28.44 -0.69C-28.44 -0.48 -28.33 -0.31 -28.11 -0.19C-27.88 -0.06 -27.63 0 -27.34 0C-27.04 0 -26.77 -0.06 -26.56 -0.18C-26.34 -0.3 -26.23 -0.47 -26.23 -0.69L-26.23 -3.89C-26.23 -4.71 -26.47 -5.41 -26.95 -6C-27.43 -6.59 -28 -6.89 -28.66 -6.89C-29.1 -6.89 -29.5 -6.78 -29.84 -6.57C-30.17 -6.36 -30.42 -6.11 -30.57 -5.8L-30.57 -6.13C-30.57 -6.33 -30.67 -6.49 -30.86 -6.62C-31.05 -6.74 -31.28 -6.8 -31.54 -6.8C-31.87 -6.8 -32.13 -6.74 -32.34 -6.62C-32.54 -6.49 -32.64 -6.33 -32.64 -6.13Z M-25.21 -3.43C-25.21 -3.16 -25.15 -2.95 -25.03 -2.78C-24.9 -2.61 -24.74 -2.53 -24.54 -2.53L-20.83 -2.53C-20.64 -2.53 -20.49 -2.61 -20.35 -2.79C-20.21 -2.96 -20.14 -3.17 -20.14 -3.43C-20.14 -3.68 -20.21 -3.89 -20.35 -4.07C-20.49 -4.25 -20.64 -4.34 -20.83 -4.34L-24.54 -4.34C-24.74 -4.34 -24.9 -4.26 -25.03 -4.08C-25.15 -3.9 -25.21 -3.69 -25.21 -3.43Z M-18.94 -0.69C-18.94 -0.47 -18.84 -0.3 -18.65 -0.18C-18.46 -0.06 -18.23 0 -17.97 0L-13.45 0C-13.25 0 -13.1 -0.1 -12.98 -0.29C-12.87 -0.48 -12.81 -0.7 -12.81 -0.97C-12.81 -1.24 -12.87 -1.47 -12.98 -1.66C-13.1 -1.85 -13.25 -1.94 -13.45 -1.94L-16.71 -1.94L-16.71 -9.77C-16.71 -9.99 -16.82 -10.16 -17.04 -10.27C-17.26 -10.39 -17.52 -10.45 -17.83 -10.45C-18.13 -10.45 -18.39 -10.39 -18.61 -10.27C-18.83 -10.16 -18.94 -9.99 -18.94 -9.77Z M-12.42 -1.76C-12.42 -1.14 -12.25 -0.67 -11.9 -0.34C-11.55 -0.02 -11.12 0.14 -10.6 0.14C-9.8 0.14 -9.08 -0.24 -8.42 -1L-8.42 -0.69C-8.42 -0.5 -8.33 -0.33 -8.14 -0.2C-7.95 -0.07 -7.71 0 -7.44 0C-7.12 0 -6.86 -0.07 -6.66 -0.2C-6.45 -0.33 -6.35 -0.5 -6.35 -0.69L-6.35 -4.09C-6.35 -4.89 -6.62 -5.55 -7.16 -6.09C-7.7 -6.62 -8.51 -6.89 -9.61 -6.89C-10.18 -6.89 -10.73 -6.78 -11.26 -6.55C-11.79 -6.33 -12.05 -6.06 -12.05 -5.74C-12.05 -5.46 -11.99 -5.2 -11.85 -4.98C-11.72 -4.76 -11.54 -4.64 -11.31 -4.64C-11.24 -4.64 -11.06 -4.72 -10.77 -4.88C-10.47 -5.04 -10.1 -5.12 -9.64 -5.12C-9.27 -5.12 -8.99 -5.01 -8.82 -4.8C-8.65 -4.59 -8.57 -4.34 -8.57 -4.06L-8.57 -3.92L-9.08 -3.92C-10.16 -3.92 -10.98 -3.75 -11.56 -3.43C-12.14 -3.11 -12.42 -2.55 -12.42 -1.76ZM-10.2 -2.07C-10.2 -2.29 -10.11 -2.46 -9.95 -2.58C-9.79 -2.7 -9.61 -2.77 -9.4 -2.8C-9.2 -2.83 -8.94 -2.84 -8.62 -2.84L-8.57 -2.84L-8.57 -2.79C-8.57 -2.44 -8.69 -2.14 -8.92 -1.87C-9.16 -1.61 -9.4 -1.47 -9.64 -1.47C-10.01 -1.47 -10.2 -1.67 -10.2 -2.07Z M-5.19 -2.86C-5.19 -2.06 -4.87 -1.36 -4.23 -0.76C-3.59 -0.16 -2.82 0.14 -1.94 0.14C-1.06 0.14 -0.3 -0.16 0.34 -0.76C0.99 -1.36 1.31 -2.06 1.31 -2.86L1.31 -6.13C1.31 -6.31 1.2 -6.47 0.99 -6.6C0.78 -6.73 0.52 -6.8 0.21 -6.8C-0.09 -6.8 -0.35 -6.73 -0.57 -6.6C-0.8 -6.47 -0.91 -6.31 -0.91 -6.13L-0.91 -2.86C-0.91 -2.58 -1.01 -2.33 -1.21 -2.11C-1.42 -1.9 -1.66 -1.79 -1.94 -1.79C-2.21 -1.79 -2.46 -1.9 -2.66 -2.11C-2.87 -2.33 -2.98 -2.58 -2.98 -2.86L-2.98 -6.12C-2.98 -6.29 -3.09 -6.44 -3.32 -6.59C-3.54 -6.73 -3.79 -6.8 -4.08 -6.8C-4.38 -6.8 -4.65 -6.73 -4.87 -6.59C-5.08 -6.44 -5.19 -6.29 -5.19 -6.12Z M2.05 1.03C2.05 1.67 2.37 2.17 3.01 2.54C3.65 2.91 4.41 3.1 5.31 3.1C6.2 3.1 6.97 2.91 7.59 2.52C8.22 2.14 8.54 1.55 8.54 0.77C8.54 0.27 8.39 -0.14 8.1 -0.46C7.81 -0.77 7.46 -0.98 7.04 -1.09C6.63 -1.2 6.22 -1.29 5.8 -1.34C5.39 -1.4 5.03 -1.46 4.74 -1.53C4.45 -1.6 4.31 -1.7 4.31 -1.83C4.31 -1.89 4.33 -1.95 4.37 -2.01C4.62 -1.96 4.91 -1.93 5.22 -1.93C6.09 -1.93 6.8 -2.16 7.36 -2.61C7.92 -3.06 8.19 -3.63 8.19 -4.32L8.19 -4.53C8.19 -5.08 8.01 -5.55 7.65 -5.94C7.73 -6.02 7.84 -6.12 7.98 -6.23L8.27 -6.46C8.42 -6.59 8.49 -6.73 8.49 -6.89C8.49 -7.03 8.42 -7.18 8.26 -7.32C8.1 -7.47 7.9 -7.54 7.65 -7.54C7.52 -7.54 7.39 -7.48 7.27 -7.34C7.14 -7.2 7 -6.93 6.84 -6.54C6.36 -6.77 5.82 -6.89 5.22 -6.89C4.35 -6.89 3.64 -6.67 3.1 -6.23C2.56 -5.79 2.29 -5.22 2.29 -4.53L2.29 -4.32C2.29 -3.56 2.6 -2.96 3.22 -2.5C2.74 -2.15 2.49 -1.76 2.49 -1.34C2.49 -0.95 2.66 -0.66 3.01 -0.46C2.37 -0.1 2.05 0.4 2.05 1.03ZM4.14 0.8C4.14 0.43 4.33 0.14 4.71 -0.06C4.97 -0.03 5.19 0 5.36 0.04C5.53 0.07 5.7 0.12 5.87 0.18C6.05 0.24 6.18 0.32 6.27 0.43C6.35 0.53 6.39 0.67 6.39 0.83C6.39 1.09 6.28 1.3 6.06 1.46C5.83 1.62 5.57 1.7 5.27 1.7C4.96 1.7 4.7 1.62 4.47 1.46C4.25 1.3 4.14 1.08 4.14 0.8ZM4.44 -4.33L4.44 -4.53C4.44 -4.83 4.51 -5.09 4.65 -5.29C4.79 -5.5 4.99 -5.6 5.24 -5.6C5.49 -5.6 5.69 -5.5 5.84 -5.29C5.98 -5.09 6.05 -4.83 6.05 -4.53L6.05 -4.32C6.05 -3.99 5.98 -3.73 5.84 -3.52C5.69 -3.32 5.5 -3.21 5.25 -3.21C4.99 -3.21 4.79 -3.32 4.65 -3.53C4.51 -3.74 4.44 -4.01 4.44 -4.33Z M9.37 -0.69C9.37 -0.5 9.47 -0.35 9.68 -0.21C9.89 -0.07 10.15 0 10.47 0C10.76 0 11.02 -0.07 11.25 -0.21C11.47 -0.36 11.58 -0.51 11.58 -0.69L11.58 -3.89C11.58 -4.21 11.68 -4.47 11.87 -4.67C12.07 -4.86 12.29 -4.96 12.54 -4.96C12.81 -4.96 13.06 -4.85 13.26 -4.63C13.46 -4.41 13.57 -4.16 13.57 -3.89L13.57 -0.69C13.57 -0.48 13.68 -0.31 13.9 -0.19C14.13 -0.06 14.38 0 14.67 0C14.97 0 15.23 -0.06 15.45 -0.18C15.67 -0.3 15.78 -0.47 15.78 -0.69L15.78 -3.89C15.78 -4.71 15.54 -5.41 15.06 -6C14.58 -6.59 14.01 -6.89 13.35 -6.89C12.93 -6.89 12.57 -6.78 12.26 -6.57C11.95 -6.36 11.72 -6.11 11.58 -5.8L11.58 -10.02C11.58 -10.22 11.47 -10.38 11.25 -10.5C11.03 -10.63 10.77 -10.69 10.47 -10.69C10.14 -10.69 9.88 -10.63 9.67 -10.5C9.47 -10.38 9.37 -10.22 9.37 -10.02Z M19.98 -0.69C19.98 -0.47 20.08 -0.3 20.27 -0.18C20.46 -0.06 20.69 0 20.95 0L26.04 0C26.26 0 26.43 -0.1 26.54 -0.29C26.66 -0.48 26.71 -0.7 26.71 -0.96C26.71 -1.23 26.65 -1.47 26.53 -1.66C26.42 -1.85 26.25 -1.94 26.04 -1.94L22.21 -1.94L22.21 -4.37L24.36 -4.37C24.57 -4.37 24.74 -4.46 24.86 -4.63C24.97 -4.8 25.03 -5 25.03 -5.22C25.03 -5.45 24.97 -5.66 24.85 -5.83C24.73 -6 24.56 -6.09 24.36 -6.09L22.21 -6.09L22.21 -8.5L26.04 -8.5C26.25 -8.5 26.42 -8.6 26.53 -8.79C26.65 -8.98 26.71 -9.21 26.71 -9.49C26.71 -9.74 26.66 -9.97 26.54 -10.16C26.43 -10.35 26.26 -10.45 26.04 -10.45L20.95 -10.45C20.69 -10.45 20.46 -10.39 20.27 -10.27C20.08 -10.15 19.98 -9.98 19.98 -9.76Z M27.16 -2.89C27.16 -2.09 27.41 -1.38 27.91 -0.77C28.41 -0.16 28.98 0.14 29.64 0.14C30.08 0.14 30.49 0.03 30.86 -0.19C31.23 -0.42 31.49 -0.69 31.64 -1L31.64 -0.69C31.64 -0.51 31.74 -0.36 31.94 -0.21C32.13 -0.07 32.36 0 32.63 0C32.93 0 33.19 -0.07 33.4 -0.21C33.61 -0.35 33.71 -0.5 33.71 -0.69L33.71 -10.02C33.71 -10.22 33.61 -10.38 33.41 -10.5C33.2 -10.63 32.94 -10.69 32.63 -10.69C32.3 -10.69 32.04 -10.63 31.82 -10.5C31.61 -10.38 31.5 -10.22 31.5 -10.02L31.5 -5.8C31.34 -6.11 31.1 -6.36 30.78 -6.57C30.46 -6.78 30.09 -6.89 29.69 -6.89C28.99 -6.89 28.39 -6.59 27.9 -6C27.4 -5.41 27.16 -4.71 27.16 -3.89ZM29.37 -2.89L29.37 -3.89C29.37 -4.16 29.47 -4.41 29.68 -4.63C29.88 -4.85 30.13 -4.96 30.41 -4.96C30.69 -4.96 30.94 -4.86 31.16 -4.66C31.39 -4.46 31.5 -4.2 31.5 -3.89L31.5 -2.7C31.5 -2.55 31.39 -2.36 31.16 -2.13C30.93 -1.9 30.68 -1.79 30.4 -1.79C30.12 -1.79 29.88 -1.9 29.68 -2.12C29.47 -2.35 29.37 -2.6 29.37 -2.89Z M34.94 -9.14C34.94 -8.87 35.06 -8.63 35.29 -8.42C35.51 -8.22 35.79 -8.12 36.11 -8.12C36.43 -8.12 36.7 -8.22 36.93 -8.42C37.16 -8.63 37.27 -8.87 37.27 -9.14C37.27 -9.42 37.16 -9.66 36.93 -9.86C36.7 -10.06 36.43 -10.16 36.11 -10.16C35.79 -10.16 35.51 -10.06 35.29 -9.86C35.06 -9.66 34.94 -9.42 34.94 -9.14ZM35.01 -0.69C35.01 -0.5 35.12 -0.35 35.33 -0.21C35.54 -0.07 35.8 0 36.11 0C36.42 0 36.68 -0.07 36.9 -0.21C37.12 -0.36 37.23 -0.51 37.23 -0.69L37.23 -6.13C37.23 -6.33 37.12 -6.49 36.91 -6.62C36.69 -6.74 36.43 -6.8 36.11 -6.8C35.79 -6.8 35.53 -6.74 35.32 -6.62C35.12 -6.49 35.01 -6.33 35.01 -6.13Z M38.47 -2.41C38.47 -0.8 39.41 0 41.27 0L41.89 0C42.19 0 42.43 -0.09 42.59 -0.27C42.75 -0.45 42.83 -0.67 42.83 -0.93C42.83 -1.18 42.75 -1.39 42.59 -1.58C42.43 -1.76 42.19 -1.86 41.89 -1.86L41.27 -1.86C41.05 -1.86 40.9 -1.9 40.82 -1.98C40.73 -2.06 40.69 -2.21 40.69 -2.41L40.69 -5.23L42.3 -5.23C42.47 -5.23 42.61 -5.31 42.7 -5.46C42.8 -5.61 42.85 -5.8 42.85 -6.02C42.85 -6.23 42.8 -6.41 42.7 -6.57C42.61 -6.72 42.47 -6.8 42.3 -6.8L40.69 -6.8L40.69 -9.09C40.69 -9.28 40.58 -9.44 40.35 -9.57C40.13 -9.69 39.87 -9.76 39.57 -9.76C39.3 -9.76 39.04 -9.69 38.82 -9.57C38.59 -9.44 38.47 -9.28 38.47 -9.09Z M43.63 -9.14C43.63 -8.87 43.75 -8.63 43.97 -8.42C44.2 -8.22 44.48 -8.12 44.8 -8.12C45.12 -8.12 45.39 -8.22 45.62 -8.42C45.85 -8.63 45.96 -8.87 45.96 -9.14C45.96 -9.42 45.85 -9.66 45.62 -9.86C45.39 -10.06 45.12 -10.16 44.8 -10.16C44.48 -10.16 44.2 -10.06 43.97 -9.86C43.75 -9.66 43.63 -9.42 43.63 -9.14ZM43.7 -0.69C43.7 -0.5 43.81 -0.35 44.02 -0.21C44.23 -0.07 44.49 0 44.8 0C45.11 0 45.37 -0.07 45.59 -0.21C45.81 -0.36 45.92 -0.51 45.92 -0.69L45.92 -6.13C45.92 -6.33 45.81 -6.49 45.6 -6.62C45.38 -6.74 45.12 -6.8 44.8 -6.8C44.48 -6.8 44.21 -6.74 44.01 -6.62C43.8 -6.49 43.7 -6.33 43.7 -6.13Z M46.93 -2.89C46.93 -2.09 47.26 -1.38 47.9 -0.77C48.55 -0.16 49.31 0.14 50.18 0.14C51.04 0.14 51.8 -0.16 52.45 -0.77C53.11 -1.38 53.43 -2.09 53.43 -2.89L53.43 -3.89C53.43 -4.71 53.11 -5.41 52.46 -6C51.81 -6.59 51.05 -6.89 50.18 -6.89C49.29 -6.89 48.53 -6.59 47.89 -5.99C47.25 -5.4 46.93 -4.7 46.93 -3.89ZM49.15 -2.89L49.15 -3.89C49.15 -4.16 49.25 -4.41 49.45 -4.63C49.66 -4.85 49.9 -4.96 50.18 -4.96C50.45 -4.96 50.69 -4.85 50.9 -4.63C51.11 -4.41 51.22 -4.16 51.22 -3.89L51.22 -2.89C51.22 -2.6 51.12 -2.35 50.91 -2.12C50.71 -1.9 50.46 -1.79 50.18 -1.79C49.89 -1.79 49.65 -1.9 49.45 -2.12C49.25 -2.35 49.15 -2.6 49.15 -2.89Z M54.46 -0.69C54.46 -0.5 54.57 -0.35 54.78 -0.21C54.99 -0.07 55.25 0 55.56 0C55.86 0 56.12 -0.07 56.34 -0.21C56.56 -0.36 56.68 -0.51 56.68 -0.69L56.68 -3.89C56.68 -4.21 56.77 -4.47 56.97 -4.67C57.16 -4.86 57.39 -4.96 57.63 -4.96C57.91 -4.96 58.15 -4.85 58.36 -4.63C58.56 -4.41 58.66 -4.16 58.66 -3.89L58.66 -0.69C58.66 -0.48 58.77 -0.31 59 -0.19C59.22 -0.06 59.48 0 59.76 0C60.07 0 60.33 -0.06 60.55 -0.18C60.77 -0.3 60.88 -0.47 60.88 -0.69L60.88 -3.89C60.88 -4.71 60.64 -5.41 60.16 -6C59.67 -6.59 59.11 -6.89 58.45 -6.89C58 -6.89 57.61 -6.78 57.27 -6.57C56.93 -6.36 56.69 -6.11 56.53 -5.8L56.53 -6.13C56.53 -6.33 56.44 -6.49 56.25 -6.62C56.06 -6.74 55.83 -6.8 55.56 -6.8C55.24 -6.8 54.97 -6.74 54.77 -6.62C54.56 -6.49 54.46 -6.33 54.46 -6.13Z"></path>
                     </g>
                  </g>
               </svg>
            </Link>
         </div>
         <ul className="nav-links">
            {linksToShow.map((link, index) => (
               <li key={index}>
                  <Link to={link.to}>{link.text}</Link>
               </li>
            ))}
         </ul>
      </nav>
   )
}

export default NavBarTop
