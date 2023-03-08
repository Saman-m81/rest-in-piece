import {
  StyleSheet,
  Image,
  StyleProp,
  ImageStyle,
  ActivityIndicator,
  ImageSourcePropType,
} from "react-native";
import React, { useState, FC } from "react";

type Props = {
  src?: string | undefined;
  style: StyleProp<ImageStyle>;
  srcR?: ImageSourcePropType;
};

const IMAGE_NOT_FOUND = require("../../../assets/image/404.png");

const ImageLoader: FC<Props> = ({ src, style, srcR }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };
  const handleLoadEnd = () => {
    setIsLoading(false);
  };
  const handleLoadError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <>
      {isLoading && (
        <ActivityIndicator
          style={[
            style,
            {
              alignSelf: "center",
              justifyContent: "center",
              backgroundColor: "white",
            },
          ]}
          size={30}
          color={"#4F91FF"}
        />
      )}
      {hasError && <Image source={IMAGE_NOT_FOUND} style={style} />}
      <Image
        source={srcR ? srcR : { uri: src }}
        style={[style, { display: isLoading || hasError ? "none" : "flex" }]}
        onError={handleLoadError}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
      />
    </>
  );
};

export default ImageLoader;

const styles = StyleSheet.create({});
