"use client";
import { Product_Image } from "@/types";
import React, { useRef } from "react";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";
import { urlForImage } from "../../../sanity/lib/image";
import { Button } from "../ui/button";
import { Minus, Plus, X } from "lucide-react";

type UtilsFc = () => void;

const Controls = ({
  zoomIn,
  zoomOut,
  resetTransform,
}: {
  zoomIn: UtilsFc;
  zoomOut: UtilsFc;
  resetTransform: UtilsFc;
}) => (
  <div className='flex items-center gap-3 justify-center w-fit h-fit mb-1 flex-col absolute left-0 top-1 z-10'>
    <Button variant={"default"} size={"icon"} onClick={() => zoomIn()}>
      {" "}
      <Plus size={12} />{" "}
    </Button>
    <Button variant={"outline"} size={"icon"} onClick={() => zoomOut()}>
      {" "}
      <Minus size={12} />{" "}
    </Button>
    <Button
      variant={"destructive"}
      size={"icon"}
      onClick={() => resetTransform()}
    >
      {" "}
      <X size={12} />{" "}
    </Button>
  </div>
);

export default function Component({ src }: { src: Product_Image }) {
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const zoomToImage = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("imgExample");
    }
  };

  return (
    <div className=' relative'>
      <TransformWrapper
        initialScale={1}
        // initialPositionX={200}
        // initialPositionY={100}
        ref={transformComponentRef}
      >
        {(utils) => (
          <React.Fragment>
            <Controls {...utils} />
            <TransformComponent>
              <img src={`${urlForImage(src)}`} alt='product' id='imgExample' />
              {/* <div onClick={zoomToImage}>Example text</div> */}
            </TransformComponent>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
}
