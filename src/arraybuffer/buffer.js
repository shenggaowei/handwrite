{
  // 生成一段 32 字节的内存区域
  const buff = new ArrayBuffer(32);
  const dataView = new DataView(buff);
  // 建立 DataViw 视图，然后以不带符号的 8 位整数格式，从头读取 8 位二进制数据，第一个字节
  const ret = dataView.getUint8(0);
  console.log("ret===>", ret, buff, buff.byteLength); // 0
}
console.log("====================================\n");

{
  // 生成一段 12 字节的内存区域
  const buffer = new ArrayBuffer(12);
  // 生成一个 32 位整数(4个字节)的视图, x1 和 x2 共享同一内存区域，x1 共有 3 个元素，x2 共有 12 个元素
  const x1 = new Int32Array(buffer);
  // 将视图 x1 的第一个元素即前 4 个字节的内存区域的第一个字节设置为 1
  x1[0] = 1;
  // 生成一个 8 位整数(1个字节)的视图
  const x2 = new Uint8Array(buffer);
  // 将视图 x2 的第一个元素即前 1 个字节的内存区域的第一个字节设置为 2
  x2[0] = 2;

  console.log(x1); // 2
  console.log(x2);
  console.log(buffer);
}
console.log("====================================\n");

{
  // 将普通数组作为参数，直接分配内存生成底层的 ArrayBuffer 实例，并同时完成对这段内存的赋值
  const typedArray = new Uint8Array([0, 1, 2]);
  typedArray[0] = 5;
  console.log(typedArray);
  console.log(typedArray.buffer);
}
console.log("====================================\n");

{
  const buffer = new ArrayBuffer(32);
  const byteLength = buffer.byteLength;
  // 如果分配的内存区域很大，有可能会分配失败，有必要检查是否分配成功
  // 实际测试，分配失败，会抛出异常。所以这里的判断是多余的，得用 try catch
  if (buffer.byteLength === 32) {
    console.log(byteLength); // 32
  } else {
    console.log("失败");
  }
}
console.log("====================================\n");

{
  // slice 分为两步，第一步先分配一段新内存，第二步是将原来那个 ArrayBuffer 对象拷贝过去
  const buffer = new ArrayBuffer(8);
  // 0 开始的字节序号（包含该字节），3 为截止的字节序号（不包含该字节）
  const newBuffer = buffer.slice(0, 3);
}
console.log("====================================\n");

{
  // ArrayBuffer有一个静态方法isView，返回一个布尔值，表示参数是否为ArrayBuffer的视图实例。
  //这个方法大致相当于判断参数，是否为TypedArray实例或DataView实例。
  const buffer = new ArrayBuffer(8);
  ArrayBuffer.isView(buffer); // false

  const v = new Int32Array(buffer);
  ArrayBuffer.isView(v); // true
}
