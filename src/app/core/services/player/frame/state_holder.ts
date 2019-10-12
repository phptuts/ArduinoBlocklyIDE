import { ElectricAttachmentComponentState } from '../arduino/state/electric.state';
import { RFIDState } from '../arduino/state/rfid.state';
import { Block } from 'blockly';
import { stringToPin, ARDUINO_UNO_PINS } from '../arduino/arduino_frame';

export const listOfStateHoldersBlocks: {
  [key: string]: {
    fieldsToCollect: Array<FakeInputMap>;
    type: string;
    convertToState: (
      block: Block,
      serializedData: any[],
      loopNumber: number
    ) => ElectricAttachmentComponentState;
  };
} = {
  rfid_setup_block: {
    type: 'rfid_component',
    fieldsToCollect: [
      {
        setupBlockFieldName: 'scanned_card',
        sensorBlockType: 'rfid_scan',
        dataSaveKey: 'scanned_card',
        type: 'field_checkbox',
        defaultValue: false
      },
      {
        setupBlockFieldName: 'card_number',
        sensorBlockType: 'rfid_card',
        dataSaveKey: 'card_number',
        defaultValue: 'card',
        type: 'field_input'
      },
      {
        setupBlockFieldName: 'tag',
        sensorBlockType: 'rfid_tag',
        dataSaveKey: 'tag',
        defaultValue: 'tag',
        type: 'field_input'
      }
    ],
    convertToState(
      setupBlock: Block,
      listOfInput: Array<{
        tag: string;
        card_number: string;
        scanned_card: boolean;
      }>,
      loopNumber: number
    ) {
      const rxPin =
        stringToPin(setupBlock.getFieldValue('RX')) || ARDUINO_UNO_PINS.PIN_7;
      const txPin =
        stringToPin(setupBlock.getFieldValue('TX')) || ARDUINO_UNO_PINS.PIN_6;

      if (!listOfInput) {
        return new RFIDState(rxPin, txPin, false, '', '');
      }
      const data = listOfInput[loopNumber];

      return new RFIDState(
        rxPin,
        txPin,
        data.scanned_card,
        data.card_number,
        data.tag
      );
    }
  }
};

export interface FakeInputMap {
  setupBlockFieldName: string;
  sensorBlockType: string;
  dataSaveKey: string;
  type: string;
  defaultValue: any;
}
