import { Router } from 'express'
import { ROUTES } from '../../constants/routes.js'
import { getInvoicesController } from '../../controllers/invoices.controller.js'
import { getInvoiceByIdController } from '../../controllers/invoice-by-id.controller.js'

export const invoicesRouter = Router()

invoicesRouter.get(ROUTES.GET_INVOICES, getInvoicesController)

invoicesRouter.get(ROUTES.GET_INVOICE_BY_ID, getInvoiceByIdController)
