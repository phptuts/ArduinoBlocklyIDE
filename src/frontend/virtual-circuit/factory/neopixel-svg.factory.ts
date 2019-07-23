import * as fs from "fs";
import * as path from "path";
import { NeopixelSvg } from "../svg/neopixel.svg";
import { Element, Parent } from "svg.js";
import { VirtualCircuit } from "../svg/virtual-circuit";
import { NeoPixelStripState } from "../../arduino/state/neo_pixel_strip.state";
import { createBreadboardWire, createGroundWire, createPowerWire } from "../svg/wire";
import { virtualCircuitPin } from "../svg/arduino.svg";


export const neoPixelFactory = (virtualCircuit: VirtualCircuit,
                         componentState: NeoPixelStripState) => {
	const neoPixelString = fs.readFileSync( path.join( __dirname, '..', '..', '..', '..', 'view', 'images', 'debug-mode', 'led_light_strip.svg' ) ).toString();

	const neopixel = new NeopixelSvg(
		virtualCircuit.baseSVG.svg( neoPixelString ).children().pop() as Parent,
		componentState.numberOfLeds,
		componentState.analogPin
	);

	virtualCircuit.nodes.add(neopixel.svg);

	createGroundWire(
		virtualCircuit,
		neopixel,
		neopixel.svg.select('#CONNECT_GND').first() as Element);


	createPowerWire(
		virtualCircuit,
		neopixel,
		neopixel.svg.select('#CONNECT_POWER').first() as Element);


	createBreadboardWire(
		virtualCircuit,
		neopixel,
		neopixel.svg.select('#CONNECT_DATA').first() as Element,
		neopixel.pin,
		'#006837'
	);

	virtualCircuit.arduino.showWire(virtualCircuitPin(neopixel.pin));

	(neopixel.svg as any).draggy();

	return neopixel;
};

