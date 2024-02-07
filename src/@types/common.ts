import {
    ReactNode,
    CSSProperties,
} from 'react'

export type Slide = {
    title: string;
    option: string | null;
  };

export interface CommonProps {
    className?: string
    children?: ReactNode
    style?: CSSProperties
}

export type WithProps = CommonProps

