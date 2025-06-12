import express, { Router } from 'express'
import { ROUTES } from '../../constants'

export const homeRouter = Router()

homeRouter.get(ROUTES.HOME, express.static('public'))
