import { Middleware } from "../type";
import express from 'express';


export const JsonMiddleware: Middleware = express.json();
export const UrlEncodedMiddleware: Middleware = express.urlencoded({ extended: true });