# 铜锤 <Badge text="v2.0"/>

<img src="/images/expand/wires/GVCopperHammerBlock.webp" alt="铜锤 图示" class="center_image small"/>

铜锤是一种有多种用途的导线操作工具，用途如下：

## 转换导线和多面穿线块

对着导线使用铜锤，会将一格范围内的所有导线转换为多面穿线块，已摆放导线的面将互相连通，未摆放导线的面不互通

<figure class="center_image">
<img src="/images/expand/wires/copper_hammer_transform_1.webp" alt="铜锤转换导线为方向块之前 图示"/>
<figcaption>使用前</figcaption>
</figure>
<figure class="center_image" style="margin-top: 32px;">
<img src="/images/expand/wires/copper_hammer_transform_2.webp" alt="铜锤转换导线为方向块之后 图示"/>
<figcaption>使用后（下面的钻石块、砖块被移除）</figcaption>
</figure>

再次对生成的多面穿线块使用将改变其外观，第 5 次时恢复为普通导线，外观材质按顺序如下：
<table :class="$style.img_width_100px">
    <tbody>
        <tr>
            <td>木板</td>
            <td>石头</td>
            <td>砖头</td>
            <td>鹅卵石</td>
        </tr>
        <tr>
            <td><img src="/images/expand/wires/copper_hammer_texture_1.webp" alt="木板外观材质 图示"/></td>
            <td><img src="/images/expand/wires/copper_hammer_texture_2.webp" alt="石头外观材质 图示"/></td>
            <td><img src="/images/expand/wires/copper_hammer_texture_3.webp" alt="砖头外观材质 图示"/></td>
            <td><img src="/images/expand/wires/copper_hammer_texture_4.webp" alt="鹅卵石外观材质 图示"/></td>
        </tr>
    </tbody>
</table>
生成的多面穿线块可染色，但仅影响外观，内部还是无色导线，图略

另外，在创造模式物品栏中，已提供现成的六面穿线块，方便取用

> [!TIP] ❔ 没看到锗块材质？
> 因为锗块材质被专门用作 [六面跨线块](wire_through) 的材质

## 快速铺设多面穿线块

使用步骤：

1. 对着起点处使用铜锤，出现绿框

<img src="/images/expand/wires/copper_hammer_connect_1.webp" alt="铜锤铺设多面穿线块步骤1 图示" class="center_image"/>

2. 对着终点处使用铜锤，绿框将从起点连接到终点（路径不可调整）

<img src="/images/expand/wires/copper_hammer_connect_2.webp" alt="铜锤铺设多面穿线块步骤2 图示" class="center_image"/>

3. 最后，对着终点处再次使用表示确认，将按绿框在两点间铺设多面穿线块

<img src="/images/expand/wires/copper_hammer_connect_3.webp" alt="铜锤铺设多面穿线块步骤3 图示" class="center_image"/>

可通过编辑铜锤来改变多面穿线块外观材质，以及换用<span class="harnessSpan">总线</span>多面穿线块来铺设

<img src="/images/expand/wires/copper_hammer_edit_zh.webp" alt="编辑铜锤 图示" class="center_image"/>

<style module>
.img_width_100px img {
    width: 100px;
    image-rendering: pixelated;
}
</style>