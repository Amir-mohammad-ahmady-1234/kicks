import CartItem from "./CartItem";

export default function CartItemsList({ items }) {
  return (
    <div className="space-y-6">
      {items.map((item, idx) => (
        <CartItem key={item.id} item={item} index={idx} />
      ))}
    </div>
  );
}
