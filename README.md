# React Gantt Chart Selection Example

A React sample application demonstrating row and cell selection behavior in the Syncfusion React Gantt Chart component using `@syncfusion/ej2-react-gantt`.

## Project Overview

The sample focuses on applying selection settings to a Gantt chart that displays hierarchical task data. It demonstrates enabling row and cell selection, selecting rows through code, and preventing selection for specific tasks based on defined conditions.

## Features

- Row and cell selection support
- Programmatic row selection using the Gantt selection module
- Conditional prevention of selection for specific task records
- Toggle-based enablement of selection behavior

## Getting Started

### Prerequisites

- Node.js (LTS or later)
- npm

### Installation and Run

Install dependencies and start the development server:

```

npm install
npm start

```

Open `http://localhost:3000`

## Notes

- Selection behavior is configured using the `selectionSettings` property on `GanttComponent`.
- Programmatic selection can be performed using methods such as `selectionModule.selectRow`.
- Selection can be disabled entirely by setting `allowSelection={false}`.
- Theme styles are imported through `src/App.css` to apply a Syncfusion Material theme.

## Documentation

- Selection documentation: https://ej2.syncfusion.com/react/documentation/gantt/selection/
- Online demo: https://ej2.syncfusion.com/react/demos/#/material/gantt/selection
