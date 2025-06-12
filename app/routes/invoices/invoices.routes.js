import { Router } from 'express'
import { ROUTES } from '../../constants/routes'
import { getInvoicesController } from '../../controllers/invoices.controller'

export const invoicesRouter = Router()

invoicesRouter.get(ROUTES.GET_INVOICES, getInvoicesController)
