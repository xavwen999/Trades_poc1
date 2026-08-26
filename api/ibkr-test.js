export default async function handler(req, res) {
  // Deliberately does not submit orders.
  return res.status(200).json({
    ok: true,
    connected: false,
    mode: "connectivity-poc",
    message: "Execution endpoint is deployed. IBKR credentials/API endpoint are not configured yet.",
    ordersSubmitted: 0
  });
}
