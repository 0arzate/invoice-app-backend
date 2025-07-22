import { HTTP_STATUS } from '../constants/index.js'
import { INVOICES } from '../constants/invoices.js'

export const getInvoiceByIdController = (req, res) => {
  const { id } = req.params
  const invoice = INVOICES.find((invoice) => invoice.id === id)

  if (!invoice) {
    return res.status(HTTP_STATUS.NOT_CONTENT).json()
  }

  res.status(HTTP_STATUS.OK).json({
    data: invoice
  })
}
