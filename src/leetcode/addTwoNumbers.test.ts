import { addTwoNumbers, ListNode } from './addTwoNumbers';

describe('addTwoNumbers', () => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(7)));

  describe('ListNode', () => {
    it('initializes props correctly', () => {
      expect.assertions(2);
      const node = new ListNode(1, l2);
      expect(node.val).toBe(1);
      expect(node.next).toBe(l2);
    });

    it('defaults props correctly', () => {
      expect.assertions(2);
      const node = new ListNode(undefined, undefined);
      expect(node.val).toBe(0);
      expect(node.next).toBe(null);
    });
  });

  it('can use list nodes to construct numbers', () => {
    expect.assertions(1);
    expect(addTwoNumbers(l1, l2)).toEqual({
      next: { next: { next: { next: null, val: 1 }, val: 1 }, val: 0 },
      val: 7,
    });
  });

  it('can handle null inputs', () => {
    expect.assertions(2);
    expect(addTwoNumbers(l1, null)).toEqual(l1);
    expect(addTwoNumbers(null, l2)).toEqual(l2);
  });
});
