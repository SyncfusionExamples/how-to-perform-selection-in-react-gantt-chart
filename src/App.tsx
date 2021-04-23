import React from 'react';
import './App.css';
import { GanttComponent, TaskFieldsModel, ColumnsDirective, ColumnDirective, Selection, Inject} from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { projectData } from './data';
function App() {
  let ganttInst: GanttComponent | null;
  const taskValues: TaskFieldsModel = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    child: "subtasks",
    dependency: "Predeceesor"
  }
  const OnButtonClick =(args:any)=>{
    let selectionModule = (ganttInst as GanttComponent).selectionModule;
    // To select a single row
    selectionModule.selectRow(3);
    
    //Uncomment below code to select multiple row
    // selectionModule.selectRows([5,6,7]);

    //Uncomment below code to clear the selection
    // selectionModule.clearSelection();

    //Uncomment the below code to get the selected row indexes and record data.
    // console.log(selectionModule.getSelectedRowIndexes());
    // console.log(selectionModule.getSelectedRecords());
  }
  const preventRowSelection =(args:any)=>{
    // To prevent the row selction action
    if(args.data.TaskID === 2)
      args.cancel = true;
  }
  const preventCellSelection =(args:any)=>{
    // To prevent the cell selction action
    if(args.data.TaskID === 2 && args.cellIndex.cellIndex === 1)
      args.cancel = true;
  }
  return (
    <div>
      <ButtonComponent onClick={OnButtonClick}>View Row Details</ButtonComponent>

      {/* Add allowSelection={false} in below code to disable selection in entore Gantt chart */}
      <GanttComponent ref={gantt => ganttInst =gantt} dataSource={projectData} taskFields={taskValues}
                      rowSelecting={preventRowSelection}
                      cellSelecting={preventCellSelection}
                      selectionSettings={{type:"Multiple", mode: "Both", enableToggle:true}}
                      >
        <Inject services={[Selection]}></Inject>
        <ColumnsDirective>
          <ColumnDirective field="TaskID" headerText="ID" width="200"></ColumnDirective>
          <ColumnDirective field="TaskName" headerText="Name" width="250"></ColumnDirective>
          <ColumnDirective field="StartDate" format="dd-MMM-yy" width="200"></ColumnDirective>
          <ColumnDirective field="Duration" width="200"></ColumnDirective>
        </ColumnsDirective>
      </GanttComponent>
    </div>
  );
}

export default App;
