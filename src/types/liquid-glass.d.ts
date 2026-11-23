import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'liquid-glass': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          backdrop?: string;
          dim?: string | number;
          colors?: string;
          'inner-light'?: boolean | string;
          'reduce-motion'?: boolean | string;
          'no-pointer'?: boolean | string;
        },
        HTMLElement
      >;
    }
  }

  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'liquid-glass': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & {
            backdrop?: string;
            dim?: string | number;
            colors?: string;
            'inner-light'?: boolean | string;
            'reduce-motion'?: boolean | string;
            'no-pointer'?: boolean | string;
          },
          HTMLElement
        >;
      }
    }
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    glass?: boolean | string;
    'glass-drag'?: boolean | string;
  }
}

declare module '@/lib/liquid-glass' {
  export {};
}
