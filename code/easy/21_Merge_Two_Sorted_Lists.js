var mergeTwoLists = function (list1, list2) {
  //   const arr = [...list1, ...list2];
  const arr = list1.concat(list2);
  return arr.sort((a, b) => (a > b ? 1 : -1));
  //   if (!list1) return list2;
  //   if (!list2) return list1;

  //   // Chọn node đầu tiên của danh sách kết quả
  //   let head;
  //   if (list1.val <= list2.val) {
  //     head = list1;
  //     head.next = mergeTwoLists(list1.next, list2);
  //   } else {
  //     head = list2;
  //     head.next = mergeTwoLists(list1, list2.next);
  //   }

  //   return head;
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
