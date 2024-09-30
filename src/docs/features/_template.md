# {{ Feature Name }}

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
{{ Brief description of the feature }}

See also:
- [Game Design](game-design.md)

## Data Models

See the [schema.prisma](../../../prisma/schema.prisma) file for more details.

### {{ Model Name }}

- {{ field1 }}: {{ description1 }}
- {{ field2 }}: {{ description2 }}
- {{ field3 }}: {{ description3 }}
- {{ field4 }}: {{ description4 }}
- {{ field5 }}: {{ description5 }}

### Schema

```prisma
model {{ Model Name }} {
  {{ field1 }} {{ type1 }} {{ attributes1 }}
  {{ field2 }} {{ type2 }} {{ attributes2 }}
  {{ field3 }} {{ type3 }} {{ attributes3 }}
  {{ field4 }} {{ type4 }} {{ attributes4 }}
  {{ field5 }} {{ type5 }} {{ attributes5 }}
}
```
Related data models:
- {{ Related Model }}

## Features

1. {{ Feature 1 }}
   - {{ Description 1 }}

2. {{ Feature 2 }}
   - {{ Description 2 }}

3. {{ Feature 3 }}
   - {{ Description 3 }}

4. {{ Feature 4 }}
   - {{ Description 4 }}

## Architecture

### Technology Stack
- {{ Technology 1 }}: {{ Description 1 }}
- {{ Technology 2 }}: {{ Description 2 }}
- {{ Technology 3 }}: {{ Description 3 }}
- {{ Technology 4 }}: {{ Description 4 }}
- {{ Technology 5 }}: {{ Description 5 }}

### Architecture Diagram

```plaintext
{{ Insert architecture diagram here }}
```

### Data Flow of {{ Feature Name }}
1. {{ Data Flow Step 1 }}
2. {{ Data Flow Step 2 }}
3. {{ Data Flow Step 3 }}
4. {{ Data Flow Step 4 }}

### How {{ Feature Name }} Works in the Game
1. {{ Process Step 1 }}:
   - {{ Detail 1 }}
   - {{ Detail 2 }}

2. {{ Process Step 2 }}:
   - {{ Detail 1 }}
   - {{ Detail 2 }}

3. {{ Process Step 3 }}:
   - {{ Detail 1 }}
   - {{ Detail 2 }}

### API Routes
- **{{ Route Name 1 }}**: 
  - **Route**: `{{ HTTP Method }} /api/{{ route1 }}`
  - **File**: `src/pages/api/{{ route1 }}.ts`
  - **Functionality**: {{ Functionality 1 }}

- **{{ Route Name 2 }}**: 
  - **Route**: `{{ HTTP Method }} /api/{{ route2 }}`
  - **File**: `src/pages/api/{{ route2 }}.ts`
  - **Functionality**: {{ Functionality 2 }}

- **{{ Route Name 3 }}**: 
  - **Route**: `{{ HTTP Method }} /api/{{ route3 }}`
  - **File**: `src/pages/api/{{ route3 }}.ts`
  - **Functionality**: {{ Functionality 3 }}

### Components
- **{{ Component 1 }}**: {{ Description 1 }}
  - **File**: `src/components/{{ Component 1 }}.tsx`

- **{{ Component 2 }}**: {{ Description 2 }}
  - **File**: `src/components/{{ Component 2 }}.tsx`

- **{{ Component 3 }}**: {{ Description 3 }}
  - **File**: `src/components/{{ Component 3 }}.tsx`

### State Management
{{ Description of state management approach }}

### Security Considerations
- {{ Security Consideration 1 }}
- {{ Security Consideration 2 }}
- {{ Security Consideration 3 }}
- {{ Security Consideration 4 }}

### Integration with Game Flow
1. {{ Integration Step 1 }}
2. {{ Integration Step 2 }}
3. {{ Integration Step 3 }}

## Assets

### Image Assets
- **{{ Asset Type 1 }}**: 
  - **Directory**: `public/images/{{ feature-name }}/`
  - **Format**: {{ Image Format }}
  - **Naming Convention**: `{{ naming_convention }}`

### Audio Assets
- **{{ Asset Type 2 }}**: 
  - **Directory**: `public/audio/{{ feature-name }}/`
  - **Format**: {{ Audio Format }}
  - **Naming Convention**: `{{ naming_convention }}`

### Video Assets
- **{{ Asset Type 3 }}**: 
  - **Directory**: `public/video/{{ feature-name }}/`
  - **Format**: {{ Video Format }}
  - **Naming Convention**: `{{ naming_convention }}`

### Other Assets
- **{{ Asset Type 4 }}**: 
  - **Directory**: `public/{{ asset-type }}/{{ feature-name }}/`
  - **Format**: {{ Other Format }}
  - **Naming Convention**: `{{ naming_convention }}`

## Component Integration

### {{ Component 1 }}
- **File**: `src/components/{{ Component 1 }}.tsx`
- **Usage**: 
  - `src/pages/{{ usage1 }}.tsx`

### {{ Component 2 }}
- **File**: `src/components/{{ Component 2 }}.tsx`
- **Usage**: 
  - `src/pages/{{ usage2 }}.tsx`

### {{ Component 3 }}
- **File**: `src/components/{{ Component 3 }}.tsx`
- **Usage**: 
  - `src/pages/{{ usage3 }}.tsx`

### {{ Store or Context }}
- **File**: `src/stores/{{ storeName }}.ts`
- **Usage**: 
  - `src/pages/{{ usage4 }}.tsx`
  - `src/components/{{ usage5 }}.tsx`
  - `src/components/{{ usage6 }}.tsx`

### API Routes
- **{{ Route Name 1 }}**: 
  - **File**: `src/pages/api/{{ route1 }}.ts`
  - **Usage**: 
    - `src/components/{{ usage7 }}.tsx`

- **{{ Route Name 2 }}**: 
  - **File**: `src/pages/api/{{ route2 }}.ts`
  - **Usage**: 
    - `src/components/{{ usage8 }}.tsx`

### Testing
{{ Description of testing approach or placeholder for future testing plans }}

### Deployment
{{ Description of deployment process or considerations }}

## Implementation Plan

### Current Status
- {{ Current Status }}

### Plan

1. {{ Task 1 }}:
   - [ ] {{ Subtask 1 }}
   - [ ] {{ Subtask 2 }}
   - [ ] {{ Subtask 3 }}

2. {{ Task 2 }}:
   - [ ] {{ Subtask 1 }}
   - [ ] {{ Subtask 2 }}
   - [ ] {{ Subtask 3 }}

3. {{ Task 3 }}:
   - [ ] {{ Subtask 1 }}
   - [ ] {{ Subtask 2 }}
   - [ ] {{ Subtask 3 }}

## Future Enhancements
- {{ Enhancement 1 }}
- {{ Enhancement 2 }}
- {{ Enhancement 3 }}
- {{ Enhancement 4 }}