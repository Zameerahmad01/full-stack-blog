import { IKImage } from "imagekitio-react";

const Image = ({ src, className, width, height, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      transformation={[
        {
          width: width,
          height: height,
        },
      ]}
    />
  );
};

export default Image;
