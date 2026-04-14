import React, { useState, useCallback } from "react";

// 子组件用 React.memo 包裹
const Hello = React.memo(({ onClick }) => {
  console.log("✅ hello 渲染"); // 只会在真正需要时打印
  return <div onClick={onClick}>Hello Component</div>;
});

const App = () => {
  console.log("app 渲染");
  const [count, setCount] = useState(0);

  // ✅ 关键优化：依赖项为空数组，永远不会变
  const clickHandler = useCallback(() => {
    // 使用函数式更新，不需要依赖 count
    setCount(prev => prev + 1);
  }, []); // 空依赖！！

  return (
    <div>
      {/* 传递永远不变的 clickHandler */}
      <Hello onClick={clickHandler} />
      <div>计数：{count}</div>
      <button onClick={clickHandler}>增加</button>
    </div>
  );
};

export default App;