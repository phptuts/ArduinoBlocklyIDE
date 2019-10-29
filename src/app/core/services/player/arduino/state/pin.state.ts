import {
  ElectricAttachmentComponentState,
  SensorComponent
} from './electric.state';
import { ElectricComponentType } from './electric.component.type';
import { ARDUINO_UNO_PINS } from '../arduino_frame';
import { Color } from '../../frame_genorator/color';

export class PinState extends SensorComponent {
  public readonly electricComponentType = ElectricComponentType.PIN;

  public readonly pins = [this.pin];

  constructor(
    public readonly pin: ARDUINO_UNO_PINS,
    public readonly type: PIN_TYPE,
    public readonly state: number,
    public readonly pinPicture: PinPicture,
    public readonly color?: Color
  ) {
    super();
  }

  public isEqual(state: ElectricAttachmentComponentState): boolean {
    return (
      state instanceof PinState &&
      state.pinPicture === this.pinPicture &&
      this.type === state.type &&
      this.color === state.color &&
      this.pin === state.pin
    );
  }

  public getFieldValue(dataKeySaveInSetupBlock: string) {
    if (this.type === PIN_TYPE.DIGITAL_INPUT) {
      return this.state > 0;
    }

    return this.state;
  }
}

export enum PIN_TYPE {
  DIGITAL_OUTPUT = 'DIGITAL_OUTPUT',
  ANALOG_OUTPUT = 'ANALOG_OUTPUT',
  ANALOG_INPUT = 'ANALOG_INPUT',
  DIGITAL_INPUT = 'DIGITAL_INPUT'
}

export enum PinPicture {
  LED = 'LED',
  SENSOR = 'SENSOR',
  PHOTO_SENSOR = 'PHOTO_SENSOR',
  TOUCH_SENSOR = 'TOUCH_SENSOR',
  SOIL_SENSOR = 'SOIL_SENSOR'
}
