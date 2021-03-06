// data
// data: authentication
import {AuthenticationResult} from "../authentication/types/AuthenticationResult";
import {Action} from "@ngrx/store";
import {Wine} from "../stock/entities/Wine";
export const DATA_AUTHENTICATION_SET_AUTHENTICATION: string = "DATA_AUTHENTICATION_SET_AUTHENTICATION";
export const DATA_AUTHENTICATION_CLEAR_AUTHENTICATION: string = "DATA_AUTHENTICATION_CLEAR_AUTHENTICATION";
// data: wines
export const DATA_WINES_ADD: string = "DATA_WINES_ADD";
export const DATA_WINES_REMOVE: string = "DATA_WINES_REMOVE";
export const DATA_WINES_UPDATE: string = "DATA_WINES_UPDATE";
export const DATA_WINES_UPDATE_RATE: string = "DATA_WINES_UPDATE_RATE";
export const DATA_WINES_UPDATE_STOCK: string = "DATA_WINES_UPDATE_STOCK";
export const DATA_WINES_ADD_ALL: string = "DATA_WINES_ADD_ALL";

// containers
// containers: application
export const CONTAINER_APPLICATION_ENABLE_BUSY_FLAG: string = "CONTAINER_APPLICATION_ENABLE_BUSY_FLAG";
export const CONTAINER_APPLICATION_DISABLE_BUSY_FLAG: string = "CONTAINER_APPLICATION_DISABLE_BUSY_FLAG";
// containers: editStockPage
export const CONTAINER_EDITSTOCKPAGE_SET_WINE: string = "CONTAINER_EDITSTOCKPAGE_SET_WINE";
export const CONTAINER_EDITSTOCKPAGE_CLEAR_WINE: string = "CONTAINER_EDITSTOCKPAGE_CLEAR_WINE";
// containers: collapsableSidebar
export const CONTAINER_COLLAPSABLESIDEBAR_TOGGLE: string = "CONTAINER_COLLAPSABLESIDEBAR_TOGGLE";


