import { FormBuilder } from "@angular/forms";

export interface Bug {
    _id: string;
    title: string;
    description: string;
    alias:Array<string>;
    status: BugStatus;
  }
  
  export enum BugStatus {
    Open = "open",
    InProgress = "in-progress",
    Fixed = "fixed"
  }


