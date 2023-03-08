import React, { lazy, Suspense, FC } from "react";
import { View, StyleProp, ImageStyle } from "react-native";

const ImageLoader = lazy(() => import("./ImageLoader"));
type Props = {
  src: string | undefined;
  style: StyleProp<ImageStyle>;
};

const LaziImageLoader: FC<Props> = ({ src, style }) => {
  return (
    <Suspense fallback={<View />}>
      <ImageLoader src={src} style={style} />
    </Suspense>
  );
};

export default LaziImageLoader;
