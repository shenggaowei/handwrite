import { filterLeaf } from ".";
import { param1 } from "./param";
import { ret1 } from "./ret";

describe('过滤叶子节点', () => {
    test('测试1', () => {
        expect(filterLeaf(param1)).toEqual(
            ret1
        );
    });
})

