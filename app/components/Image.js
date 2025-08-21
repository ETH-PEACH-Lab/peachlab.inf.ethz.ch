import NextImage from "next/image";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const Image = ({ src, width, height, ...rest }) => {
  // Prefix asset paths with basePath
  const prefix = publicRuntimeConfig.basePath || "";
  const finalSrc = src.startsWith("/") ? `${prefix}${src}` : src;

  return (
    <NextImage
      unoptimized
      width={width || 800}
      height={height || 600}
      src={finalSrc}
      {...rest}
    />
  );
};

export default Image;
