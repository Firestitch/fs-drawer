import { IMenuAction } from './menu-action.interface';
import { DrawerMenuRef } from '../classes/drawer-menu-ref';
import { DrawerRef } from '../classes/drawer-ref';
import { FsDrawerAction } from '../helpers/action-type.enum';
import { Action } from '../models/action.model';


export interface IFsDrawerActionConfig<TData = any> {
  icon: string;
  tooltip?: string;
  toggle?: boolean;
  type?: FsDrawerAction;
  name?: string;
  close?: boolean;
  disabled?: boolean;
  closeSide?: boolean;
  click?: <T, R>(data: IMenuActionClick<TData, T, R>) => void;
  show?: IDrawerActionShowFn<TData>;
  actions?: (IMenuActionGroup<TData> | IMenuAction<TData>)[];
  component?: any;
  data?: any;
}

export interface IMenuActionClick<TData = any, TCmp = any, R = any> {
  data?: TData;
  event?: MouseEvent;
  action?: Action;
  drawerRef?: DrawerRef<TCmp, R>;
  menuRef?: DrawerMenuRef<TCmp, R>;
}

export interface IMenuActionGroup<TData = any> {
  label: string;
  actions: IMenuAction<TData>[]
}

export interface IActionClickEvent {
  event: MouseEvent,
  action: Action,
}

export interface IDrawerActionShowFn<TData = any> {
  (data: TData): boolean;
}

export interface IDrawerActionLinkFn<TData = any, T= any, R = any> {
  (data: IMenuActionClick<TData, T, R>): IDrawerActionLink
}

export interface IDrawerActionLink {
  link: any[] | string;
  queryParams?: Record<string, any>;
}

