import { Panels } from "./products";

export interface InventoryItem {
    product: string;
    price: number;
    quantity: number;
}

const inventory: InventoryItem[] = [
    { product: "motor", price: 10.0, quantity: 10 },
    { product: "sensor", price: 12.5, quantity: 4 },
    { product: "LED", price: 1.0, quantity: 20 },
];

export function calcInventoryValue(inventoryarray: InventoryItem[]) {
    if (!inventoryarray.length) return 0;

    let total = 0;
    inventoryarray.forEach(
        (item) => (total += item.product.price * item.quantity)
    );

    return total;
}
const addedTotal = calcInventoryValue(InventoryItem);
console.log(addedTotal);
