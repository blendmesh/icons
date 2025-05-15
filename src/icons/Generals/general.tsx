const sizeResource = 32;

export function Terraform({
  theme = "light",
  color = "black",
  size = sizeResource,
}: {
  theme?: "light" | "dark";
  color?: string;
  size?: number;
}) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
    >
      <defs></defs>

      <g fill="#813cf3">
            <path d="m12.042 6.858 8.029 4.59v9.014l-8.029-4.594z" />
            <path d="m20.5 20.415 7.959-4.575v-8.953l-7.959 4.542z" />
            <path d="m3.541 11.01 8.03 4.589v-9.009l-8.03-4.59z" />
            <path d="m12.042 25.41 8.029 4.59v-9.043l-8.029-4.589z" />
        </g>
    </svg>
  );
}

export function Drawio({
    theme = "light",
    color = "black",
    size = sizeResource,
  }: {
    theme?: "light" | "dark";
    color?: string;
    size?: number;
  }) {
  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={size}
        height={size}
      >
        <defs></defs>
  
                <path d="M2,15.353 L45.92,15.353 L45.92,2 L2,2 L2,15.353 Z M4,13.354 L43.92,13.354 L43.92,4 L4,4 L4,13.354 Z M24.706,30.201 L45.92,30.201 L45.92,16.847 L24.706,16.847 L24.706,30.201 Z M26.706,28.2 L43.92,28.2 L43.92,18.847 L26.706,18.847 L26.706,28.2 Z M2,30.201 L23.213,30.201 L23.213,16.847 L2,16.847 L2,30.201 Z M4,28.2 L21.213,28.2 L21.213,18.847 L4,18.847 L4,28.2 Z M32.567,45.047 L45.92,45.047 L45.92,31.694 L32.567,31.694 L32.567,45.047 Z M34.566,43.047 L43.92,43.047 L43.92,33.693 L34.566,33.693 L34.566,43.047 Z M16.847,45.047 L31.073,45.047 L31.073,31.694 L16.847,31.694 L16.847,45.047 Z M18.847,43.047 L29.074,43.047 L29.074,33.693 L18.847,33.693 L18.847,43.047 Z M2,45.047 L15.352,45.047 L15.352,31.694 L2,31.694 L2,45.047 Z M4,43.047 L13.353,43.047 L13.353,33.693 L4,33.693 L4,43.047 Z" fill="#E7157B" />

      </svg>
    );
  }

