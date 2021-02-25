export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Definition for singly-linked list.
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(0);
  let headOne = l1;
  let headTwo = l2;
  let currentHead = dummyHead;
  let carry = 0;

  while (headOne || headTwo) {
    const x = headOne?.val || 0;
    const y = headTwo?.val || 0;

    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    currentHead.next = new ListNode(sum % 10);
    currentHead = currentHead.next;

    headOne = headOne ? headOne.next : headOne;
    headTwo = headTwo ? headTwo.next : headTwo;
  }

  if (carry > 0) {
    currentHead.next = new ListNode(carry);
  }

  return dummyHead.next;
}
