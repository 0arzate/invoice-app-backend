import { Router } from 'express'
import { ROUTES } from '../../constants/routes'
import { getInvoicesController } from '../../controllers/invoices.controller'
import { getInvoiceByIdController } from '../../controllers/invoice-by-id.controller'

export const invoicesRouter = Router()

invoicesRouter.get(ROUTES.GET_INVOICES, getInvoicesController)

invoicesRouter.get(ROUTES.GET_INVOICE_BY_ID, getInvoiceByIdController)
