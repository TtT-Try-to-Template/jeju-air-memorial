import React, { HTMLAttributes, ReactNode } from 'react';
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  size?: FontSize;
  desktopSize?: FontSize;
  fontStyle?: 'sincere' | 'normal';
} & HTMLAttributes<HTMLSpanElement>;

const Typo: React.FC<Props> = ({
                                 children,
                                 fontStyle = 'sincere',
                                 size,
                                 desktopSize,
                                 className,
                                 ...props
}) => {
  return (
    <span
      className={cn(["text-black", getFontStyle(fontStyle), `text-${size}`, className])}
      style={{
        fontSize: fontSize[size || "md"],
      }}
      {...props}
    >
      {children}
    </span>
  );
};

const getFontStyle = (style: 'sincere' | 'normal') => {
  switch (style) {
    case 'sincere':
      return 'font-gowon';
    case 'normal':
      return 'font-pretendard';
  }
}

type FontSize = "sm" | "md" | "lg" | "xl";

const fontSize = {
  sm: 12,
  md: 14,
  lg: 18,
  xl: 24,
};

export default Typo;
