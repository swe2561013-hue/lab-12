const test = require('node:test');
const assert = require('node:assert');
const { calculateOrderTotal, canReserve } = require('../src/order');

test('хөнгөлөлтгүй нийт дүн', () => {
  const items = [{ price: 45000, qty: 2 }, { price: 12000, qty: 1 }];
  assert.strictEqual(calculateOrderTotal(items), 102000);
});

test('10% хөнгөлөлттэй нийт дүн', () => {
  assert.strictEqual(calculateOrderTotal([{ price: 50000, qty: 2 }], 10), 90000);
});

test('буруу хөнгөлөлт алдаа өгнө', () => {
  assert.throws(() => calculateOrderTotal([], 120), RangeError);
});

test('үлдэгдэл хүрэлцэхгүй бол нөөцлөхгүй', () => {
  assert.strictEqual(canReserve(3, 5), false);
  assert.strictEqual(canReserve(3, 3), true);
});
