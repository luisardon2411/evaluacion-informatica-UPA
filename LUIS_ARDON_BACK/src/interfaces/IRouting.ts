import { Router } from 'express';

export interface IRouting {
    routes(): Router;
}