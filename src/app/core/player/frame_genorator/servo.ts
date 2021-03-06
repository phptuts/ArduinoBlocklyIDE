import { Block } from 'blockly';
import { ArduinoFrame } from '../arduino/arduino_frame';
import { getInputValue } from '../frame/blockly_helper';
import { FrameLocation } from '../frame/frame';
import { ArduinoState } from '../arduino/state/arduino.state';
import { ServoState } from '../arduino/state/servo.state';
import { stringToPin } from '../arduino/arduino_frame';

export const rotate_servo_block = (
  block: Block,
  frameLocation: FrameLocation,
  previousFrame?: ArduinoFrame
): ArduinoFrame[] => {
  const state = previousFrame
    ? previousFrame.copyState()
    : ArduinoState.makeEmptyState();

  const pin = block.getFieldValue('PIN').toString();

  const angle = parseInt(
    getInputValue(block, 'DEGREE', 0, frameLocation, previousFrame).toString(),
    0
  );

  const servoState = new ServoState(angle, stringToPin(pin));
  const index = state.components.findIndex((c) => c.isEqual(servoState));
  if (index >= 0) {
    state.components[index] = servoState;
  } else {
    state.components.push(new ServoState(angle, stringToPin(pin)));
  }

  return [
    new ArduinoFrame(
      block.id,
      state,
      frameLocation,
      `Rotating servo ${servoState.pin} to this angle ${servoState.degree}°.`
    )
  ];
};
