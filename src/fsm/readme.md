# js 有限状态机

网页上有一个菜单元素。鼠标悬停的时候，菜单显示；鼠标移开的时候，菜单隐藏。如果使用有限状态机描述，就是这个菜单只有两种状态（显示和隐藏），鼠标会引发状态转变。

state： 显示、隐藏
event: 鼠标悬停、鼠标移开
action: 菜单显示或者隐藏后的动作 
transition: 整个过渡的过程