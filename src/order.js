// Захиалгын нийт дүнг (хөнгөлөлттэй) тооцох.
function calculateOrderTotal(items, discountPercent = 0) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new RangeError('discountPercent must be 0..100');
  }
  const sum = items.reduce((s, i) => s + i.price * i.qty, 0);
  return Math.round(sum * (1 - discountPercent / 100));
}

// Үлдэгдэл хүрэлцэх эсэх (давхар зарахаас сэргийлэх).
function canReserve(stockQty, requestedQty) {
  return Number.isInteger(requestedQty) && requestedQty > 0 && requestedQty <= stockQty;
}

module.exports = { calculateOrderTotal, canReserve };
