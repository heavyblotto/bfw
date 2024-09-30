# Items and Inventory

## Table of Contents
- [Overview](#overview)
- [Data Models](#data-models)
- [Features](#features)
- [Architecture](#architecture)
- [Assets](#assets)
- [Component Integration](#component-integration)
- [Implementation Plan](#implementation-plan)
- [Future Enhancements](#future-enhancements)

## Overview
The Items and Inventory system allows players to collect, store, and manage various items that can be used to enhance their gameplay experience in Bigfoot War.

See also:
- [Game Design](game-design.md)

## Data Models

See the [schema.prisma](../../../prisma/schema.prisma) file for more details.

### Inventory

- id: unique identifier for the inventory
- playerProfileId: unique identifier for the player profile
- playerProfile: player profile for the inventory
- items: items for the inventory

### Item

- id: unique identifier for the item
- name: name for the item
- description: description for the item
- type: type for the item
- inventoryId: unique identifier for the inventory
- inventory: inventory for the item

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

Related data models:
- PlayerProfile

## Features

1. Item Management
   - Players can view, use, and manage items in their inventory

2. Item Types
   - Consumables: One-time use items with temporary benefits
   - Equipment: Permanent items that enhance Bigfoot abilities
   - Cosmetics: Visual enhancements for Bigfoot characters or game interface

3. Item Acquisition
   - Shop purchases
   - Rewards from achievements, challenges, or events
   - Loot drops from winning matches

4. Inventory Management
   - Limited capacity
   - Sorting and filtering options

## Architecture

### Technology Stack
- Next.js: React framework for building the user interface
- Prisma: ORM for database management
- TypeScript: For type-safe code
- Zustand: For state management

### Architecture Diagram

```plaintext
[Client]
    |
    v
[Next.js API Routes]
    |
    v
[Prisma ORM]
    |
    v
[Database]
```

### Data Flow of Items and Inventory
1. Client requests inventory data
2. API route fetches data from the database using Prisma
3. Data is returned to the client
4. Client updates local state with Zustand

### How Items and Inventory Works in the Game
1. Inventory Management:
   - Players access their inventory from the main menu
   - Items are displayed with their properties and effects

2. Item Usage:
   - Players select items to use or equip
   - Effects are applied based on item type

3. Item Acquisition:
   - Players obtain items through various means (shop, rewards, loot drops)
   - New items are added to the inventory if space is available

### API Routes
- **Get Inventory**: 
  - **Route**: `GET /api/inventory/:playerProfileId`
  - **File**: `src/pages/api/inventory/[playerProfileId].ts`
  - **Functionality**: Retrieve a player's inventory

- **Add Item**: 
  - **Route**: `POST /api/inventory/add-item`
  - **File**: `src/pages/api/inventory/add-item.ts`
  - **Functionality**: Add a new item to a player's inventory

- **Remove Item**: 
  - **Route**: `DELETE /api/inventory/remove-item`
  - **File**: `src/pages/api/inventory/remove-item.ts`
  - **Functionality**: Remove an item from a player's inventory

### Components
- **InventoryDisplay**: Shows an overview of the player's inventory
  - **File**: `src/components/InventoryDisplay.tsx`

- **ItemCard**: Displays information about a specific item
  - **File**: `src/components/ItemCard.tsx`

- **ItemUsageModal**: Allows players to use or equip items
  - **File**: `src/components/ItemUsageModal.tsx`

### State Management
The player's inventory will be stored in the Zustand store and updated in real-time as items are acquired or used.

### Security Considerations
- Implement proper authentication for inventory-related API routes
- Validate item usage and acquisition to prevent cheating
- Ensure secure transmission of inventory data

### Integration with Game Flow
1. Access inventory from main menu
2. Use items during gameplay
3. Acquire items after matches or through in-game events

## Assets

### Image Assets
- **Item Icons**: 
  - **Directory**: `public/images/items/`
  - **Format**: PNG
  - **Naming Convention**: `item_name_icon.png`

### Audio Assets
- **Item Usage Sounds**: 
  - **Directory**: `public/audio/items/`
  - **Format**: MP3
  - **Naming Convention**: `item_name_use.mp3`

## Component Integration

### InventoryDisplay
- **File**: `src/components/InventoryDisplay.tsx`
- **Usage**: 
  - `src/pages/inventory.tsx`

### ItemCard
- **File**: `src/components/ItemCard.tsx`
- **Usage**: 
  - `src/components/InventoryDisplay.tsx`

### ItemUsageModal
- **File**: `src/components/ItemUsageModal.tsx`
- **Usage**: 
  - `src/components/InventoryDisplay.tsx`

### Inventory Store
- **File**: `src/stores/inventoryStore.ts`
- **Usage**: 
  - `src/pages/inventory.tsx`
  - `src/components/InventoryDisplay.tsx`
  - `src/components/ItemUsageModal.tsx`

### API Routes
- **Get Inventory**: 
  - **File**: `src/pages/api/inventory/[playerProfileId].ts`
  - **Usage**: 
    - `src/pages/inventory.tsx`

- **Add Item**: 
  - **File**: `src/pages/api/inventory/add-item.ts`
  - **Usage**: 
    - `src/components/InventoryDisplay.tsx`

### Testing
Implement unit tests for inventory management functions and integration tests for API routes.

### Deployment
Ensure proper database migrations for the Inventory and Item models before deploying.

## Implementation Plan

### Current Status
- Basic data models defined

### Plan

1. Set up database models and migrations:
   - [ ] Create Prisma migrations for Inventory and Item models
   - [ ] Apply migrations to the database

2. Implement API routes:
   - [ ] Create GET /api/inventory/:playerProfileId route
   - [ ] Create POST /api/inventory/add-item route
   - [ ] Create DELETE /api/inventory/remove-item route

3. Develop frontend components:
   - [ ] Create InventoryDisplay component
   - [ ] Create ItemCard component
   - [ ] Create ItemUsageModal component

4. Implement state management:
   - [ ] Set up Zustand store for inventory management
   - [ ] Integrate store with components and API calls

5. Integrate with game mechanics:
   - [ ] Implement item usage logic in gameplay
   - [ ] Add inventory access to main menu

6. Testing and refinement:
   - [ ] Write unit tests for inventory functions
   - [ ] Write integration tests for API routes
   - [ ] Perform user testing and gather feedback

## Future Enhancements
- Implement item crafting or upgrade systems for more depth
- Add inventory expansion options (e.g., using Gold or achieving certain milestones)
- Integrate items with the Bigfoot ability system for synergistic effects
- Implement item trading or gifting between players (if multiplayer features are added)
- Add item durability or expiration for certain types of items
- Expand the variety of items and their effects