import React, { CSSProperties } from "react";

const sizeService = 48;

export function EC2Service({
  theme = "light",
  color = "black",
  size = sizeService,
}: {
  theme?: "light" | "dark";
  color?: string;
  size?: number;
}) {
  // const cls1 = {
  //   strokeLinecap: "round",
  //   fill: "none",
  //   stroke: color,
  //   strokeWidth: "3.5px",
  // } satisfies CSSProperties;

  // const cls2 = {
  //   strokeLinecap: "square",
  //   fill: "none",
  //   stroke: color,
  //   strokeWidth: "3.5px",
  // } satisfies CSSProperties;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
    >
      <defs></defs>

      <g id="Icon-Architecture/48/Arch_Amazon-EC2_48" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Icon-Architecture-BG/48/Compute" fill="#ED7100">
            <rect id="Rectangle" x="0" y="0" width="64" height="64"></rect>
        </g>
        <path d="M22,41 L41,41 L41,23 L22,23 L22,41 Z M43,23 L46,23 L46,25 L43,25 L43,27 L46,27 L46,29 L43,29 L43,31 L46,31 L46,33 L43,33 L43,36 L46,36 L46,38 L43,38 L43,40 L46,40 L46,42 L42.863,42 C42.608,42.587 42.023,43 41.344,43 L41,43 L41,46 L39,46 L39,43 L37,43 L37,46 L35,46 L35,43 L33,43 L33,46 L31,46 L31,43 L29,43 L29,46 L27,46 L27,43 L24,43 L24,46 L22,46 L22,43 L21.656,43 C20.977,43 20.392,42.587 20.137,42 L18,42 L18,40 L20,40 L20,38 L18,38 L18,36 L20,36 L20,33 L18,33 L18,31 L20,31 L20,29 L18,29 L18,27 L20,27 L20,25 L18,25 L18,23 L20,23 L20,22.656 C20,21.743 20.743,21 21.656,21 L22,21 L22,18 L24,18 L24,21 L27,21 L27,18 L29,18 L29,21 L31,21 L31,18 L33,18 L33,21 L35,21 L35,18 L37,18 L37,21 L39,21 L39,18 L41,18 L41,21 L41.344,21 C42.257,21 43,21.743 43,22.656 L43,23 Z M32,52 L12,52 L12,32 L16,32 L16,30 L11.843,30 C10.826,30 10,30.827 10,31.843 L10,52.157 C10,53.173 10.826,54 11.843,54 L32.157,54 C33.174,54 34,53.173 34,52.157 L34,48 L32,48 L32,52 Z M54,11.843 L54,32.157 C54,33.173 53.174,34 52.157,34 L48,34 L48,32 L52,32 L52,12 L32,12 L32,16 L30,16 L30,11.843 C30,10.827 30.826,10 31.843,10 L52.157,10 C53.174,10 54,10.827 54,11.843 L54,11.843 Z" id="Amazon-EC2_Icon_48_Squid" fill="#FFFFFF"></path>
      </g>


      {/* <g id="Layer_2" data-name="Layer 2">
        <g id="svg8">
          <g id="g1579">
            <path id="path2791" style={cls1} d="M36.75,15.75h-14" />
            <path id="path2793" style={cls1} d="M15.75,15.75h-14" />
            <path id="path2795" style={cls2} d="M22.75,29.75v-28" />
            <path id="path2797" style={cls2} d="M15.75,29.75v-28" />
          </g>
        </g>
      </g> */}
    </svg>
  );
}

export function LambdaService({
  theme = "light",
  color = "black",
  size = sizeService,
}: {
  theme?: "light" | "dark";
  color?: string;
  size?: number;
}) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
    >
      <defs></defs>

      <g id="Icon-Architecture/48/Arch_AWS-Lambda_48" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Icon-Architecture-BG/48/Compute" fill="#ED7100">
            <rect id="Rectangle" x="0" y="0" width="64" height="64"></rect>
        </g>
        <path d="M22.6794094,52 L13.5740701,52 L23.8376189,30.41 L28.3997494,39.861 L22.6794094,52 Z M24.7269406,27.667 C24.5606285,27.321 24.2120702,27.103 23.8306478,27.103 L23.8276601,27.103 C23.4452418,27.104 23.0966835,27.325 22.9323632,27.672 L11.0973143,52.569 C10.9499239,52.879 10.9708374,53.243 11.1540795,53.534 C11.3353298,53.824 11.6540117,54 11.9955989,54 L23.309802,54 C23.695208,54 24.0447622,53.777 24.2100784,53.428 L30.4044577,40.284 C30.5329264,40.01 30.5319305,39.692 30.3994783,39.42 L24.7269406,27.667 Z M51.0082382,52 L41.985557,52 L26.9547262,19.578 C26.7914017,19.226 26.4388599,19 26.0524581,19 L20.1279625,19 L20.1349337,12 L31.8146251,12 L46.7747483,44.42 C46.9380728,44.774 47.2906147,45 47.6790082,45 L51.0082382,45 L51.0082382,52 Z M52.0041191,43 L48.3143803,43 L33.354257,10.58 C33.1909326,10.226 32.8383907,10 32.450993,10 L19.1400486,10 C18.5913182,10 18.1451636,10.447 18.1441677,10.999 L18.1362006,19.999 C18.1362006,20.265 18.2407681,20.519 18.4269979,20.707 C18.6142235,20.895 18.8671772,21 19.1310857,21 L25.4170861,21 L40.4479168,53.422 C40.6112413,53.774 40.9627873,54 41.350185,54 L52.0041191,54 C52.5548412,54 53,53.552 53,53 L53,44 C53,43.448 52.5548412,43 52.0041191,43 L52.0041191,43 Z" id="AWS-Lambda_Icon_48_Squid" fill="#FFFFFF"></path>
    </g>
    </svg>
  );
}