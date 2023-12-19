import {Clock} from "three";

export default class ClockManager {

	private static _clock: Clock | null = null;

	public static getClock(): Clock {
		if (!this._clock) {
			this._clock = new Clock();
		}
		return this._clock;
	}
}
