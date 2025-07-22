import { INVOICES } from '../constants/invoices.js'

export function getInvoicesController (req, res) {
  const invoicesNormalized = INVOICES.map((invoice) => {
    const items = invoice.items

    const amount = items.reduce((total, item) => {
      const amount = item.price
      const itemsAmount = item.quantity * amount
      const totalAmount = total + itemsAmount

      return totalAmount
    }, 0)

    return {
      ...invoice,
      amount
    }
  })

  res.status(200).json({
    data: invoicesNormalized,
    totalItems: INVOICES.length
  })
}
