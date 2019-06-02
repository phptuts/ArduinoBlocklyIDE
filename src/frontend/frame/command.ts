export interface Command {

	readonly type: COMMAND_TYPE;

	readonly command: string;
}

export class EmptyCommand implements Command{

	public readonly command = '';
	type = COMMAND_TYPE.EMPTY;

}

export class TimeCommand implements Command {

	constructor(public readonly command: string) {}

	public type = COMMAND_TYPE.TIME;
}

export class MessageCommand implements  Command{
	constructor(public readonly command: string) { }
	readonly type = COMMAND_TYPE.MESSAGE;
}

export enum COMMAND_TYPE {
	USB,
	TIME,
	EMPTY,
	MESSAGE,
	BLUETOOTH_MESSAGE
}
