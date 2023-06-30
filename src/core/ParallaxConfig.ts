import { Adaptive } from "@/hooks/useAdaptativeTriggers";

export enum Pages {
  firstPage = "firstPage",
  secondPage = "secondPage",
  thirdPage = "thirdPage",
}

export interface PageConfig {
  offset: number;
  speed: number;
}

export interface LayoutConfig {
  pages: number;
}

export const ParallaxConfig: Record<
  Adaptive,
  Record<Pages, PageConfig> & LayoutConfig
> = {
  [Adaptive.xs]: {
    pages: 2,
    [Pages.firstPage]: {
      offset: 0.22,
      speed: 0.6,
    },
    [Pages.secondPage]: {
      offset: 1,
      speed: 1,
    },
    [Pages.thirdPage]: {
      offset: 1.5,
      speed: 0.5,
    },
  },
  [Adaptive.s]: {
    pages: 3,
    [Pages.firstPage]: {
      offset: 0.4,
      speed: 0.8,
    },
    [Pages.secondPage]: {
      offset: 0.8,
      speed: 0.2,
    },
    [Pages.thirdPage]: {
      offset: 1.5,
      speed: 0.5,
    },
  },
  [Adaptive.m]: {
    pages: 3,
    [Pages.firstPage]: {
      offset: 0.4,
      speed: 0.8,
    },
    [Pages.secondPage]: {
      offset: 0.8,
      speed: 0.2,
    },
    [Pages.thirdPage]: {
      offset: 1.5,
      speed: 0.5,
    },
  },
  [Adaptive.l]: {
    pages: 3,
    [Pages.firstPage]: {
      offset: 0.4,
      speed: 0.8,
    },
    [Pages.secondPage]: {
      offset: 0.8,
      speed: 0.2,
    },
    [Pages.thirdPage]: {
      offset: 1.5,
      speed: 0.5,
    },
  },
  [Adaptive.xl]: {
    pages: 3,
    [Pages.firstPage]: {
      offset: 0.4,
      speed: 0.8,
    },
    [Pages.secondPage]: {
      offset: 0.8,
      speed: 0.2,
    },
    [Pages.thirdPage]: {
      offset: 1.5,
      speed: 0.5,
    },
  },
};
