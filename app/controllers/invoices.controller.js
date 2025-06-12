import { INVOICES } from "../constants/invoices";

export function getInvoicesController(req, res) {
  res.status(200).json({
    data: INVOICES,
    totalItems: INVOICES.length,
  });
}