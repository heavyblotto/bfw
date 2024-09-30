
# Items and Inventory System Design

## Overview
The Items and Inventory system allows players to collect, store, and manage various items that can be used to enhance their gameplay experience in Bigfoot War.

## Data Model

### Inventory

id: unique identifier for the inventory.
playerProfileId: unique identifier for the player profile.  
playerProfile: player profile for the inventory.
items: items for the inventory.

### Item

id: unique identifier for the item.
name: name for the item.
description: description for the item.
type: type for the item.
inventoryId: unique identifier for the inventory.
inventory: inventory for the item.

### Schema
```prisma   
model Inventory {
  id              Int           @id @default(autoincrement())
  playerProfileId Int           @unique
  playerProfile   PlayerProfile @relation(fields: [playerProfileId], references: [id])
  items           Item[]
}

model Item {
  id              Int           @id @default(autoincrement())
  name            String
  description     String?
  inventoryId     Int
  inventory       Inventory     @relation(fields: [inventoryId], references: [id])
}
```


## Item Properties

- **Name**: The unique identifier for each item
- **Description**: A brief explanation of the item's purpose or effect
- **Type**: The category of the item (e.g., Consumable, Equipment, Cosmetic)
- **Effect**: The specific gameplay impact of the item
- **Rarity**: The scarcity level of the item (e.g., Common, Rare, Epic, Legendary)

## Item Types

1. **Consumables**: One-time use items that provide temporary benefits
   - Health Potions: Restore HP during a match
   - XP Boosters: Increase XP gain for a limited time
   - Gold Multipliers: Increase Gold earned from matches

2. **Equipment**: Permanent items that enhance Bigfoot abilities
   - Amulets: Boost specific stats (e.g., Attack, Defense, Luck)
   - Artifacts: Provide unique passive abilities

3. **Cosmetics**: Visual enhancements for Bigfoot characters or the game interface
   - Skins: Alternative appearances for Bigfoot characters
   - Card Backs: Custom designs for the player's card deck

## Inventory Management

- Players can view their inventory from the main menu
- The inventory has a limited capacity, encouraging strategic item management
- Players can sort and filter items by type, rarity, or effect

## Acquiring Items

1. **Shop**: Players can purchase items using Gold
2. **Rewards**: Items can be earned through achievements, daily challenges, or seasonal events
3. **Loot Drops**: Rare items may be obtained as random drops after winning matches

## Implementation Plan

1. Create the Item and Inventory models in the Prisma schema
2. Implement API routes for Inventory and Item data:
   - GET /api/inventory/:playerProfileId: Retrieve a player's inventory
   - POST /api/inventory/add-item: Add a new item to a player's inventory
   - DELETE /api/inventory/remove-item: Remove an item from a player's inventory
3. Create an InventoryDisplay component to show the player's inventory
4. Implement an ItemCard component to display individual item information
5. Add inventory management functionality to the main menu
6. Integrate the shop system with the inventory for item purchases
7. Implement item usage logic in the game mechanics

## Components

- InventoryDisplay: Shows an overview of the player's inventory
- ItemCard: Displays information about a specific item
- ItemUsageModal: Allows players to use or equip items

## State Management

- Store the player's inventory in the Zustand store
- Update inventory state in real-time as items are acquired or used

## Next Steps

1. Design and implement a diverse set of items with varying effects and rarities
2. Create a balanced economy for item acquisition and usage
3. Implement inventory expansion options (e.g., using Gold or achieving certain milestones)
4. Add item crafting or upgrade systems for more depth
5. Integrate items with the Bigfoot ability system for synergistic effects
6. Implement item trading or gifting between players (if multiplayer features are added)

## Considerations

- Ensure item effects are balanced and don't create unfair advantages
- Implement proper error handling for inventory management operations
- Consider implementing item durability or expiration for certain types of items
- Plan for future scalability, such as adding new item types or effects