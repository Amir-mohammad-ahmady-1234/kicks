import Image, { ImageProps } from "next/image";

type ImageNormalCustomProps = ImageProps & {
  src?: string;
  alt?: string;
  className?: string;
};

function ImgNormalCustom({
  src = "/placeholder.svg",
  alt = "defult alt",
  className,
  ...rest
}: ImageNormalCustomProps) {
  if (!src) {
    return null;
  }
  const placeholder = rest.blurDataURL ? "blur" : "empty";
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export { ImgNormalCustom };
