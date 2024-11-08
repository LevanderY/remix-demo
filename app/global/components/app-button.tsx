import {LinkProps as RemixLinkProps} from '@remix-run/react';

import {Button, ButtonProps as MUIButtonProps} from '@mui/material';

import {I18nLink} from './i18n-link';

interface AppButtonProps extends Omit<MUIButtonProps, 'href' | 'component' | 'color'> {
  to: RemixLinkProps['to'];
  color?: MUIButtonProps['color'];
  viewTransition?: boolean;
}

export const AppButton: React.FC<AppButtonProps> = ({
  viewTransition = true,
  children,
  to,
  ...props
}: AppButtonProps) => {
  return (
    <Button
      {...props}
      component={I18nLink as React.ElementType}
      viewTransition={viewTransition}
      to={to}
    >
      {children}
    </Button>
  );
};
