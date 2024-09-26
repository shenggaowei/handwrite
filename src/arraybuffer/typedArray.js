// ArrayBuffer对象作为内存区域，可以存放多种类型的数据。同一段内存，不同数据有不同的解读方式，这就叫做“视图”（view）
/**
 * 普通数组与 TypedArray 数组的区别
 * TypedArray 数组的所有成员，都是同一种类型。
 * TypedArray 数组的成员是连续的，不会有空位。
 * TypedArray 数组成员的默认值为 0。比如，new Array(10)返回一个普通数组，里面没有任何成员，只是 10 个空位；new Uint8Array(10)返回一个 TypedArray 数组，里面 10 个成员都是 0。
 * TypedArray 数组只是一层视图，本身不储存数据，它的数据都储存在底层的ArrayBuffer对象之中，要获取底层对象必须使用buffer属性。
 */
{
  // 创建一个 8 字节的内存区域
  const b = new ArrayBuffer(8);

  // 创建一个 32 位整数 4 个字节的视图，v1 数组共有 2 个元素
  const v1 = new Int32Array(b);
  console.log(v1);

  // 创建一个 8 位无符号整数 1 个字节的视图，v2 数组共有 6 个元素
  // 开始于字节2，默认从 0 开始，直到缓冲区的末尾。共有 6 个元素
  const v2 = new Uint8Array(b, 2);
  console.log(v2);

  // 创建一个 16 位整数 2 个字节的视图，v3 数组共有 2 个元素
  // 开始于字节2，共有 2 个元素
  const v3 = new Int16Array(b, 2, 2);
  console.log(v3);
}
console.log("====================================\n");

{
  /**
   * 视图为2个字节，但是视图是从第一个字节开始的，导致视图的最后一个元素只能占用一个字节，所以会报错
   * 所以 byteOffset 必须是类型数组元素大小的倍数
   * 如果想从任意字节开始解读 ArrayBuffer 对象，必须使用 DataView 视图，因为 TypedArray 视图只提供 9 种固定的解读格式。
   */
  //  start offset of Int16Array should be a multiple of
  try {
    const buffer = new ArrayBuffer(8);
    const i16 = new Int16Array(buffer, 1);
  } catch (e) {
    console.log("e", e);
  }
}
console.log("====================================\n");

{
  // 视图可以不通过 ArrayBuffer 对象，直接分配内存而生成
  // 创建一个 8 个成员的 Float64Array 数组，共64个字节
  const f64a = new Float64Array(8);
  f64a[0] = 10;
  f64a[1] = 20;
  f64a[2] = f64a[0] + f64a[1];
  console.log(f64a[2]); // 30
}
console.log("====================================\n");

{
  // TypedArray 数组的构造函数，可以接受另一个 TypedArray 实例作为参数
  // 注意，此时生成的新数组，只是复制了参数数组的值，对应的底层内存是不一样的。新数组会开辟一段新的内存储存数据，不会在原数组的内存之上建立视图。
  const x = new Int8Array([1, 1]);
  const y = new Int8Array(x);
  console.log(x[0], y[0]); // 1 1
  x[0] = 2;
  console.log(x[0], y[0]); // 2 1

  // 基于同一段内存，构造不同的视图
  const z = new Int8Array(x.buffer);
  console.log(z[0]);
  console.log("z.length", z.length);
}
console.log("====================================\n");

{
  // TypedArray 数组的构造函数，可以接受普通数组作为参数
  // 4 个字节的内存区域，typedArray 视图会重新开辟内存，不会在原数组的内存上建立视图
  const typedArray = new Uint8Array([1, 2, 3, 4]);
  console.log(typedArray, typedArray.buffer.byteLength); // [1,2,3,4] 4

  // typedArray 转换为普通数组，下面三种方法都可以
  const normalArray = [...typedArray];
  const normalArray2 = Array.from(typedArray);
  const normalArray3 = Array.prototype.slice.call(typedArray);

  console.log(normalArray, Array.isArray(normalArray), Array.isArray(typedArray));
}
console.log("====================================\n");

{
  // 普通数组的操作方法和属性，对 TypedArray 数组完全适用
  // 注意，TypedArray 数组没有 concat 方法，如果想要合并多个 TypedArray 数组，可以用下面的函数
  function concatenate(resultConstructor, ...arrays) {
    let totalLength = 0;
    // 计算所有数组的总长度
    for (let arr of arrays) {
      totalLength += arr.length;
    }
    // 生成一个新的数组
    let result = new resultConstructor(totalLength);
    let offset = 0;
    for (let arr of arrays) {
      // 将所有数组拷贝到新生成的数组
      result.set(arr, offset);
      offset += arr.length;
    }
    return result;
  }
  const ret = concatenate(Uint8Array, Uint8Array.of(1, 2), Uint8Array.of(3, 4));
  console.log("concatenate", ret);
}

{
  // typedArray 数组和普通数组一样，部署了 Iterator 接口，所以可以被遍历
  let ui8 = Uint8Array.of(0, 1, 2);
  for (let byte of ui8) {
    console.log(byte);
  }
}
