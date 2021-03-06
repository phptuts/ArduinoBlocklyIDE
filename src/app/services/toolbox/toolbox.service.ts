import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import * as Blockly from 'blockly/core';
import { getToolBoxString } from '../../core/blockly/toolbox/toolbox';
const toolboxKey = 'blockly_tool_box';

@Injectable({
  providedIn: 'root'
})
export class ToolboxService {
  public saveToolBox(entries: ToolboxEntry[]) {
    if (Blockly.mainWorkspace) {
      Blockly.mainWorkspace.updateToolbox(getToolBoxString(entries));
    }
    return localStorage.setItem(toolboxKey, JSON.stringify(entries));
  }

  public fetchToolBox(): ToolboxEntry[] {
    if (_.isEmpty(localStorage.getItem(toolboxKey))) {
      this.saveToolBox(defaultToolbox);
    }
    return JSON.parse(localStorage.getItem(toolboxKey)) as ToolboxEntry[];
  }
}

export interface ToolboxEntry {
  name: string;
  show: boolean;
}

const defaultToolbox: ToolboxEntry[] = [
  { name: 'Logic', show: true },
  { name: 'Loops', show: true },
  { name: 'List', show: true },
  { name: 'Variables', show: true },
  { name: 'Functions', show: true },
  { name: 'Color', show: true },
  { name: 'Math', show: true },
  { name: 'Text', show: true },
  { name: 'Bluetooth', show: true },
  { name: 'Buttons', show: true },
  { name: 'Debug', show: true },
  { name: 'Message', show: true },
  { name: 'Analog', show: true },
  { name: 'Digital', show: true },
  { name: 'Time', show: true },
  { name: 'LCD Screen', show: true },
  { name: 'Led', show: true },
  { name: 'Led Light Strip', show: true },
  { name: 'Led Matrix', show: true },
  { name: 'Motor / Servo', show: true },
  { name: 'IR Remote', show: true },
  { name: 'Motion', show: true },
  { name: 'RFID', show: true },
  { name: 'Temp', show: true }
];
