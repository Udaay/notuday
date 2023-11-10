export interface ButtonProps {
  kind: "flat" | "elevated" | "link";
  children: React.ReactNode;
  style?: React.CSSProperties;
  size?: "big" | "medium" | "small";
  variant?: "primary" | "secondary";
  colorMode?: "dark" | "light";
  elevationDirection?:
    | "bottom-right"
    | "top-right"
    | "bottom-left"
    | "top-left"
    | "bottom-center"
    | "top-center"
    | "right-center"
    | "left-center";
  fullWidth?: boolean;
  showArrow?: boolean;
  disabled?: boolean;
  colorConfig?: {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    edgeColors?: {
      left?: string;
      top?: string;
      right?: string;
      bottom?: string;
    };
  };
  spacingConfig?: {
    padding?: string;
    height?: string;
    iconHeight?: string;
  };
  textStyle?: {
    // Define your text style configuration properties here
    // Example:
    fontWeight?: string;
    fontSize?: number;
    fontType?: string;
  };
  icon?: string; // URL for the image
  onClick?: () => void;
}