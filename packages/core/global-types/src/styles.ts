export type GlobalValues = 'initial' | 'inherit' | 'unset' | 'revert' | 'revert-layer';

export type FlexDirection = 'row' | 'column';

type DisplayMultiKeywordSyntax =
  | 'block flow'
  | 'inline flow'
  | 'inline flow-root'
  | 'block flex'
  | 'inline flex'
  | 'block grid'
  | 'inline grid'
  | 'block flow-root';

export type Display =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'flow-root'
  | 'none'
  | 'contents'
  | 'table'
  | 'table-row'
  | 'list-item'
  | DisplayMultiKeywordSyntax
  | GlobalValues;

type JustifyContentPositional = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right';

export type JustifyContent =
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | JustifyContentPositional
  | GlobalValues;

export type AlignItemsPositional = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end';

export type AlignItemsBaseline = 'baseline' | 'first baseline' | 'last baseline' | 'safe center' | 'unsafe center';

export type AlignItems = 'normal' | 'stretch' | AlignItemsPositional | AlignItemsBaseline | GlobalValues;

export type FontWeightRelative = 'lighter' | 'bolder';

export type FontWeight = 'normal' | 'bold' | 100 | 200 | 300 | 400 | 600 | 700 | 800 | 900 | FontWeightRelative | GlobalValues;

export type AdjustFlex = {
  pxToRem: (pixel: number, fontSize?: number) => string;
  adjustFlex: (
    display?: Display,
    flexDirection?: FlexDirection,
    justifyContent?: JustifyContent,
    alignItems?: AlignItems
  ) => {
    display: Display;
    flexDirection: FlexDirection;
    justifyContent: JustifyContent;
    alignItems: AlignItems;
  };
};
