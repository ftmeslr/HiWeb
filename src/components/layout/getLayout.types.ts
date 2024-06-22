/* eslint-disable no-unused-vars */

import type { NextPage } from 'next';

import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

// TODO: must be check !!!
export type IGetLayout = (page: ReactNode) => NextPage | any;
export type ILayoutPage = ReactElement<
  any,
  string | JSXElementConstructor<any>
>;
