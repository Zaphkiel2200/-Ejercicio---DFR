type OrdersSummaryProps = {
  total: number;
  pending: number;
  ready: number;
};

export default function OrdersSummary({ total, pending, ready }: OrdersSummaryProps) {
  return (
    <section className="orders-summary" aria-label="Resumen de pedidos">
      <p><strong>Total de pedidos:</strong> {total}</p>
      <p><strong>Pendientes:</strong> {pending}</p>
      <p><strong>Listos:</strong> {ready}</p>
    </section>
  );
}
