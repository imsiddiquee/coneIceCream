# Logical expression In the template loop.

You can not use concatenate or math expression on the LWC template loop(for), because the LWC template not support logical expression except the if condition.

## Overview

How to use complex type expression in LWC, Let's create one LWC project, where we customize our favorite cone icecream. Here we used a component container, which holds two components one shows the configure cone scoop, and another one used to help us order the scoop. In the project, we need to synch data among components to calculate the total selected cone scoops and price.

### Project components internal structure

![Component-internal-structure](https://github.com/imsiddiquee/coneIceCream/blob/main/postContent/Component-internal-structure.png)

## Here we can learn:

• On template loop(for) how to use the expression like:. {[ITEM.scoop, ITEM[scoop]].join(' ')}

• How to pass data among component and synch data functionality, add/removed order; accumulate/lifted
the cone scoop, Two-component data must be a synch.

• Popup event.

• Base on event data syncs with components.
• On property object array; a way to calculate the accumulated sum.
• Update specific object on the array, without change the list order.
• In an array without a change order, how to remove a specific object?
• How to use the conditional spinner on the components container?

I break down the project components into easy-to-understand parts with self-explanatory code. Want to understand template expression and data synch process(add/removed), without breaking the array index among components? Please review the work!

In LWC templates I need to use string concatenate operation, unfortunately, LWC is not supporting logical expressions, suppose you have the following TAG

```
<template for:each={coneStack} for:item="cone">
    <div key={cone.id} class={ EXPRESSION }></div>
</template>
```

Here EXPRESSION is

```
{ITEM.scoop}{Math.random()} or {[ITEM.scoop, ITEM[scoop]].join(' ')}\
```

In LWC, you can not use that EXPRESSION , Then what you do? There is two way; you can apply expressions

1. On DATA-SOURCE, runtime add a new property which contain EXPRESSION calculated result.
2. Create a child component which internally uses a getter or tracked variable which builds the EXPRESSION.
   I applied this concept in my coneScoop component at addConFlavorItem() method and implement in following

```
<div key={cone.id} class={cone.flavorClass}></div>
```

In project Need to update array specific object property, updateIceCreamQty() method help to understand, on runtime how to update list object property, Here we update qty property.

```
updateIceCreamQty(flavorindex, token = "add") {
    let result = [...this.iceCreamItemList];

    let currentItem = result[flavorindex];
    if (token === "removed") {
      currentItem.qty = currentItem.qty - 1;
    } else {
      currentItem.qty = currentItem.qty + 1;
    }

    result.splice(flavorindex, 1, currentItem);
    this.iceCreamItemList = result;
  }
```

updated (increase or decrase)and with change the list index modify the object. in my applicatoin requested order is important, any type of list index changed mess the order component functionality.
On object list how to calculated total summary and total items, my implemented methods getTotalPrice() and getTotalScoop(). give you practical idea.

```
get getTotalPrice() {
    let totalPrice = this.iceCreamItemList.reduce(
      (n, { qty, price }) => n + qty * price,
      0
    );

    return totalPrice + " $";
  }
  get getTotalScoop() {
    let totalScoop = this.iceCreamItemList.reduce((n, { qty }) => n + qty, 0);

    return totalScoop;
  }

```
