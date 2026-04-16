# React Gantt Chart Selection Example

A small React application demonstrating row and cell selection in the Syncfusion React Gantt Chart (`@syncfusion/ej2-react-gantt`).

## Overview

This sample configures `GanttComponent` selection behavior with sample task data. It shows programmatic row selection, selection prevention for specific rows or cells, and Syncfusion selection settings.

## Project files

- `src/App.tsx` – Gantt setup and selection logic.
- `src/data.js` – Sample task data with nested subtasks.
- `src/App.css` – Syncfusion Material theme import.

## Features

- Multiple row and cell selection
- Programmatic `selectionModule.selectRow(3)`
- Prevent selection for `TaskID === 2`
- Toggle-enabled selection mode

## Run

1. `npm install`
2. `npm start`
3. Open `http://localhost:3000`

## Dependencies

- `react`
- `react-dom`
- `react-scripts`
- `typescript`
- `@syncfusion/ej2-react-gantt`
- `@syncfusion/ej2-react-buttons`
- `@syncfusion/ej2-react-navigations`

## Notes

- Theme is loaded via `src/App.css` CDN import.
- Disable selection with `allowSelection={false}` on `GanttComponent`.

## Documentation

- https://ej2.syncfusion.com/react/documentation/gantt/selection/
- https://ej2.syncfusion.com/react/demos/#/material/gantt/selection
