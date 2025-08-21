import NextImage from "next/image";

const Image = (props) => (
  <NextImage
    unoptimized
    width={props.width || 800}
    height={props.height || 600}
    {...props}
  />
);

export default Image;
