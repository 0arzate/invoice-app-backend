import express from "express";
import { Router } from "express";
import { ROUTES } from "../../constants";

export const homeRouter = Router();

homeRouter.get(ROUTES.HOME, express.static('public'))